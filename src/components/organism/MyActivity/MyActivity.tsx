import { ActivityList } from "../../../config/ActivityList";
import { ActivityItem } from "../../molecules/ActivityItem/ActivityItem";

export const MyActivity = () => {
  return (
    <>
      <div className="w-[960px] h-[288px] flex itemc-center justify-center gap-[48px]">
        {ActivityList.map((item, index) => (
          <ActivityItem key={index} props={item} />
        ))}
      </div>
    </>
  );
};
