import { RecommendList } from "../../../config/RecommendList";
import RecommendItem from "../../molecules/RecommendItem/RecommendItem";

export const Recommendation = () => {
  return (
    <>
      <div className="w-full h-[144px] flex gap-[32px]">
        {RecommendList.map((item, index) => (
          <RecommendItem key={index} props={item} />
        ))}
      </div>
    </>
  );
};
