import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Apply",
    href: "https://tally.so/r/3XylDV",
    target: "_blank",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-[50%] translate-x-[-50%] right-0 z-40 w-full bg-bg-1 flex justify-center items-center border-b border-text-1 p-4">
      <div className="max-w-7xl w-full flex justify-between items-center">
        <h1 className="text-2xl font-medium">Distill Labs</h1>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              className="hover:text-text-2 hover:underline"
              href={link.href}
              target={link.target || "_self"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;