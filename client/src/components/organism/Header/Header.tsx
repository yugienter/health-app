import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/logo.svg";
import { DrawMenu } from "../DrawMenu/DrawMenu";
import Navigator from "../Navigator/Navigator";

export const Header = () => {
  return (
    <>
      <div className="w-[1280px] h-[64px] bg-dark500 px-[160px] flex items-center justify-between z-10">
        <Link to="/" className="flex items-center">
          <img
            className="w-[144px] h-[64px] object-cover"
            alt="Logo"
            src={Logo}
          />
        </Link>
        <Navigator />
        <DrawMenu />
      </div>
    </>
  );
};
