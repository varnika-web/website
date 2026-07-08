type ButtonProps = {
  path: string;
  label?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  target?: "_self" | "_blank";
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs sm:text-sm",
  md: "px-8 py-2.5 text-base",
  lg: "px-10 py-3 text-lg",
};

const variantClasses = {
  primary: "bg-primary hover:bg-primary-hover text-white",
  secondary: "border border-primary bg-white text-primary hover:bg-primary/10",
};

const Button = ({
  path,
  label = "Book Consultation",
  variant = "primary",
  size = "md",
  target = "_self",
}: ButtonProps) => {
  return (
    <a
      href={path}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-sm font-semibold transition ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {label}
    </a>
  );
};

export default Button;
