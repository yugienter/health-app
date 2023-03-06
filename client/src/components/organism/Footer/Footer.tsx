import { NavLink } from "react-router-dom";
import { FooterList } from "../../../config/FooterList";

export const Footer = () => {
  return (
    <>
      <div className="w-[1280px] h-[128px] bg-dark500 px-[160px] mt-[60px] flex items-center justify-between">
        {FooterList.map((item, index) => (
          <NavLink key={index} to={item.link}>
            <span className="text-light text-base">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
};
