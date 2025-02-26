import { Suspense } from "react";
import Loader from "@/components/loader";
import Banner from "@/components/banner";
import Partners from "@/components/partners";
import Mission from "@/components/missions";
import News from "@/components/news";
import Activities from "@/components/activities";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-12 items-center justify-center">
      <Suspense fallback={<Loader />}>
        <Banner />
      </Suspense>
      <Partners />
      <Mission />
      <News />
      <Activities />
    </div>
  );
};

export default Home;
