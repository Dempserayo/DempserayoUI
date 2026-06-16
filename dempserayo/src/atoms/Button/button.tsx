import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "button_variante_1" | "button_variante_2" | "button_variante_3" | "outline";
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "button_variante_1",
  className = "",
  ...props
}) => {
  const variants = {
    button_variante_1:
      "hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-50/50 hover:bg-default border-b border-transparent px-2 py-4",

    button_variante_2:
      "hover:text-blue-500 hover:bg-blue-50/50 hover:animate-pulse px-2 py-4",
    
    button_variante_3:
      "hover:text-blue-500 hover:border-blue-500 px-2 py-4",

    outline:
      "bg-white text-neutral-800 border-neutral-800 hover:bg-neutral-100 p-4",
  };

  return (
    <button className={`w-auto h-auto text-xs font-thin flex flex-row justify-center items-center gap-2 transition-all duration-500 cursor-pointer  ${variants[variant]} ${className}`}{...props}>
      {children}
    </button>
  );
};