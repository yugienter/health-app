import React, { useState } from "react";
import { MealList } from "../../../config/dummyData/MealList";
import { MealItemType } from "../../../types/MyPage/types";
import MealItem from "../../molecules/MealItem/MealItem";
import { BottomButton } from "../BottomButton/BottomButton";

export const Meal = () => {
  const [meal, setMeal] = useState<MealItemType[]>(MealList);

  const onClick = () => {
    // add 4 more random items
    let newMeal: MealItemType[] = [];
    for (let i: number = 0; i < 4; i++) {
      newMeal = [
        ...newMeal,
        MealList[Math.floor(Math.random() * MealList.length)],
      ];
    }
    setMeal([...meal, ...newMeal]);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-[28px]">
        <div className="w-[960px] h-auto flex flex-wrap gap-[8px]">
          {meal.map((item, index) => (
            <MealItem key={index} props={item} />
          ))}
        </div>
        <BottomButton onClick={onClick} title="記録をもっと見る" />
      </div>
    </>
  );
};
