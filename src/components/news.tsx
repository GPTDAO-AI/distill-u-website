import SectionLayout from "@/layouts/section-layout";
import { getNews } from "@/lib/apis";

const News = async () => {
  const news = await getNews();

  if (!news || news.length === 0) {
    return null;
  }

  return (
    <SectionLayout title="News">
      <div>
        <h1>News</h1>
      </div>
    </SectionLayout>
  );
};

export default News;
