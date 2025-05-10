import { Suspense } from "react";
import Banner from "@/components/banner";
import Partners from "@/components/partners";
import Mission from "@/components/missions";
import Activities from "@/components/activities";
import Resources from "@/components/resources";
import Location from "@/components/location";
import Gallery from "@/components/gallery";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-12 items-center justify-center">
      <Suspense fallback={null}>
        <Banner />
      </Suspense>
      <Mission />
      <div className="w-full max-w-7xl flex flex-col gap-12 items-center justify-center">
        <Resources />
        <Partners />
        <Location />
        <Activities />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
