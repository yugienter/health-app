import { ExerciseList } from "../../../config/dummyData/ExerciseList";
import { ExerciseItem } from "../../molecules/ExerciseItem/ExerciseItem";

export const MyExercise = () => {
  return (
    <>
      <div className="w-[960px] h-[264px] bg-dark500 flex flex-col p-[22px]">
        <div className="flex">
          <span className="w-[96px] h-[40px] text-[15px] leading-[20px] text-light uppercase">
            my exercise
          </span>
          <span className="w-[146px] h-[30px] text-[22px] leading-[30px] text-light">
            2021.05.21
          </span>
        </div>
        <div className="w-[916px] h- flex flex-wrap scrollbar overflow-scroll overflow-x-hidden">
          {ExerciseList.map((item, index) => (
            <ExerciseItem key={index} props={item} />
          ))}
        </div>
      </div>
    </>
  );
};
