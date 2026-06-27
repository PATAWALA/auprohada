"use client";

import { useState } from "react";
import Button from "../ui/Button";

// Partenaires (logos simulés par des initiales dans un carré doré)
const partnersInstitutionnels = [
  { name: "Cour d’Appel d’Abidjan", initials: "CA" },
  { name: "Ministère de la Justice", initials: "MJ" },
  { name: "Ordre des Avocats", initials: "OA" },
];

const cabinetsAssocies = [
  { name: "Cabinet Côte d’Ivoire Conseil", initials: "CIC" },
  { name: "SCPA Koné & Associés", initials: "KA" },
  { name: "Lex Africa", initials: "LA" },
];

const medias = [
  { name: "TV Justice", initials: "TVJ" },
  { name: "Radio OHADA", initials: "RO" },
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
    // Envoi ultérieur vers Supabase
    setPartnerSubmitted(true);
  };

  // Composant pour une liste de partenaires
  const PartnerList = ({
    partners,
  }: {
    partners: { name: string; initials: string }[];
  }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {partners.map((p) => (
        <div
          key={p.name}
          className="group flex items-center gap-5 py-6 px-4 border-l-2 border-gray-200 hover:border-gold transition-colors duration-300"
        >
          {/* Logo simulé : carré avec initiales */}
          <div className="w-12 h-12 bg-premium-light border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors duration-300">
            <span className="font-display font-bold text-sm text-gray-400 group-hover:text-gold">
              {p.initials}
            </span>
          </div>
          <p className="font-medium text-gray-700 group-hover:text-royal transition-colors leading-tight">
            {p.name}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-32">
      {/* Partenaires Institutionnels */}
      <div>
        <div className="mb-12">
          <div className="w-8 h-0.5 bg-gold mb-4" />
          <h3 className="font-display text-2xl md:text-3xl font-bold text-royal">
            Partenaires Institutionnels
          </h3>
        </div>
        <PartnerList partners={partnersInstitutionnels} />
      </div>

      {/* Cabinets Associés */}
      <div>
        <div className="mb-12">
          <div className="w-8 h-0.5 bg-gold mb-4" />
          <h3 className="font-display text-2xl md:text-3xl font-bold text-royal">
            Cabinets Associés
          </h3>
        </div>
        <PartnerList partners={cabinetsAssocies} />
      </div>

      {/* Partenaires Médias */}
      <div>
        <div className="mb-12">
          <div className="w-8 h-0.5 bg-gold mb-4" />
          <h3 className="font-display text-2xl md:text-3xl font-bold text-royal">
            Partenaires Médias
          </h3>
        </div>
        <PartnerList partners={medias} />
      </div>

      {/* Dossier de sponsoring */}
      <div className="border-t border-gray-100 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
          <h3 className="font-display text-3xl md:text-4xl font-bold text-premium-dark mb-6">
            Vous souhaitez devenir sponsor ?
          </h3>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Téléchargez notre dossier de sponsoring 2026 et rejoignez les
            institutions qui façonnent l’élite juridique africaine.
          </p>
          <Button variant="gold" size="lg" href="/pdf/dossier-sponsoring-2026.pdf" target="_blank">
            Télécharger le dossier
          </Button>
        </div>
      </div>

      {/* Formulaire Devenir Partenaire */}
      <div className="border-t border-gray-100 pt-20">
        <div className="max-w-3xl mx-auto">
          {!partnerSubmitted ? (
            <>
              <div className="mb-12">
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-royal mb-4">
                  Devenir Partenaire
                </h3>
                <p className="text-gray-600">
                  Laissez-nous vos coordonnées, nous étudierons avec vous les
                  possibilités de collaboration.
                </p>
              </div>
              <form onSubmit={handlePartnerSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={partnerForm.name}
                      onChange={handlePartnerChange}
                      className="w-full border-2 border-gray-200 bg-white p-3 focus:border-royal focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={partnerForm.company}
                      onChange={handlePartnerChange}
                      className="w-full border-2 border-gray-200 bg-white p-3 focus:border-royal focus:outline-none transition-colors"
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
                      value={partnerForm.email}
                      onChange={handlePartnerChange}
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
                      value={partnerForm.phone}
                      onChange={handlePartnerChange}
                      className="w-full border-2 border-gray-200 bg-white p-3 focus:border-royal focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={partnerForm.message}
                    onChange={handlePartnerChange}
                    className="w-full border-2 border-gray-200 bg-white p-3 focus:border-royal focus:outline-none transition-colors"
                  />
                </div>
                <Button type="submit" variant="gold" size="lg">
                  Envoyer la demande
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-bold text-royal mb-4">
                Demande envoyée avec succès
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Nous vous remercions de votre intérêt. Notre équipe reviendra
                vers vous dans les plus brefs délais.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}