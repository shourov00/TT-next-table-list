import { useMemo } from "react";
import Image from "next/image";

import clsx from 'classnames';

import { useActivitiesState } from "@/providers/ActivitiesProvider";

const ClasseList = () => {
  const {
    currentDivision,
    selectedClasses,
    onChangeClasse,
  } = useActivitiesState();

  const classes = useMemo(() => {
    if (currentDivision) {
      return currentDivision.classes;
    }

    return [];
  }, [currentDivision]);

  const onClickClasse = (classes) => {
    onChangeClasse(classes.id);
  }

  return (
    <div>
      <div
        className="border-b border-black pb-4 mb-4"
      >
        <p className="text-lg font-ssp font-semibold">Classe</p>
      </div>

      <div>
        {
          classes.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full max-w-full h-[40px] hover:cursor-pointer"
              onClick={() => onClickClasse(item)}
            >
              <span className="text-md truncate">
                {item.name}
              </span>

              <div
                className={clsx('flex items-center justify-center rounded border border-grey-one w-[19px] h-[19px]', {
                  'bg-green': selectedClasses.includes(item.id)
                })}
              >
                {
                  selectedClasses.includes(item.id) && (
                    <Image
                      className={clsx(`flex-shrink-0`, {
                      })}
                      src="/assets/images/check-white.svg"
                      alt=""
                      width={10}
                      height={10}
                    />
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ClasseList;