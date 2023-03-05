import type { FC } from "react";
import { ExerciseType } from "../../../types/MyRecord/types";

type Props = {
  props: ExerciseType;
};

export const ExerciseItem: FC<Props> = ({ props }) => {
  return (
    <>
      <div className="w-[416px] h-[42px] mr-[40px] mb-[2px] border-b-[1px] border-gray400">
        <div className="w-full h-[21px] flex items-center justify-between">
          <span className="w-[20px] h-[21px] text-light flex items-center">
            ●
          </span>
          <div className="w-full flex items-center justify-between">
            <span className="w-[197px] h-[21px] text-[15px] leading-[21px] text-light">
              {props.title}
            </span>
            <span className="w-[68px] h-[24px] text-[18px] leading-[24px] text-primary300">{`${props.time} min`}</span>
          </div>
        </div>
        <span className="w-[63px] h-[20px] ml-[20px] text-[15px] leading-[20px] text-primary300">
          {props.calo}
        </span>
      </div>
    </>
  );
};
