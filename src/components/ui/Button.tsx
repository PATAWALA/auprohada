import React from "react";

// Props de base communes
interface ButtonBaseProps {
  variant?: "primary" | "gold" | "outline" | "whiteOutline" | "white";
  size?: "sm" | "md" | "lg";
}

// Props pour un bouton
interface ButtonAsButton extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

// Props pour un lien
interface ButtonAsLink extends ButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;

  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold";
  const variants = {
    primary:
      "bg-royal text-white border-royal hover:bg-royal-700 hover:border-royal-700 hover:translate-y-[-2px]",
    gold:
      "bg-gold text-black border-gold hover:bg-gold-600 hover:border-gold-600 hover:translate-y-[-2px]",
    outline:
      "bg-transparent text-royal border-royal hover:bg-royal hover:text-white hover:translate-y-[-2px]",
    whiteOutline:
      "bg-transparent text-white border-white hover:bg-white hover:text-royal hover:border-white hover:translate-y-[-2px]",
    white:
      "bg-white text-royal border-white hover:bg-premium-light hover:border-premium-light hover:translate-y-[-2px]",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  // Si href est présent, on rend un lien
  if (rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  // Sinon un bouton
  const buttonProps = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}