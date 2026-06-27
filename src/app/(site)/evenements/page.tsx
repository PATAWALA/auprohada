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
    // Simulation d'enregistrement (Supabase plus tard)
    setSubmitted(true);
  };

  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!submitted ? (
          <>
            {/* En-tête */}
            <div className="text-center mb-16">
              <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
              <p className="text-gold font-semibold tracking-[0.2em] uppercase mb-4">
                Prochain Webinaire
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-premium-dark leading-tight mb-6">
                «&nbsp;L’OHADA et la compétitivité des entreprises
                africaines&nbsp;»
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                Une conférence en ligne animée par des experts du droit des
                affaires, le{" "}
                <strong className="text-royal">
                  jeudi 24 juillet 2026 à 16h GMT
                </strong>
                .
              </p>
              <p className="text-gray-500">
                Inscrivez-vous gratuitement pour recevoir le lien de connexion.
              </p>
            </div>

            {/* Formulaire */}
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-8"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 bg-white p-3 focus:border-royal focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 bg-white p-3 focus:border-royal focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 bg-white p-3 focus:border-royal focus:outline-none transition-colors"
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                S’inscrire au webinaire
              </Button>
            </form>
          </>
        ) : (
          <div className="max-w-2xl mx-auto">
            {/* Confirmation */}
            <div className="relative pl-8 border-l-2 border-gold mb-16">
              <h2 className="font-display text-3xl font-bold text-royal mb-4">
                Inscription confirmée
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Merci, <span className="font-semibold">{formData.fullName}</span>
                . Votre inscription au webinaire a été prise en compte. Vous
                recevrez le lien de connexion par email avant l’événement.
              </p>
              <div className="mt-8">
                <Button
                  variant="gold"
                  size="lg"
                  href="https://zoom.us/j/1234567890"
                  target="_blank"
                >
                  Accéder au webinaire (lien Zoom)
                </Button>
              </div>
            </div>

            {/* Canal WhatsApp */}
            <div className="relative pl-8 border-l-2 border-gold/30">
              <h3 className="font-display text-xl font-bold text-premium-dark mb-3">
                Rejoignez notre canal WhatsApp
              </h3>
              <p className="text-gray-600 mb-6">
                Recevez les rappels et les ressources exclusives partagées
                pendant la conférence.
              </p>
              <Button
                variant="outline"
                size="lg"
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