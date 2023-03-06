import type { FC } from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { ContentItemType } from "../../../types/Column/types";

type Props = {
  props: ContentItemType;
};

const ContentItem: FC<Props> = ({ props }) => {
  return (
    <>
      <NavLink to={props.link} className="w-[234px] h-[224px] flex flex-col">
        <div className="relative">
          <img
            className="w-[234px] h-[144px] object-cover"
            alt="content"
            src={props.image}
          />
          <div className="absolute bottom-0 w-[144px] h-[24px] bg-primary300 flex items-center justify-center">
            <span className="text-light text-[15px] leading-[30px]">
              {props.postedTime}
            </span>
          </div>
        </div>
        <span className="h-[48px] mt-[8px] flex items-center justify-center text-[15px] leading-[22px] text-dark500 line-clamp-2">
          {props.title}
        </span>
        <div className="h-[24px] flex items-center gap-[6px]">
          {props.tags.map((tag, i) => (
            <span key={i} className="text-xs text-primary400">{`#${tag}`}</span>
          ))}
        </div>
      </NavLink>
    </>
  );
};

export default memo(ContentItem);
