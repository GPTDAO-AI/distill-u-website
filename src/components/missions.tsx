import SectionLayout from "@/layouts/section-layout";

const missions = [
  {
    id: "1",
    title: "Build AI MVPs",
    description: "Guide startups in developing functional AI prototypes, leveraging Palo Alto's technical resources and expert mentorship to achieve product-market fit within six months.",
  },
  {
    id: "2",
    title: "Connect Startups to Capital",
    description: "Provide tailored funding solutions and direct access to Silicon Valley's top VCs, ensuring startups secure the financial backing needed for rapid scaling.",
  },
  {
    id: "3",
    title: "Scale AI Applications",
    description: "Focus on deploying AI innovations in healthcare, fintech, and automation, offering market-entry strategies and partnerships for measurable impact.",
  },
];

const Missions = () => {
  return (
    <SectionLayout title="Our Missions">
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-[2%] mt-4">
        {missions.map((mission, index) => (
          <div 
            key={mission.id} 
            className="w-full md:w-[32%] group relative p-8 border border-gray-800/30 rounded-lg hover:bg-bg-2 transition-all duration-300"
          >
            <div className="absolute -top-4 left-8">
              <span className="inline-flex items-center justify-center h-8 px-3 rounded-full bg-bg-2 text-text-2 text-sm font-medium">
                0{index + 1}
              </span>
            </div>
            
            <div className="flex flex-col gap-4 pt-4">
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-text-2 transition-colors duration-200">
                {mission.title}
              </h3>
              
              <div className="h-[1px] w-full bg-gray-800/30"></div> 
                
              <p className="text-base leading-relaxed">
                {mission.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Missions;