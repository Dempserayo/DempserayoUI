import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Button } from "../atoms/Button/button";
import Logo from "../atoms/Logo/logo";

interface NavbarProps {
  variant?: "variante_1" | "variante_2" | "variante_3" | "central_variante_1" | "light";
}

export default function Navbar({
  variant = "variante_1",
}: NavbarProps) {
  if (variant === "variante_1") {
    return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-8">
        <section className="w-auto flex gap-2">
          <Logo/>
        </section>

        <section className="w-full flex justify-center items-center gap-2">
          <Button variant="button_variante_1">Store</Button>
          <Button variant="button_variante_1">Categories</Button>
          <Button variant="button_variante_1">Options</Button>
          <Button variant="button_variante_1">Configuration</Button>
        </section>

        <section className="w-auto flex gap-2">
          <Button variant="button_variante_1">
            Login
            <FiLogIn />
          </Button>

          <Button variant="button_variante_1">
            Register
            <FiLogOut />
          </Button>
        </section>
      </nav>
    );
  }

  if (variant === "variante_2") {
    return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-8">
        <section className="w-auto flex gap-2">
          <Logo/>
        </section>

        <section className="w-full flex justify-center items-center">
          <Button variant="button_variante_2">Store</Button>
          <Button variant="button_variante_2">Categories</Button>
          <Button variant="button_variante_2">Options</Button>
        </section>

        <section className="w-auto flex">
          <Button variant="button_variante_2">
            Login
            <FiLogIn />
          </Button>
          <Button variant="button_variante_2">
            Register
            <FiLogOut />
          </Button>
        </section>
      </nav>
    );
  }

  if (variant === "variante_3") {
    return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-8">
        <section className="w-auto flex gap-2">
          <Logo/>
        </section>


        <section className="w-auto flex">
          <Button variant="button_variante_3">Store</Button>
          <Button variant="button_variante_3">Categories</Button>
          <Button variant="button_variante_3">Options</Button>
          
          <Button variant="button_variante_3">
            <FiLogIn />
          </Button>

          <Button variant="button_variante_2">
            <FiLogOut />
          </Button>
        </section>
      </nav>
    );
  }

  if (variant === "central_variante_1") {
    return (
      <nav className="w-full max-w-7xl  bg-transparent text-neutral-800 flex justify-center items-center gap-10 p-4 border border-neutral-300">
        <Logo/>

        <div className="flex gap-2">
          <Button variant="button_variante_2">Store</Button>
          <Button variant="button_variante_2">Products</Button>
          <Button variant="button_variante_2">Contact</Button>
        </div>

        <div>
          <Button variant="button_variante_1">Login</Button>
        </div>
      </nav>
    );
  }

  return (
      <nav className="w-full max-w-7xl bg-slate-700 text-neutral-200 flex justify-between items-center p-8">
        <section>
          <Logo/>
        </section>

        <section className="flex gap-4">
          <Button variant="button_variante_2">Store</Button>
          <Button variant="button_variante_2">Products</Button>
          <Button variant="button_variante_2">Contact</Button>
        </section>

        <section>
          <Button variant="button_variante_1">Login</Button>
        </section>
      </nav>
  );
}