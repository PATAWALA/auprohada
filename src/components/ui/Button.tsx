import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal border-2";
  const variants = {
    primary:
      "bg-royal text-white border-royal hover:bg-royal-700 hover:border-royal-700",
    gold: "bg-gold text-black border-gold hover:bg-gold-600 hover:border-gold-600",
    outline:
      "bg-transparent text-royal border-royal hover:bg-royal hover:text-white",
    white:
      "bg-white text-royal border-white hover:bg-premium-light hover:border-premium-light",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}