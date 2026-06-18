
import type {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "button_variante_1"
    | "button_variante_2"
    | "button_variante_3"
    | "button_variante_4"
    | "outline";

  onRoute?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "button_variante_1",
  className = "",
  onRoute,
  onClick,
  ...props
}) => {
  const variants = {
    button_variante_1:
      "text-neutral-500 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-50/50 border-b border-transparent px-2 py-4",

    button_variante_2:
      "text-neutral-500 hover:text-blue-500 hover:bg-blue-50/50 hover:animate-pulse px-2 py-4",

    button_variante_3:
      "text-neutral-500 hover:text-blue-500 hover:border-blue-500 px-2 py-4 border-b border-neutral-200",

    button_variante_4:
      "text-neutral-500 hover:text-blue-500 hover:bg-blue-50/50 hover:animate-pulse px-2 py-4",

    outline:
      "text-neutral-500 bg-white border-neutral-800 hover:bg-neutral-100 p-4",
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);

    if (!e.defaultPrevented && onRoute) {
      window.location.href = onRoute;
    }
  };

  return (
    <button
      className={`w-auto h-auto text-xs font-thin flex items-center gap-2 transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};