import SectionLayout from "@/layouts/section-layout";
import { getActivities } from "@/lib/apis";
import Activity from "@/types/activity";

const ActivityItem = ({ activity }: { activity: Activity }) => {
  return (
    <div className="w-full group py-6 hover:bg-bg-2 transition-all duration-300 rounded-lg text-lg">
      <div className="flex flex-col md:flex-row md:items-center gap-4 text-left">
        <div className="w-full md:w-1/8">
          <span className="font-medium tracking-wide whitespace-nowrap">
            {activity.date}
          </span>
        </div>
        <div className="w-full md:w-2/8 flex flex-col">
          <h3 className="text-text-2 font-semibold tracking-tight group-hover:text-text-2 transition-colors duration-200">
            {activity.title}
          </h3>
        </div>
        <div className="w-full md:w-5/8 flex flex-col">
          <p className="leading-relaxed">
            {activity.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Activities = async () => {
  const activities = await getActivities();

  return (
    <SectionLayout title="Activities">
      <div className="w-full">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Activities;