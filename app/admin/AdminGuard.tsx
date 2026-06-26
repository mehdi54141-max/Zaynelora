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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifier = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin-login");
        return;
      }

      if (user.email !== ADMIN_EMAIL) {
        await supabase.auth.signOut();
        router.replace("/admin-login");
        return;
      }

      setLoading(false);
    };

    verifier();
  }, [router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Vérification...
      </main>
    );
  }

  return <>{children}</>;
}