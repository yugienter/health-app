import { BodyRecord } from "../../components/organism/BodyRecord/BodyRecord";
import { MyActivity } from "../../components/organism/MyActivity/MyActivity";
import { MyDiary } from "../../components/organism/MyDiary/MyDiary";
import { MyExercise } from "../../components/organism/MyExercise/MyExercise";

export const MyRecord = () => {
  return (
    <>
      <div className="w-full h-[auto] mt-[56px] flex flex-col gap-[56px] items-center">
        <MyActivity />
        <BodyRecord />
        <MyExercise />
        <MyDiary />
      </div>
    </>
  );
};
