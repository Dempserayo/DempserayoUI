import { Button } from "../Button/button";

interface NavbarProps {
  variant?: "primary" | "central_variante_1" | "light";
}

export default function Navbar({
  variant = "primary",
}: NavbarProps) {
  if (variant === "primary") {
    return (
      <nav className="bg-slate-700 text-white flex items-center justify-between p-8">
        <Button variant="outline">Logo</Button>

        <section className="flex gap-4">
          <Button variant="neutral">Store</Button>
          <Button variant="neutral">User</Button>
          <Button variant="neutral">Settings</Button>
          <Button variant="neutral">Login</Button>
        </section>
      </nav>
    );
  }

  if (variant === "central_variante_1") {
    return (
      <nav className="bg-transparent text-neutral-800 flex justify-center items-center gap-10 p-8">
        <div>
          <Button variant="outline">Logo</Button>
        </div>

        <div className="flex gap-4">
          <Button variant="neutral">Store</Button>
          <Button variant="neutral">Products</Button>
          <Button variant="neutral">Contact</Button>
        </div>

        <div>
          <Button variant="primary">Login</Button>
        </div>
      </nav>
    );
  }

  return (
      <nav className="bg-slate-700 text-neutral-200 flex justify-between items-center gap-10 p-8">
        <section>
          <Button variant="outline">Logo</Button>
        </section>

        <section className="flex gap-4">
          <Button variant="neutral">Store</Button>
          <Button variant="neutral">Products</Button>
          <Button variant="neutral">Contact</Button>
        </section>

        <section>
          <Button variant="primary">Login</Button>
        </section>
      </nav>
  );
}