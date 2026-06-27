interface SectionTitleProps {
  overline?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  overline,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      {overline && (
        <p className="text-gold font-semibold tracking-[0.2em] uppercase mb-2">
          {overline}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-premium-dark relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-royal" />
      </h2>
      {description && (
        <p className="mt-6 text-lg text-gray-600 max-w-3xl">{description}</p>
      )}
    </div>
  );
}