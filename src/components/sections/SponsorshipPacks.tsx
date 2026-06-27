"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const partnersInstitutionnels = [
  { name: "Cour d’Appel d’Abidjan", logo: "/images/sponsors/cour-appel.png" },
  { name: "Ministère de la Justice et des Droits de l’Homme", logo: "/images/sponsors/ministere-justice.png" },
  { name: "Ordre des Avocats de Côte d’Ivoire", logo: "/images/sponsors/ordre-avocats.png" },
];

const cabinetsAssocies = [
  { name: "Cabinet Côte d’Ivoire Conseil", logo: "/images/sponsors/cic-conseil.png" },
  { name: "SCPA Koné & Associés", logo: "/images/sponsors/kone-associes.png" },
  { name: "Lex Africa", logo: "/images/sponsors/lex-africa.png" },
];

const medias = [
  { name: "TV Justice", logo: "/images/sponsors/tv-justice.png" },
  { name: "Radio OHADA", logo: "/images/sponsors/radio-ohada.png" },
];

export default function SponsorshipPacks() {
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handlePartnerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPartnerForm({ ...partnerForm, [e.target.name]: e.target.value });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoi vers Supabase
    setPartnerSubmitted(true);
  };

  return (
    <div>
      {/* Blocs de partenaires existants */}
      <div className="space-y-20">
        <div>
          <h3 className="font-display text-2xl font-bold text-premium-dark mb-8 relative inline-block">
            Partenaires Institutionnels
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-royal" />
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersInstitutionnels.map((p) => (
              <Card key={p.name} className="flex items-center gap-5 hover:border-royal transition-colors">
                <div className="w-16 h-16 flex-shrink-0 grayscale opacity-70">
                  <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <p className="font-semibold text-premium-dark">{p.name}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-premium-dark mb-8 relative inline-block">
            Cabinets Associés
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-royal" />
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabinetsAssocies.map((p) => (
              <Card key={p.name} className="flex items-center gap-5 hover:border-royal transition-colors">
                <div className="w-16 h-16 flex-shrink-0 grayscale opacity-70">
                  <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <p className="font-semibold text-premium-dark">{p.name}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-premium-dark mb-8 relative inline-block">
            Partenaires Médias
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-royal" />
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medias.map((p) => (
              <Card key={p.name} className="flex items-center gap-5 hover:border-royal transition-colors">
                <div className="w-16 h-16 flex-shrink-0 grayscale opacity-70">
                  <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <p className="font-semibold text-premium-dark">{p.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA téléchargement dossier */}
      <div className="mt-20 bg-premium-light border-2 border-gray-200 p-10 text-center">
        <h3 className="font-display text-2xl font-bold text-premium-dark mb-4">
          Vous souhaitez devenir sponsor ?
        </h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Téléchargez notre dossier de sponsoring 2026 pour découvrir nos offres
          et rejoindre nos partenaires prestigieux.
        </p>
        <Button variant="gold" href="/pdf/dossier-sponsoring-2026.pdf" target="_blank">
          Télécharger le dossier de sponsoring
        </Button>
      </div>

      {/* Formulaire Devenir Partenaire */}
      <div className="mt-20 max-w-3xl mx-auto">
        {!partnerSubmitted ? (
          <>
            <h3 className="font-display text-2xl font-bold text-premium-dark mb-2">
              Devenir Partenaire
            </h3>
            <p className="text-gray-600 mb-8">
              Laissez-nous vos coordonnées, notre équipe vous recontactera pour
              étudier les possibilités de collaboration.
            </p>
            <form onSubmit={handlePartnerSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={partnerForm.name}
                    onChange={handlePartnerChange}
                    className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={partnerForm.company}
                    onChange={handlePartnerChange}
                    className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={partnerForm.email}
                    onChange={handlePartnerChange}
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
                    value={partnerForm.phone}
                    onChange={handlePartnerChange}
                    className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={partnerForm.message}
                  onChange={handlePartnerChange}
                  className="w-full border-2 border-gray-300 p-3 focus:border-royal focus:outline-none"
                />
              </div>
              <Button type="submit" variant="gold">
                Envoyer
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="font-display text-2xl font-bold text-royal mb-4">
              Votre demande a bien été envoyée
            </h3>
            <p className="text-gray-600">
              Nous vous remercions de votre intérêt. Un membre de notre
              commission partenariats reviendra vers vous sous 48 heures.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}