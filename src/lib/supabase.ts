import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Récupération des variables d’environnement
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Si les clés ne sont pas définies, on retourne null (démo sans Supabase)
  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== "undefined") {
      console.warn(
        "Supabase n’est pas configuré. Les fonctionnalités de base de données sont désactivées."
      );
    }
    return null;
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}