import type { FC } from "react";

type Props = {
  title: string;
  onClick: any;
};

export const BottomButton: FC<Props> = ({ title, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-[296px] h-[56px] rounded-md text-lg text-white bg-gradient-to-r from-primary300 to-primary400 flex items-center justify-center`}
      >
        <span>{title}</span>
      </button>
    </>
  );
};
