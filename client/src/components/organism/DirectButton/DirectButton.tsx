import type { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  link: string;
};

export const DirectButton: FC<Props> = ({ title, link }) => {
  return (
    <>
      <NavLink
        to={link}
        className={`w-[296px] h-[56px] rounded-md text-lg text-white bg-gradient-to-r from-primary300 to-primary400 flex items-center justify-center`}
      >
        <span>{title}</span>
      </NavLink>
    </>
  );
};
