import { RationList } from "../../../config/RationList";
import { RationItem } from "../../molecules/RationItem/RationItem";

export const Ration = () => {
  return (
    <>
      <div className="w-[960px] h-[56px] flex items-center justify-between px-[110px] gap-[64px]">
        {RationList.map((item, index) => (
          <RationItem key={index} props={item} />
        ))}
      </div>
    </>
  );
};
