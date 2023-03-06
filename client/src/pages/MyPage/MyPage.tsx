import { Meal } from "../../components/organism/Meal/Meal";
import { MyPageTopPanel } from "../../components/organism/MyPageTopPanel/MyPageTopPanel";
import { Ration } from "../../components/organism/Ration/Ration";

export const MyPage = () => {
  return (
    <>
      <div className="w-full h-[auto] flex flex-col gap-[56px] items-center">
        <MyPageTopPanel />
        <Ration />
        <Meal />
      </div>
    </>
  );
};
