import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-[50%] translate-x-[-50%] right-0 z-40 w-full bg-bg-1 flex justify-center items-center border-b border-text-1 p-4">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <h1 className="text-2xl font-medium">Distill Labs</h1>
        <div className="flex items-center gap-4">
          <Link className="hover:text-text-2 hover:underline" href="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;