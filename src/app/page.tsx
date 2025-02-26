import { Suspense } from "react";
import Banner from "@/components/banner";
import Loader from "@/components/loader";

const Home = () => {
  return (
    <div className="w-full">
      <Suspense fallback={<Loader />}>
        <Banner />
      </Suspense>
    </div>
  );
};

export default Home;
