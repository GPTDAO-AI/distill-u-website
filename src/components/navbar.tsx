import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b border-text-1 py-4">
      <h1 className="text-2xl font-medium">Distill <span className="text-text-2">U</span></h1>
      <div className="flex items-center gap-4">
        <Link className="hover:text-text-2 hover:underline" href="/">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;