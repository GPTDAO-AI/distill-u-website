import { Suspense } from "react";
import Loader from "@/components/loader";
import Banner from "@/components/banner";
import Partners from "@/components/partners";
import Mission from "@/components/mission";
import News from "@/components/news";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-12 items-center justify-center">
      <Suspense fallback={<Loader />}>
        <Banner />
      </Suspense>
      <Partners />
      <Mission />
      <News />
    </div>
  );
};

export default Home;
