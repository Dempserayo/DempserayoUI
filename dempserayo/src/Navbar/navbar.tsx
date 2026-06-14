import { Button } from "../Button/button";

interface NavbarProps {
  variant?: "primary" | "transparent" | "light";
}

export default function Navbar({
  variant = "primary",
}: NavbarProps) {
  if (variant === "primary") {
    return (
      <nav className="bg-gray-800 text-white flex items-center justify-between p-8">
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

  if (variant === "transparent") {
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
    <nav className="bg-white text-neutral-800 shadow-md p-8">
      <div className="flex flex-col items-center gap-6">
        <Button variant="outline">Logo</Button>

        <section className="flex gap-4">
          <Button variant="neutral">Store</Button>
          <Button variant="neutral">User</Button>
          <Button variant="neutral">Settings</Button>
        </section>

        <Button variant="primary">Login</Button>
      </div>
    </nav>
  );
}