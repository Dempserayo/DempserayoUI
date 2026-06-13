import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "hover:bg-neutral-800/50 hover:text-white hover:shadow-sm hover:shadow-neutral-500 hover:ring-2 hover:ring-neutral-100",

    secondary:
      "bg-neutral-800 text-white hover:bg-neutral-700 border-neutral-800",

    outline:
      "bg-white text-neutral-800 border-neutral-800 hover:bg-neutral-100",
  };

  return (
    <button className={`w-auto h-auto p-4 flex justify-center items-center transition-all duration-500 cursor-pointer ${variants[variant]} ${className}`}{...props}>
        <span className="text-xs font-thin">
            {children}
        </span>
    </button>
  );
};