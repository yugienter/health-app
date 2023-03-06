import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { RationItemType } from "../../../types/MyPage/types";

import HEXAGON from "../../../assets/icons/hex.svg";

type Props = {
  props: RationItemType;
};

export const RationItem: FC<Props> = ({ props }) => {
  return (
    <>
      <NavLink to={props.link} className="w-[128px] h-[128px]">
        <div className="relative">
          <img
            className=" w-[128px] h-[128px] z-1"
            alt="hexagon"
            src={HEXAGON}
          />
          <img
            className="absolute top-[18%] left-[30%] w-[56px] h-[56px] z-2"
            alt="icon"
            src={props.icon}
          />
          <span className="absolute w-[128px] top-[60%] flex items-center justify-center text-white">
            {props.title}
          </span>
        </div>
      </NavLink>
    </>
  );
};
