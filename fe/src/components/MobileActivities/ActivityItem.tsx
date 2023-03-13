'use client';

import { FC, useEffect, useState } from "react";
import Image from "next/image";

import clsx from 'classnames';

import ClasseListModal from "@/components/MobileActivities/ClasseListModal";

import { useActivitiesState } from "@/providers/ActivitiesProvider";
import { IActivity, IDivision } from "@/types";

interface IActivityItemProps {
  activity: IActivity,
}

const ActivityItem: FC<IActivityItemProps> = ({
  activity,
}) => {
  const { selectedActivities, currentDivision, setCurrentDivision, selectedDivisions, setCurrentActivity } = useActivitiesState();
  const [showList, setShowList] = useState<boolean>(false);
  const [showClasseModal, setShowClasseModal] = useState<boolean>(false);

  const toggleShow = () => {
    setCurrentActivity(activity);
    setShowList(!showList);
  };

  const onClickDivision = (item: IDivision) => {
    setCurrentDivision(item);
    setShowClasseModal(true);
  };

  useEffect(() => {
    if (showClasseModal) {
      document.body.setAttribute('style', 'overflow:hidden');
    } else {
      document.body.setAttribute('style', 'overflow:auto');
    }
  }, [showClasseModal]);

  return (
    <div>
      <div
        key={activity.id}
        className={clsx(`flex items-center justify-between w-full h-[40px] max-w-full hover:cursor-pointer mb-2`, {
          'bg-green-one': showList
        })}
        onClick={toggleShow}
      >
        <span className="text-md truncate">
          {activity.name}
        </span>

        <Image
          className={clsx(`flex-shrink-0 ml-4`, {
            'opacity-0': !selectedActivities.includes(activity.id)
          })}
          src="/assets/images/check.svg"
          alt=""
          width={15}
          height={11}
        />
      </div>

      {
        showList && (
          <div className="pl-8">
            {
              activity.divisions.map((item) => (
                <div
                  key={item.id}
                  className={clsx(`flex items-center justify-between w-full h-[40px] max-w-full mb-2 hover:cursor-pointer`, {
                    'bg-green-one': currentDivision?.id === item.id,
                  })}
                  onClick={() => onClickDivision(item)}
                >
                  <span className="text-md truncate">
                    {item.name}
                  </span>

                  <Image
                    className={clsx(`flex-shrink-0 ml-4`, {
                      'opacity-0': !selectedDivisions.includes(item.id)
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
        )
      }

      {
        showClasseModal && (
          <ClasseListModal handleClose={() => setShowClasseModal(false)} />
        )
      }
    </div>
  );
};

export default ActivityItem;