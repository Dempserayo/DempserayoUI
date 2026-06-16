import type { ReactNode } from "react";

interface InputProps {
  placeholder?: string;
  icon?: ReactNode;
  variant?:
    | "input_variante_1"
    | "input_variante_2"
    | "input_variante_3"
    | "input_variante_4";
}

export default function Input({
  placeholder = "Search",
  icon,
  variant = "input_variante_1",
}: InputProps) {
  const variants = {
    // Minimalista
    input_variante_1:
      "border-b border-neutral-200 hover:border-blue-500 focus-within:border-blue-500",

    // Con borde completo
    input_variante_2:
      "border border-neutral-200 hover:border-blue-500 focus-within:border-blue-500",

    // Oscuro
    input_variante_3:
      "",

    // Glassmorphism
    input_variante_4:
      "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:border-blue-500 focus-within:border-blue-500",
  };

  return (
    <div className={`flex items-center justify-between gap-2 w-full px-3 py-3 transition-all duration-300 ${variants[variant]}`}>
      <input type="text" placeholder={placeholder} className={`w-full bg-transparent text-xs text-neutral-500 focus:outline-none`}/>
      {icon && (
        <span className="text-neutral-500">
          {icon}
        </span>
      )}
    </div>
  );
}