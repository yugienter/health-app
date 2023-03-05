import { ColumnContent } from "../../components/organism/ColumnContent/ColumnContent";
import { Recommendation } from "../../components/organism/Recommendation/Recommendation";

export const Column = () => {
  return (
    <>
      <div className="w-full h-[auto] flex flex-col gap-[56px] items-center mt-[56px]">
        <Recommendation />
        <ColumnContent />
      </div>
    </>
  );
};
