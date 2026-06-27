"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

interface NewsItem {
  id: number;
  title: string;
  year: number;
  created_at: string;
}

export default function NewsList() {
  const supabase = createClient();
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (!supabase) return;
    const fetchNews = async () => {
      const { data } = await supabase
        .from("news")
        .select("id, title, year, created_at")
        .order("created_at", { ascending: false });
      if (data) setNews(data);
    };
    fetchNews();
  }, [supabase]);

  const handleDelete = async (id: number) => {
    if (!supabase) return;
    const { error } = await supabase.from("news").delete().eq("id", id);
    if (!error) {
      setNews(news.filter((item) => item.id !== id));
    }
  };

  if (!supabase) {
    return <p className="text-gray-500">Base de données non configurée.</p>;
  }

  return (
    <div className="bg-white border-2 border-gray-200 p-6">
      <h3 className="font-display text-2xl font-bold text-premium-dark mb-6">
        Actualités publiées
      </h3>
      {news.length === 0 ? (
        <p className="text-gray-500">Aucune actualité pour le moment.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {news.map((item) => (
            <li key={item.id} className="py-4 flex justify-between items-start">
              <div>
                <p className="font-bold text-premium-dark">{item.title}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 hover:text-red-800 font-semibold text-sm"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}