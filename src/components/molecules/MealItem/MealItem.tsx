import type { FC } from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { MealItemType } from "../../../types/MyPage/types";

type Props = {
  props: MealItemType;
};

const MealItem: FC<Props> = ({ props }) => {
  return (
    <>
      <NavLink to={props.link} className="w-[234px] h-[224px] flex flex-col">
        <div className="relative">
          <img
            className="w-[234px] h-[224px] object-cover"
            alt="meal"
            src={props.image}
          />
          <div className="absolute bottom-0 w-[144px] h-[24px] bg-primary300 flex items-center justify-start gap-[10px] pl-[20px]">
            <span className="text-light text-[15px] leading-[30px]">
              {props.postedDate}.{props.type}
            </span>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default memo(MealItem);
