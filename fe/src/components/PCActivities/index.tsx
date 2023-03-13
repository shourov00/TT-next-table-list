import ActivityList from "@/components/PCActivities/ActivityList";
import ClasseList from "@/components/PCActivities/ClasseList";
import DivisionList from "@/components/PCActivities/DivisionList";

const PCActivities = () => {
  return (
    <div className="p-15 max-w-[1350px] shadow-card rounded-[10px] border border-grey-two">
      <p className="text-xl mb-15 font-bold">Sélectionnez la ou les activités principales de votre entreprise</p>

      <div className="grid grid-cols-3 gap-10">
        <div>
          <ActivityList />
        </div>

        <div>
          <DivisionList />
        </div>

        <div>
          <ClasseList />
        </div>
      </div>

    </div>
  );
}

export default PCActivities;