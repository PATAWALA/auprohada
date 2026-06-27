export default function Badge({
  children,
  variant = "royal",
}: {
  children: React.ReactNode;
  variant?: "royal" | "gold" | "outline";
}) {
  const colors = {
    royal: "bg-royal text-white",
    gold: "bg-gold text-black",
    outline: "border-2 border-royal text-royal bg-transparent",
  };
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colors[variant]}`}
    >
      {children}
    </span>
  );
}