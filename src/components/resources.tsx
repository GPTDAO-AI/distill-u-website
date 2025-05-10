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
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-y-8 gap-x-8 md:gap-x-[2%] py-8">
        {resourceCategories.map((category, index) => (
          <div 
            key={category.id}
            className="w-full md:w-[48%] group relative p-8 border border-gray-800/30 rounded-lg hover:bg-bg-2 transition-all duration-300"
          >
            <div className="absolute -top-4 left-8">
              <span className="inline-flex items-center justify-center h-8 px-3 rounded-full bg-bg-2 text-text-2 text-sm font-medium">
                0{index + 1}
              </span>
            </div>
            
            <div className="flex flex-col gap-4 pt-4">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-text-2 transition-colors duration-200">
                {category.title}
              </h3>
              
              <div className="h-[1px] w-full bg-gray-800/30"></div>
              
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-base leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Resources;