import { Menu } from "@headlessui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MenuItemType } from "../../../types/Header/types";

type Props = {
  prop: MenuItemType;
};

export const MenuSingleItem: FC<Props> = ({ prop }) => {
  return (
    <>
      <div className="w-auto h-auto">
        <Menu.Item>
          {({ active }) => (
            <NavLink
              to={prop.link}
              className={`${
                active ? "bg-gray-200 text-dark500" : "text-white"
              } w-[280px] h-[72px] flex items-center justify-start pl-[32px]`}
            >
              <span className="h-[26px] text-lg font-poppins">
                {prop.title}
              </span>
            </NavLink>
          )}
        </Menu.Item>
      </div>
    </>
  );
};
