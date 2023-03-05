import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { ActivityItemType } from "../../../types/MyRecord/types";

type Props = {
  props: ActivityItemType;
};

export const ActivityItem: FC<Props> = ({ props }) => {
  return (
    <>
      <div className="w-[288px] h-[288px] bg-primary300 flex items-center justify-center">
        <div className="relative w-[240px] h-[240px] flex">
          <img
            className="w-[240px] h-[240px] object-cover grayscale brightness-50 bg-white/30"
            alt="activity"
            src={props.image}
          />
          <div className="absolute w-[240px] h-[66px] top-[38%] flex flex-col items-center justify-center gap-[7px]">
            <span className="text-[25px] leading-[33px] text-primary300 uppercase">
              {props.title}
            </span>
            <NavLink
              to={props.link}
              className="w-[160px] h-[24px] bg-primary400 flex items-center justify-center"
            >
              <span className="text-light text-sm">{props.btn_title}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
