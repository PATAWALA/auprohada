interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 p-6 shadow-sharp ${className}`}>
      {children}
    </div>
  );
}