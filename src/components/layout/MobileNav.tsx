import Link from "next/link";
import Button from "../ui/Button";

interface MobileNavProps {
  items: { label: string; href: string }[];
  onClose: () => void;
}

export default function MobileNav({ items, onClose }: MobileNavProps) {
  return (
    <div className="px-4 py-6 space-y-4 bg-white">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block text-gray-700 hover:text-royal font-medium text-lg transition-colors py-2 border-l-4 border-transparent hover:border-royal pl-4"
        >
          {item.label}
        </Link>
      ))}
      <div className="pt-4 border-t border-gray-100">
        <Button href="/reseaux" variant="royal" className="w-full">
          Adhérer
        </Button>
      </div>
    </div>
  );
}