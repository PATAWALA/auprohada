"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function RejoindrePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    profile: "",
    organization: "",
    country: "",
    city: "",
    email: "",
    phone: "",
    motivation: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi vers la base de données centralisée
    setSubmitted(true);
  };

  return (
    <main className="pt-12 md:pt-16 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!submitted ? (
          <>
            {/* Texte stratégique */}
            <div className="text-center mb-12">
              <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-5xl font-bold text-premium-dark mb-6">
                Rejoignez le réseau panafricain du droit OHADA
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Que vous soyez praticien du droit souhaitant intégrer le Réseau
                Professionnel ou représentant institutionnel désirant ouvrir une
                section universitaire, l’AUPROHADA vous offre un cadre unique
                pour valoriser l’excellence juridique en Afrique.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                <div className="border border-gray-200 p-6 bg-premium-light">
                  <h3 className="font-display font-bold text-royal mb-2">Réseau Professionnel</h3>
                  <p className="text-sm text-gray-600">
                    Rejoignez les praticiens du droit (avocats, notaires,
                    magistrats, juristes d’entreprise) autour d’actions de
                    vulgarisation et de mentorat, sous la coordination de M.
                    Arsène GOULE, Auditeur de Justice.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 bg-premium-light">
                  <h3 className="font-display font-bold text-royal mb-2">Sections Universitaires</h3>
                  <p className="text-sm text-gray-600">
                    Initiez une section officielle de l’AUPROHADA dans votre
                    université. Formez les futurs ambassadeurs du droit OHADA et
                    bénéficiez de notre accompagnement.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire unique */}
            <form onSubmit={handleSubmit} className="space-y-8">
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
                  className="w-full border-2 border-gray-200 p-3 focus:border-royal focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profil *
                </label>
                <select
                  name="profile"
                  required
                  value={formData.profile}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 p-3 focus:border-royal focus:outline-none"
                >
                  <option value="">Sélectionnez votre profil</option>
                  <option value="Praticien du Droit">
                    Praticien du Droit (Pour intégrer le Réseau Professionnel)
                  </option>
                  <option value="Représentant Institutionnel">
                    Représentant Institutionnel (Pour demander l’ouverture d’une Section Universitaire)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Entreprise / Université
                </label>
                <input
                  type="text"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 p-3 focus:border-royal focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pays
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 p-3 focus:border-royal focus:outline-none"
                    placeholder="Ex : Côte d'Ivoire, Sénégal, Cameroun…"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ville
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 p-3 focus:border-royal focus:outline-none"
                    placeholder="Votre ville"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full border-2 border-gray-200 p-3 focus:border-royal focus:outline-none"
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
                    className="w-full border-2 border-gray-200 p-3 focus:border-royal focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Motivations (optionnel)
                </label>
                <textarea
                  name="motivation"
                  rows={3}
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 p-3 focus:border-royal focus:outline-none"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full">
                Soumettre ma demande d’adhésion
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-royal mb-4">
              Demande enregistrée
            </h2>
            <p className="text-gray-600">
              Notre équipe commerciale vous contactera sous 48h. Bienvenue dans
              le réseau AUPROHADA.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}