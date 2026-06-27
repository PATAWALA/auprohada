"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const clubs = [
  {
    university: "Université Félix Houphouët-Boigny",
    acronym: "UFHB",
    city: "Abidjan - Cocody",
    president: "DIAKITÉ Moussa",
    members: 320,
  },
  {
    university: "Université Alassane Ouattara",
    acronym: "UAO",
    city: "Bouaké",
    president: "GNAMIEN Konan",
    members: 210,
  },
  {
    university: "Université Jean Lorougnon Guédé",
    acronym: "UJLoG",
    city: "Daloa",
    president: "KOUAKOU Affoué",
    members: 150,
  },
  {
    university: "Université Peleforo Gon Coulibaly",
    acronym: "UPGC",
    city: "Korhogo",
    president: "SILUÉ Mamadou",
    members: 130,
  },
  {
    university: "Université Nangui Abrogoua",
    acronym: "UNA",
    city: "Abidjan - Abobo",
    president: "AGBÉRO Tano",
    members: 180,
  },
  {
    university: "Université de Man",
    acronym: "U-MAN",
    city: "Man",
    president: "ZOUZOUA Anaïs",
    members: 90,
  },
];

export default function ClubList() {
  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    email: "",
    phone: "",
    motivation: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, envoyez les données vers Supabase ou une API
    setSubmitted(true);
  };

  return (
    <div>
      {/* Cartes des clubs existants */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {clubs.map((club, idx) => (
          <Card key={idx} className="hover:border-royal transition-colors">
            <p className="text-royal font-bold text-sm uppercase tracking-wider">
              {club.acronym}
            </p>
            <h3 className="font-display text-xl font-bold text-premium-dark mt-2">
              {club.university}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{club.city}</p>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Président :</span>{" "}
                {club.president}
              </p>
              <p>
                <span className="font-semibold">Membres :</span> {club.members}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Formulaire d’adhésion */}
      <div className="max-w-3xl mx-auto bg-premium-light p-10 border-2 border-gray-200">
        {!submitted ? (
          <>
            <h3 className="font-display text-2xl font-bold text-premium-dark mb-2">
              Rejoignez le réseau AUPROHADA
            </h3>
            <p className="text-gray-600 mb-8">
              Remplissez ce formulaire pour être mis en relation avec le club
              OHADA de votre université.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full border-2 border-gray-300 bg-white p-3 focus:border-royal focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Université / Établissement
                </label>
                <select
                  name="university"
                  required
                  value={formData.university}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 bg-white p-3 focus:border-royal focus:outline-none"
                >
                  <option value="">Sélectionnez votre université</option>
                  {clubs.map((c, i) => (
                    <option key={i} value={c.university}>
                      {c.university}
                    </option>
                  ))}
                  <option value="Autre">Autre (à préciser)</option>
                </select>
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 bg-white p-3 focus:border-royal focus:outline-none"
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
                    className="w-full border-2 border-gray-300 bg-white p-3 focus:border-royal focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Motivation (quelques mots)
                </label>
                <textarea
                  name="motivation"
                  rows={3}
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 bg-white p-3 focus:border-royal focus:outline-none"
                />
              </div>
              <Button type="submit" variant="gold">
                Envoyer ma demande
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="font-display text-2xl font-bold text-royal mb-4">
              Demande envoyée avec succès !
            </h3>
            <p className="text-gray-600">
              Un responsable de club vous contactera dans les plus brefs délais.
              Bienvenue dans la communauté AUPROHADA.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}