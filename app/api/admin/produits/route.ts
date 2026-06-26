import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nom = String(formData.get("nom") || "");
    const slug = String(formData.get("slug") || "");
    const collection = String(formData.get("collection") || "");
    const description = String(formData.get("description") || "");
    const prix = Number(formData.get("prix") || 0);
    const couleur = String(formData.get("couleur") || "");
    const stock = Number(formData.get("stock") || 0);
    let imageUrl = String(formData.get("image_url") || "");

    const image = formData.get("image");

    if (image instanceof File && image.size > 0) {
      const extension = image.name.split(".").pop();
      const nomFichier = `${Date.now()}-${slug}.${extension}`;

      const { error: uploadError } = await supabaseAdmin.storage
        .from("produits")
        .upload(nomFichier, image, {
          cacheControl: "3600",
          upsert: false,
          contentType: image.type,
        });

      if (uploadError) {
        return NextResponse.json(
          { error: uploadError.message },
          { status: 500 }
        );
      }

      const { data } = supabaseAdmin.storage
        .from("produits")
        .getPublicUrl(nomFichier);

      imageUrl = data.publicUrl;
    }

    const { error } = await supabaseAdmin.from("produits").insert({
      nom,
      slug,
      collection,
      description,
      prix,
      couleur,
      image_url: imageUrl,
      stock,
      actif: true,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur lors de l'ajout du produit." },
      { status: 500 }
    );
  }
}