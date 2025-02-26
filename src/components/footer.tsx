const Footer = () => {
  return (
    <div className="w-full border-t border-text-1 py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Distill U. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;