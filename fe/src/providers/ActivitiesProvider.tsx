"use client"

import { createContext, useContext, useEffect, useState } from "react";

import { IActivity, IDivision } from "@/types";

interface IActivityContext {
  activities: IActivity[];
  setActivities: (value: IActivity[]) => void;
  currentActivity?: IActivity;
  setCurrentActivity: (value: IActivity) => void;
  currentDivision?: IDivision;
  setCurrentDivision: (value: IDivision) => void;
  selectedActivities: number[];
  setSelectedActivities: (value: number[]) => void;
  selectedDivisions: number[];
  setSelectedDivisions: (value: number[]) => void;
  selectedClasses: number[];
  setSelectedClasses: (value: number[]) => void;
  onChangeClasse: (value: number) => void;
}

const ActivityContext = createContext<IActivityContext>({
  activities: [],
  setActivities: () => {},
  currentActivity: undefined,
  setCurrentActivity: () => {},
  currentDivision: undefined,
  setCurrentDivision: () => {},
  selectedActivities: [],
  setSelectedActivities: () => {},
  selectedDivisions: [],
  setSelectedDivisions: () => {},
  selectedClasses: [],
  setSelectedClasses: () => {},
  onChangeClasse: () => {}
});

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [currentActivity, setCurrentActivity] = useState<IActivity | undefined>(undefined);
  const [currentDivision, setCurrentDivision] = useState<IDivision | undefined>(undefined);
  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [selectedDivisions, setSelectedDivisions] = useState<number[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<number[]>([]);

  const onChangeClasse = (id: number) => {
    if (selectedClasses.includes(id)) {
      const newClasses = selectedClasses.filter((item) => item !== id);
      setSelectedClasses(newClasses)
    } else {
      const newClasses = [...selectedClasses, id];
      setSelectedClasses(newClasses)
    }
  };
  
  useEffect(() => {
    if (currentDivision) {
      const hasClasses = currentDivision.classes.some((item) => selectedClasses.includes(item.id));
      
      if (hasClasses && !selectedDivisions.includes(currentDivision.id)) {
        setSelectedDivisions([...selectedDivisions, currentDivision.id])
      } else if (!hasClasses && selectedDivisions.includes(currentDivision.id)) {
        setSelectedDivisions(selectedDivisions.filter((item) => item !== currentDivision.id))
      }
    }
  }, [selectedClasses, currentDivision, selectedDivisions]);
  
  useEffect(() => {
    if (currentActivity) {
      const hasDivisions = currentActivity.divisions.some((item) => selectedDivisions.includes(item.id));

      if (hasDivisions && !selectedActivities.includes(currentActivity.id)) {
        setSelectedActivities([...selectedActivities, currentActivity.id]);
      } else if (!hasDivisions && selectedActivities.includes(currentActivity.id)) {
        setSelectedActivities(selectedActivities.filter((item) => item !== currentActivity.id));
      }
    }
  }, [currentActivity, selectedActivities, selectedDivisions]);

  return (
    <ActivityContext.Provider
      value={{
        activities,
        setActivities,
        currentActivity,
        currentDivision,
        setCurrentDivision,
        setCurrentActivity,
        selectedActivities,
        setSelectedActivities,
        selectedDivisions,
        setSelectedDivisions,
        selectedClasses,
        setSelectedClasses,
        onChangeClasse,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivitiesState = () => {
  return useContext(ActivityContext);
};