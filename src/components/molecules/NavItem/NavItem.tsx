import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavType } from "../../../types/Header/types";

type Props = {
  prop: NavType;
  news: number | null;
};

export const NavItem: FC<Props> = ({ prop, news }) => {
  return (
    <>
      <NavLink
        className={`w-[160px] h-[48px] flex items-center gap-[8px]`}
        to={prop.path}
      >
        <div className="w-[32px] h-[32px] relative">
          <img className="w-[32px] h-[32px]" alt="icon" src={prop.icon} />
          {prop.active === "news" && (
            <div className="w-[14px] h-[14px] absolute top-[1px] right-[-6px] bg-primary500 rounded-full flex items-center justify-center">
              <span className="text-light text-[10px]">{news}</span>
            </div>
          )}
        </div>
        <span className="text-light text-base font-poppins">{prop.title}</span>
      </NavLink>
    </>
  );
};
