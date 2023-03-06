import { NavList } from "../../../config/NavLinks";
import { useQueryNews } from "../../hooks/useNews";
import { NavItem } from "../../molecules/NavItem/NavItem";

const Navigator = () => {
  const { news } = useQueryNews();
  return (
    <>
      <div className="w-[768px] h-[64px] flex items-center justify-end gap-">
        {NavList.map((item, index) => (
          <NavItem key={index} prop={item} news={news.length} />
        ))}
      </div>
    </>
  );
};

export default Navigator;
