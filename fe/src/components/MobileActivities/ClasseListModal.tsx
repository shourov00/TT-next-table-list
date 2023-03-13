'use client';

import { FC, useMemo } from "react";
import Image from "next/image";

import clsx from 'classnames';

import { useActivitiesState } from "@/providers/ActivitiesProvider";

interface IClasseListModalProps {
  handleClose: () => void
}

const ClasseListModal: FC<IClasseListModalProps> = ({
  handleClose,
}) => {
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
    <div className="fixed top-0 left-0 w-screen h-screen bg-black-two z-10">
      <div
        className="w-full h-full relative"
        onClick={handleClose}
      >
        <div
          className="absolute w-full bottom-0 left-0 bg-white rounded-t-[10px] px-8 pb-8 pt-15"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {
              classes.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between w-full max-w-full h-[40px] hover:cursor-pointer mb-8"
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

          <div className="flex items-center justify-center w-full mt-15">
            <button
              className="outline-none rounded-[30px] w-full border border-grey-one h-[40px]"
              onClick={handleClose}
            >
              Continuer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClasseListModal;