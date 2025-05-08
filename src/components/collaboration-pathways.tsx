import SectionLayout from "@/layouts/section-layout";

const pathways = [
  {
    id: "1",
    title: "Project Sourcing",
    items: [
      "Identify high-potential projects from our community.",
      "Provide mentorship and Web3-based fundraising support."
    ]
  },
  {
    id: "2",
    title: "Team Building",
    items: [
      "Launch projects needing additional AI talent.",
      "Mobilize our community to form strong teams."
    ]
  },
  {
    id: "3",
    title: "Joint Promotion",
    items: [
      "Accelerate fully-formed projects with complete teams.",
      "Drive market exposure and investor engagement."
    ]
  }
];

const CollaborationPathways = () => {
  return (
    <SectionLayout title="Collaboration Pathways">
      <div className="w-full flex flex-col gap-8 mt-4">
        {pathways.map((pathway) => (
          <div 
            key={pathway.id}
            className="group relative p-8 border border-gray-800/30 rounded-lg hover:bg-bg-2 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold tracking-tight group-hover:text-text-2 transition-colors duration-200 mb-4">
              {pathway.title}
            </h3>
            
            <div className="h-[1px] w-full bg-gray-800/30 mb-4"></div>
            
            <ul className="space-y-4">
              {pathway.items.map((item, index) => (
                <li key={index} className="flex items-start text-left">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full text-text-2 text-sm mr-3 mt-0.5 flex-shrink-0">
                    •
                  </span>
                  <p className="text-lg leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default CollaborationPathways;
