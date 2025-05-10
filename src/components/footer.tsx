const Footer = () => {
  return (
    <div className="w-full border-t border-text-1 py-4 px-4 flex items-center justify-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Distill Labs. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;