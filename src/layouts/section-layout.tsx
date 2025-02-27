const SectionLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-4 py-4 md:py-4">
      <h2 className="w-full text-left text-3xl md:text-5xl border-b pb-2 text-text-2">{title}</h2>
      {children}
    </div>
  );
};

export default SectionLayout;