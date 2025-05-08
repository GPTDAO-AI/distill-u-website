import SectionLayout from "@/layouts/section-layout";

const resourceCategories = [
  {
    id: "1",
    title: "Funding & Mentorship",
    items: [
      "Seed investments and Web3 token-based fundraising",
      "Expert guidance from AI veterans and Silicon Valley leaders"
    ]
  },
  {
    id: "2",
    title: "Pitch & Discussion",
    items: [
      "Weekly pitch sessions, AI discussion panels, and hackathons",
      "Solo speaking slots at the high-profile GenAI Summit"
    ]
  },
  {
    id: "3",
    title: "Community & Network",
    items: [
      "Access to top VCs, researchers, and industry partners",
      "Prime location in Palo Alto, 5 minutes from Stanford University"
    ]
  },
  {
    id: "4",
    title: "Hackathon",
    items: [
      "Join our monthly hackathon and get community attention",
      "Get a chance to pitch your project to top VCs and researchers"
    ]
  }
];

const Resources = () => {
  return (
    <SectionLayout title="Resources">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {resourceCategories.map((category) => (
          <div 
            key={category.id}
            className="group relative p-8 border border-gray-800/30 rounded-lg hover:bg-bg-2 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold tracking-tight group-hover:text-text-2 transition-colors duration-200 mb-4">
              {category.title}
            </h3>
            
            <div className="h-[1px] w-full bg-gray-800/30 mb-4"></div>
            
            <ul className="space-y-3">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-start text-left">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full text-text-2 text-sm flex-shrink-0">
                    •
                  </span>
                  <p className="text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Resources;