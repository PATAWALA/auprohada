"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import Button from "../ui/Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    if (!supabase) {
      setError("Configuration Supabase manquante.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError("Email ou mot de passe incorrect.");
    } else {
      window.location.href = "/admin";
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-6">
      <h1 className="font-display text-3xl font-bold text-premium-dark text-center">
        Accès administrateur
      </h1>
      {error && (
        <div className="bg-red-50 border-2 border-red-200 text-red-700 p-3 text-sm">
          {error}
        </div>
      )}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Mot de passe</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full" disabled={loading}>
        {loading ? "Connexion..." : "Se connecter"}
      </Button>
    </form>
  );
}