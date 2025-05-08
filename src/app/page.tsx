import { Suspense } from "react";
import Loader from "@/components/loader";
import Banner from "@/components/banner";
import Partners from "@/components/partners";
import Mission from "@/components/missions";
import News from "@/components/news";
import Activities from "@/components/activities";
import Resources from "@/components/resources";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-12 items-center justify-center">
      <Suspense fallback={<Loader />}>
        <Banner />
      </Suspense>
      <News />
      <Partners />
      <Mission />
      <Resources />
      <Activities />
    </div>
  );
};

export default Home;
