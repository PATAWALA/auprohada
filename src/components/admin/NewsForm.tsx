"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import Button from "../ui/Button";

export default function NewsForm() {
  const supabase = createClient();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [year, setYear] = useState(2026);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      alert("Configuration Supabase manquante.");
      return;
    }
    setLoading(true);
    let imageUrl = "";
    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from("news-images")
        .upload(fileName, imageFile);
      if (!uploadError) {
        const { data } = supabase.storage.from("news-images").getPublicUrl(fileName);
        imageUrl = data.publicUrl;
      }
    }
    const { error } = await supabase.from("news").insert([
      {
        title,
        excerpt,
        year,
        image: imageUrl || "/images/news/default.jpg",
        category: "Événement",
      },
    ]);
    if (!error) {
      setSuccess(true);
      setTitle("");
      setExcerpt("");
      setImageFile(null);
    } else {
      alert("Erreur lors de la publication.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border-2 border-gray-200 max-w-2xl">
      <h3 className="font-display text-2xl font-bold text-premium-dark">Publier une actualité</h3>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Titre</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Résumé</label>
        <textarea
          required
          rows={3}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Année</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full border-2 border-gray-300 p-3 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-royal file:text-white hover:file:bg-royal-700"
          />
        </div>
      </div>
      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? "Envoi..." : "Publier"}
      </Button>
      {success && <p className="text-green-700 font-semibold">Actualité publiée avec succès.</p>}
    </form>
  );
}