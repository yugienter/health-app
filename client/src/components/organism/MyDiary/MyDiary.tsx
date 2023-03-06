import { useState } from "react";
import { DiaryList } from "../../../config/dummyData/DiaryList";
import { DiaryItemType } from "../../../types/MyRecord/types";
import { DiaryItem } from "../../molecules/DiaryItem/DiaryItem";

export const MyDiary = () => {
  const [diary, setDiary] = useState<DiaryItemType[]>(DiaryList);

  const onClick = () => {
    let newDiary: DiaryItemType[] = [];
    // load 4 more diaries
    for (let i = 0; i < 4; i++) {
      newDiary = [...newDiary, DiaryList[i]];
    }
    setDiary([...diary, ...newDiary]);
  };

  return (
    <>
      <div className="w-auto h-auto flex flex-col gap-[24px]">
        <span className="w-[229px] h-[32px] text-[22px] leading-[30px] -mb-[24px]">
          MY DIARY
        </span>
        <div className="w-[960px] h-auto flex flex-wrap gap-[12px]">
          {diary.map((item, index) => (
            <DiaryItem key={index} props={item} />
          ))}
        </div>
        <div className="w-[960px] h-auto flex items-center justify-center">
          <button
            onClick={onClick}
            className={`w-[296px] h-[56px] rounded-md text-lg text-white bg-gradient-to-r from-primary300 to-primary400 flex items-center justify-center`}
          >
            自分の日記をもっと見る
          </button>
        </div>
      </div>
    </>
  );
};
