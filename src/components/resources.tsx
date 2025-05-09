import SectionLayout from "@/layouts/section-layout";

const resourceCategories = [
  {
    id: "1",
    title: "Headquartered in the heart of Palo Alto, Silicon Valley",
    items: [
      "Our office is located in downtown Palo Alto, just steps from Sand Hill Road and Stanford University—at the epicenter of global innovation and venture capital."
    ]
  },
  {
    id: "2",
    title: "100+ In-Person Meetups Annually",
    items: [
      "We organize 100+ exclusive events each year across innovation hubs including Silicon Valley, New York, Singapore, and Shanghai, facilitating direct investor-startup engagement."
    ]
  },
  {
    id: "3",
    title: "Vetted Deal Flow with Real Traction",
    items: [
      "Our portfolio companies undergo dual-layer screening for market potential and technical strength, and are often recognized by leading accelerators, media outlets, and follow-on investors."
    ]
  },
  {
    id: "4",
    title: "No hype. Only outcomes",
    items: [
      "Distill Labs prioritizes capital efficiency and high-return growth through real resources and aligned incentives—building a performance-driven founder-investor ecosystem."
    ]
  },
];

const Resources = () => {
  return (
    <SectionLayout title="Why Distill Labs?">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {resourceCategories.map((category) => (
          <div 
            key={category.id}
            className="group relative p-8 border border-gray-800/30 rounded-lg hover:bg-bg-2 transition-all duration-300"
          >
            <h3 className="text-xl text-text-2 font-semibold tracking-tight group-hover:text-text-2 transition-colors duration-200 mb-4">
              {category.title}
            </h3>
            
            <div className="h-[1px] w-full bg-gray-800/30 mb-4"></div>
            
            <ul className="space-y-3">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-start text-center">
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