import { ContentItems } from "../../../config/dummyData/ContentList";
import ContentItem from "../../molecules/ContentItem/ContentItem";
import { DirectButton } from "../DirectButton/DirectButton";

export const ColumnContent = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[10px]">
        <div className="w-[960px] h-[464px] flex flex-wrap gap-[8px]">
          {ContentItems.map((item, index) => (
            <ContentItem key={index} props={item} />
          ))}
        </div>
        <DirectButton title="コラムをもっと見る" link="" />
      </div>
    </>
  );
};
