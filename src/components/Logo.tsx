import Link from "next/link";

type size = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<size, string> = {
  sm: "text-md",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
};

interface logoProps {
  size?: size;
  mode?: "light" | "dark";
}

const Logo = ({ size = "xl", mode = "light" }: logoProps) => {
  return (
    <Link href={"/"}>
      <h4 className={`font-libre ${sizeClasses[size]} font-bold italic`}>
        <span className="text-primary font-extrabold not-italic">VR</span>
        <span className={mode === "light" ? "text-white" : ""}>Wealth</span>
      </h4>
    </Link>
  );
};

export default Logo;
