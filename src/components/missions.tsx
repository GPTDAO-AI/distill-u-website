import SectionLayout from "@/layouts/section-layout";

const missions = [
  {
    id: "1",
    title: "Build AI MVPs.",
    description: "Guide startups in developing functional AI prototypes, leveraging Palo Alto's technical resources and expert mentorship to achieve product-market fit within six months.",
  },
  {
    id: "2",
    title: "Connect Startups to Capital.",
    description: "Provide tailored funding solutions and direct access to Silicon Valley's top VCs, ensuring startups secure the financial backing needed for rapid scaling.",
  },
  {
    id: "3",
    title: "Scale AI Applications.",
    description: "Focus on deploying AI innovations in healthcare, fintech, and automation, offering market-entry strategies and partnerships for measurable impact.",
  },
];

const Missions = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4">
      {missions.map((mission, index) => (
        <div 
          key={mission.id} 
          className="w-full group hover:bg-text-2 transition-all duration-300 py-8 md:py-20 lg:py-16 flex flex-col items-center"
        >
            
          <div className={`w-full max-w-7xl flex flex-col gap-8 ${index % 2 === 0 ? "items-start text-left" : "items-end text-right"}`}>
            <h3 className="text-text-2 group-hover:text-bg-1 transition-all duration-300 text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight">
              {mission.title}
            </h3>
              
            <p className="w-full md:w-[80%] text-2xl lg:text-3xl leading-relaxed group-hover:text-bg-1 transition-all duration-300">
              {mission.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Missions;