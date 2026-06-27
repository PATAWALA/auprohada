"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function EvenementsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler enregistrement Supabase
    setSubmitted(true);
  };

  return (
    <main className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {!submitted ? (
          <>
            <p className="text-gold font-semibold tracking-[0.2em] uppercase mb-4">
              Prochain Webinaire
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-premium-dark leading-tight mb-6">
              « L’OHADA et la compétitivité des entreprises africaines »
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Une conférence en ligne animée par des experts du droit des
              affaires, le <strong className="text-royal">jeudi 24 juillet 2026 à 16h GMT</strong>.
            </p>
            <p className="text-gray-500 mb-12">
              Inscrivez-vous gratuitement pour recevoir le lien de connexion.
            </p>

            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-6 text-left"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
                />
              </div>
              <Button type="submit" variant="gold" className="w-full">
                S’inscrire au webinaire
              </Button>
            </form>
          </>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="bg-royal text-white p-10">
              <h2 className="font-display text-2xl font-bold mb-4">
                Inscription confirmée
              </h2>
              <p className="mb-6">
                Merci, {formData.fullName}. Votre inscription au webinaire a été
                prise en compte. Vous recevrez le lien de connexion par email
                avant l’événement.
              </p>
              <Button
                variant="white"
                href="https://zoom.us/j/1234567890"
                target="_blank"
              >
                Accéder au webinaire (lien Zoom)
              </Button>
            </div>
            <div className="mt-10 p-10 border-2 border-gold">
              <p className="font-semibold text-premium-dark text-lg mb-3">
                Rejoignez notre canal WhatsApp
              </p>
              <p className="text-gray-600 mb-6">
                Recevez les rappels et les ressources exclusives partagées
                pendant la conférence.
              </p>
              <Button
                variant="gold"
                href="https://chat.whatsapp.com/invitation-link"
                target="_blank"
              >
                Rejoindre le canal WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}