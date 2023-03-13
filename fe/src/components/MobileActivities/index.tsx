import ActivityItem from "@/components/MobileActivities/ActivityItem";

import { useActivitiesState } from "@/providers/ActivitiesProvider";

const MobileActivities = () => {
  const { activities } = useActivitiesState();

  return (
    <div>
      <p className="text-xl mb-15 font-bold">Sélectionnez la ou les activités principales de votre entreprise</p>

      <div
        className="border-b border-black pb-4 mb-4"
      >
        <p className="text-lg font-ssp font-semibold">Activité</p>
      </div>

      <div>
        {
          activities.map((item) => (
            <ActivityItem
              key={item.id}
              activity={item}
            />
          ))
        }
      </div>
    </div>
  );
};

export default MobileActivities;