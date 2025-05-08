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
      <div className="w-full mt-8 relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 relative z-10">
          {missions.map((mission, index) => (
            <div 
              key={mission.id} 
              className="w-full md:w-1/3 flex flex-col"
            >
              {/* Number Badge */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-bg-2/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-text-2">0{index + 1}</span>
                  </div>
                  <div className="absolute -inset-1 rounded-full border border-gray-800/30 opacity-50"></div>
                </div>
              </div>
              
              {/* Content Box */}
              <div className="flex-1 bg-gradient-to-b from-bg-1 to-bg-2/5 border border-gray-800/30 rounded-lg p-6 flex flex-col hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold tracking-tight text-text-2 text-center mb-4">
                  {mission.title}
                </h3>
                
                <div className="h-[1px] w-3/4 mx-auto bg-gray-800/20 mb-4"></div>
                
                <p className="text-base leading-relaxed text-left md:text-center">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Missions;