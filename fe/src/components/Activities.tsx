"use client"

import { useEffect } from "react";

import MobileActivities from "@/components/MobileActivities";
import PCActivities from "@/components/PCActivities";

import { fetchActivities } from "@/api/actities.api";
import { useActivitiesState } from "@/providers/ActivitiesProvider";

const Activities = () => {
  const {  setActivities } = useActivitiesState();

  useEffect(() => {
    fetchActivities()
      .then(({ data }) => {
        setActivities(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="font-roboto">
      <h1 className="text-2xl mb-15 font-ssp font-semibold">Création de compte</h1>

      <div className="hidden md:block">
        <PCActivities />
      </div>
      <div className="md:hidden">
        <MobileActivities />
      </div>

    </div>
  );
};

export default Activities;