import type { FC } from "react";
import type { DiaryItemType } from "../../../types/MyRecord/types";

type Props = {
  props: DiaryItemType;
};

export const DiaryItem: FC<Props> = ({ props }) => {
  return (
    <>
      <div className="w-[231px] h-[231px] border-[2px] border-gray400 flex flex-col justify-center p-[16px]">
        <div className="w-[148px] h-[48px]">
          <span>2021.05.21 23:23</span>
        </div>
        <div className="w-[200px] h-[132px] flex flex-col text-[12px] leading-[17px] text-dark500">
          <div className="w-full h-[33px] line-clamp-2">
            私の日記の記録が一部表示されます。
          </div>
          <div className="w-full h-[99px] line-clamp-5">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
        </div>
      </div>
    </>
  );
};
