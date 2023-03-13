'use client';

import Image from "next/image";

import clsx from 'classnames';

import { useActivitiesState } from "@/providers/ActivitiesProvider";
import { IActivity } from "@/types";

const ActivityList = () => {
  const { activities, currentActivity, setCurrentActivity, setCurrentDivision, selectedActivities } = useActivitiesState();

  const onClickActivity = (item: IActivity) => {
    setCurrentActivity(item);
    setCurrentDivision(item.divisions[0]);
  };

  return (
    <div>
      <div
        className="border-b border-black pb-4 mb-4"
      >
        <p className="text-lg font-ssp font-semibold">Activité</p>
      </div>
      <div>
        {
          activities.map((item) => (
            <div
              key={item.id}
              className={clsx(`flex items-center justify-between w-full max-w-full h-[40px]`, {
                'bg-green-one': currentActivity?.id === item.id,
              })}
              onClick={() => onClickActivity(item)}
            >
              <span className="text-md truncate">
                {item.name}
              </span>

              <Image
                className={clsx(`flex-shrink-0 ml-4`, {
                  'opacity-0': !selectedActivities.includes(item.id)
                })}
                src="/assets/images/check.svg"
                alt=""
                width={15}
                height={11}
              />

            </div>
          ))
        }
      </div>

    </div>
  );
};

export default ActivityList;