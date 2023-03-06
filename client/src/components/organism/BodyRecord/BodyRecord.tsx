import { useState } from "react";
import GRAPH from "../../../assets/pics/MyRecord/Group.svg";

export const BodyRecord = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  return (
    <>
      <div className="w-[960px] h-[304px] bg-dark500 flex flex-col p-[22px]">
        <div className="flex">
          <span className="w-[96px] h-[40px] text-[15px] leading-[20px] text-light uppercase block">
            body record
          </span>
          <span className="w-[146px] h-[30px] text-[22px] leading-[30px] text-light">
            2021.05.21
          </span>
        </div>
        <div className="w-[960px] flex items-center justify-center">
          <img
            className="w-[851px] h-[185]px object-cover "
            alt="body_record"
            src={GRAPH}
          />
        </div>
        <div className="flex gap-[15px] mt-[8px]">
          <button
            id="1"
            onClick={() => setActiveBtn(1)}
            className={`w-[56px] h-[24px] rounded-xl ${
              activeBtn === 1
                ? "bg-primary300 text-light"
                : "bg-light text-primary300"
            }`}
          >
            日
          </button>
          <button
            id="2"
            onClick={() => setActiveBtn(2)}
            className={`w-[56px] h-[24px] rounded-xl ${
              activeBtn === 2
                ? "bg-primary300 text-light"
                : "bg-light text-primary300"
            }`}
          >
            週
          </button>
          <button
            id="3"
            onClick={() => setActiveBtn(3)}
            className={`w-[56px] h-[24px] rounded-xl ${
              activeBtn === 3
                ? "bg-primary300 text-light"
                : "bg-light text-primary300"
            }`}
          >
            月
          </button>
          <button
            id="4"
            onClick={() => setActiveBtn(4)}
            className={`w-[56px] h-[24px] rounded-xl ${
              activeBtn === 4
                ? "bg-primary300 text-light"
                : "bg-light text-primary300"
            }`}
          >
            年
          </button>
        </div>
      </div>
    </>
  );
};
