const SectionLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-4 px-4 md:px-8 py-4 md:py-8">
      <h2 className="w-full text-left text-2xl md:text-4xl border-b pb-2">{title}</h2>
      {children}
    </div>
  );
};

export default SectionLayout;