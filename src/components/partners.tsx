import { Suspense } from "react";
import SectionLayout from "@/layouts/section-layout";
import Marquee from "@/components/marquee";
import { getPartners } from "@/lib/apis";

const Partners = async () => {
  const partners = await getPartners();

  if (!partners || partners.length === 0) {
    return null;
  }

  return (
    <SectionLayout title="Our Partners">
      <Suspense fallback={null}>
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-4">
          <Marquee partners={partners} />
        </div>
      </Suspense>
    </SectionLayout>
  );
};

export default Partners;