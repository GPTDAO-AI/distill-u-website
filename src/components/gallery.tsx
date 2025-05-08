import { Suspense } from "react";
import SectionLayout from "@/layouts/section-layout";
import Loader from "@/components/loader";
import Swiper from "@/components/swiper";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
];

const Gallery = () => {
  return (
    <SectionLayout title="Gallery" description="Enjoy the scenery and activities in Distill Labs.">
      <Suspense fallback={<Loader />}>
        <Swiper images={images} />
      </Suspense>
    </SectionLayout>
  );
};

export default Gallery;