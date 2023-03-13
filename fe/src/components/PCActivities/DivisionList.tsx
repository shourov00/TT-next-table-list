import { useActivitiesState } from "@/providers/ActivitiesProvider";
import { useMemo } from "react";
import Image from "next/image";
import { IDivision } from "@/types";
import clsx from 'classnames';

const DivisionList = () => {
  const { currentActivity, currentDivision, setCurrentDivision, selectedDivisions } = useActivitiesState();

  const divisions = useMemo(() => {
    if (currentActivity)
      return currentActivity.divisions;

    return [];
  }, [currentActivity]);

  const onClickDivision = (item: IDivision) => {
    setCurrentDivision(item);
  };

  return (
    <div>
      <div
        className="border-b border-black pb-4 mb-4"
      >
        <p className="text-lg font-ssp font-semibold">Division</p>
      </div>

      <div>
        {
          divisions.map((item) => (
            <div
              key={item.id}
              className={clsx(`flex items-center justify-between w-full h-[40px] max-w-full`, {
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
    </div>
  );
};

export default DivisionList;