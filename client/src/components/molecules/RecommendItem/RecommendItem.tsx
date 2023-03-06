import type { FC } from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { RecommendType } from "../../../types/Column/types";

type Props = {
  props: RecommendType;
};

const RecommendItem: FC<Props> = ({ props }) => {
  return (
    <>
      <NavLink
        to={props.link}
        className="w-[216px] h-[144px] bg-dark600 flex flex-col items-center justify-center"
      >
        <span className="flex item-center text-xl text-primary300 uppercase">
          recommended
        </span>
        <span className="flex item-center text-xl text-primary300 uppercase">
          {props.title_eng}
        </span>
        <div className="mt-[4px] mb-[8px] w-[56px] h-[1px] border-[1px] border-light" />
        <span className="text-light text-lg">{props.title_ja}</span>
      </NavLink>
    </>
  );
};

export default memo(RecommendItem);
