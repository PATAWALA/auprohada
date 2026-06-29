// src/components/ui/PartnerLogo.tsx
interface PartnerLogoProps {
  name: string;
  className?: string;
}

export default function PartnerLogo({ name, className = "" }: PartnerLogoProps) {
  // Extraire les initiales (jusqu'à 3 lettres)
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 3);

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
    >
      <rect width="32" height="32" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="1" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fill="#065F46"
        fontSize="12"
        fontWeight="bold"
        fontFamily="var(--font-poppins), system-ui, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}