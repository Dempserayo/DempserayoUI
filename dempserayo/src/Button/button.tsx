import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "neutral" | "outline";
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "hover:bg-neutral-800/50 hover:text-white hover:shadow-sm hover:shadow-neutral-500 hover:ring-2 hover:ring-neutral-100 p-4",

    neutral:
      "",

    outline:
      "bg-white text-neutral-800 border-neutral-800 hover:bg-neutral-100 p-4",
  };

  return (
    <button className={`w-auto h-auto  flex justify-center items-center transition-all duration-500 cursor-pointer ${variants[variant]} ${className}`}{...props}>
        <p className="text-xs font-thin">
            {children}
        </p>
    </button>
  );
};