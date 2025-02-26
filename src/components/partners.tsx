import { Suspense } from "react";
import SectionLayout from "@/layouts/section-layout";
import Loading from "@/components/loader";
import Marquee from "@/components/marquee";
import { getPartners } from "@/lib/apis";

const Partners = async () => {
  const partners = await getPartners();

  return (
    <SectionLayout title="Our Partners">
      <div className="w-full flex flex-col gap-4">
        <Suspense fallback={<Loading />}>
          <Marquee partners={partners} />
        </Suspense>
      </div>
    </SectionLayout>
  );
};

export default Partners;