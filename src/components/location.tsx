import SectionLayout from "@/layouts/section-layout";
import GoogleMaps from "@/components/google-maps";
import Image from "next/image";

interface Intro {
  title: string;
  description: string;
  image: string;
}

const intro: Intro[] = [
  {
    title: "Proximity to Stanford University",
    description: "Our office is conveniently located just 1.3 miles from Stanford University, a short 6-minute drive, ensuring easy access to the campus and its resources.",
    image: "/images/distance.jpg",
  },
  {
    title: "Vibrant Local Public Art Scene",
    description: "Palo Alto boasts a rich public art program, enhancing local parks and public spaces with creative installations, contributing to a vibrant community atmosphere near our office.",
    image: "/images/schematic_park.jpg",
  },
];

const Intro = ({ index, intro }: { index: number, intro: Intro }) => {
  return (
    <div className="group w-full rounded-xl overflow-hidden border border-gray-800/30 hover:bg-bg-2 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center">
        {index % 2 === 0 ? (
          <>
            <div className="w-full md:w-1/2 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-text-2">{intro.title}</h3>
              <p className="text-lg text-gray-700">{intro.description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                className="w-full h-auto object-cover"
                src={intro.image}
                alt={intro.title}
                width={500}
                height={500}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2 md:order-2 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-text-2">{intro.title}</h3>
              <p className="text-lg text-gray-700">{intro.description}</p>
            </div>
            <div className="w-full md:w-1/2 md:order-1">
              <Image
                src={intro.image}
                alt={intro.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Location = () => {
  return (
    <SectionLayout title="Location">
      <div className="w-full flex flex-col gap-8 items-center justify-center text-left">
        {intro.map((item, index) => (
          <Intro key={index} index={index} intro={item} />
        ))}
        <div className="w-full">
          <GoogleMaps />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Location;