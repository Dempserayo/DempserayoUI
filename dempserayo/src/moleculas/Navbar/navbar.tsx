import { FiLogIn, FiLogOut, FiSearch } from "react-icons/fi";
import { Button } from "../../atoms/Button/button";
import Logo from "../../atoms/Logo/logo";
import Input from "../../atoms/Input/input";
import Text from "../../atoms/Text/text";

interface NavbarProps {
  variant?: "variante_1" | "variante_2" | "variante_3" | "variante_4" | "variante_5" | "central_variante_1" | "light";
}

export default function Navbar({
  variant = "variante_1",
}: NavbarProps) {
  if (variant === "variante_1") {
    return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-10">
        <section className="w-auto flex gap-2">
          <Logo/>
        </section>

        <section className="w-full flex justify-center items-center gap-2">
          <Button variant="button_variante_1" onRoute="/">
            <Text>Document</Text>
          </Button>
          <Button variant="button_variante_1" onRoute="/products">
            <Text>Categories</Text>
          </Button>
          <Button variant="button_variante_1" onRoute="/configuration">
            <Text>Configuration</Text>
          </Button>
        </section>

        <section className="w-auto flex gap-2">
          <Button variant="button_variante_1" onRoute="/login">
            <Text>Login</Text>
            <FiLogIn />
          </Button>

          <Button variant="button_variante_1" onRoute="/register">
            <Text>Register</Text>
            <FiLogOut />
          </Button>
        </section>
      </nav>
    );
  }

  if (variant === "variante_2") {
    return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-10">
        <section className="w-auto flex gap-2">
          <Logo/>
        </section>

        <section className="w-full flex justify-center items-center">
          <Button variant="button_variante_2" onRoute="/">
            <Text>Store</Text>
          </Button>
          <Button variant="button_variante_2" onRoute="/categories">
            <Text>Categories</Text>
          </Button>
          <Button variant="button_variante_2" onRoute="/options">
            <Text>Options</Text>
          </Button>
        </section>

        <section className="w-auto flex">
          <Button variant="button_variante_2" onRoute="/login">
            <Text>Login</Text>
            <FiLogIn />
          </Button>
          <Button variant="button_variante_2" onRoute="/register">
            <Text>Register</Text>
            <FiLogOut />
          </Button>
        </section>
      </nav>
    );
  }

  if (variant === "variante_3") {
    return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-10">
        <section className="w-full flex gap-2">
          <Logo/>
        </section>


        <section className="w-full flex items-center justify-center">
          <Input variant="input_variante_1" placeholder="Buscar productos" icon={<FiSearch className="text-xs" />}/>
        </section>

        <section className="w-full flex flex-row justify-end gap-2">
          <Button variant="button_variante_3" onRoute="/">
            <Text>Store</Text>
          </Button>
          <Button variant="button_variante_3" onRoute="/categories">
            <Text>Categories</Text>
          </Button>
          <Button variant="button_variante_3" onRoute="/options">
            <Text>Options</Text>
          </Button>

          <Button variant="button_variante_3" onRoute="/login">
            <FiLogIn />
          </Button>

          <Button variant="button_variante_3" onRoute="/register">
            <FiLogOut />
          </Button>
        </section>
      </nav>
    );
  }

  if (variant === "variante_4") {
    return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-10 ">
        <section className="w-full flex flex-row justify-center items-center gap-8">
          <Logo/>
          <Input variant="input_variante_2" placeholder="Buscar productos" icon={<FiSearch  className="text-xs"/>}/>
        </section>

        <section className="w-full flex flex-row justify-end gap-2">
          <Button variant="button_variante_4" onRoute="/store">
            <Text>Store</Text>
          </Button>
          <Button variant="button_variante_4" onRoute="/document">
            <Text>Document</Text>
          </Button>
          <Button variant="button_variante_4" onRoute="/categories">
            <Text>Categories</Text>
          </Button>
          <Button variant="button_variante_4" onRoute="/options">
            <Text>Options</Text>
          </Button>

          <Button variant="button_variante_4" onRoute="/login">
            <FiLogIn />
          </Button>

          <Button variant="button_variante_4" onRoute="/register">
            <FiLogOut />
          </Button>
        </section>
      </nav>
    );
  }

  if (variant === "variante_5") {
    return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-10">
        <section className="w-full flex flex-row justify-center items-center gap-8">
          <Logo/>
          <Input variant="input_variante_3" placeholder="Buscar productos" icon={<FiSearch  className="text-xs"/>}/>
        </section>

        <section className="w-full flex flex-row justify-end gap-2">
          <Button variant="button_variante_4" onRoute="/store">
            <Text>Store</Text>
          </Button>
          <Button variant="button_variante_4" onRoute="/document">
            <Text>Document</Text>
          </Button>
          <Button variant="button_variante_4" onRoute="/categories">
            <Text>Categories</Text>
          </Button>
          <Button variant="button_variante_4" onRoute="/options">
            <Text>Options</Text>
          </Button>

          <Button variant="button_variante_4" onRoute="/login">
            <FiLogIn />
          </Button>

          <Button variant="button_variante_4" onRoute="/register">
            <FiLogOut />
          </Button>
        </section>
      </nav>
    );
  }

  if (variant === "central_variante_1") {
    return (
      <nav className="w-full max-w-7xl  bg-transparent text-neutral-800 flex justify-center items-center gap-10 p-10 border border-neutral-300">
        <Logo/>

        <div className="flex gap-2">
          <Button variant="button_variante_2" onRoute="/document">
            <Text>Document</Text>
          </Button>
          <Button variant="button_variante_2" onRoute="/products">
            <Text>Products</Text>
          </Button>
          <Button variant="button_variante_2" onRoute="/contact">
            <Text>Contact</Text>
          </Button>
        </div>

        <div>
          <Button variant="button_variante_1" onRoute="/login">
            <Text>Login</Text>
          </Button>
        </div>
      </nav>
    );
  }

  return (
      <nav className="w-full max-w-7xl flex justify-between items-center p-10">
        <section>
          <Logo/>
        </section>

        <section className="flex gap-2">
          <Button variant="button_variante_2" onRoute="/store">
            <Text>Store</Text>
          </Button>
          <Button variant="button_variante_2" onRoute="/products">
            <Text>Products</Text>
          </Button>
          <Button variant="button_variante_2" onRoute="/contact">
            <Text>Contact</Text>
          </Button>
        </section>

        <section className="flex gap-2">
          <Button variant="button_variante_1" onRoute="/login">
            <Text>Login</Text>
          </Button>
          <Button variant="button_variante_1" onRoute="/register">
            <Text>Register</Text>
          </Button>
        </section>
      </nav>
  );
}