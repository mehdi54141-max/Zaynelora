"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "beamroom.nova@gmail.com";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [autorise, setAutorise] = useState(false);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const verifierSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user || user.email !== ADMIN_EMAIL) {
        await supabase.auth.signOut();
        router.replace("/admin-login");
        return;
      }

      setAutorise(true);
      setChargement(false);
    };

    verifierSession();
  }, [router]);

  if (chargement) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf8f5] text-[#6f5643]">
        Vérification de la session...
      </main>
    );
  }

  if (!autorise) {
    return null;
  }

  return <>{children}</>;
}
}
