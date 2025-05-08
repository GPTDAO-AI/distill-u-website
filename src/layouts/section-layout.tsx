interface SectionLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const SectionLayout = ({ title, description, children }: SectionLayoutProps) => {
  return (
    <div className="w-full flex flex-col gap-4 py-4 md:py-4">
      <h2 className="w-full text-left text-3xl md:text-5xl text-text-2">{title}</h2>
      {description && (
        <p className="w-full text-left text-base md:text-lg text-text-2">
          {description}
        </p>
      )}
      <div className="w-full border-b border-text-2" />
      {children}
    </div>
  );
};

export default SectionLayout;