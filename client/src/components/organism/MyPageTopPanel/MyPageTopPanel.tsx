import d01 from "../../../assets/pics/MyPage/d01.jpg";
import MAINGRAPH from "../../../assets/pics/MyPage/main_graph.svg";
import main_photo from "../../../assets/icons/main_photo_text.svg";

export const MyPageTopPanel = () => {
  return (
    <>
      <div className="w-[1280px] h-[312px] flex">
        <div className="relative w-[540px] h-[312px] bg-lime-100">
          <img
            className="w-[540px] h-[312px] object-cover"
            alt="process"
            src={d01}
          />
          <img
            className="w-[181px] h-[181px] absolute top-[22%] left-[32%]"
            alt="loading"
            src={main_photo}
          />
        </div>
        <div className="w-[740px] h-[312px] bg-dark600 flex items-center pl-[55px]">
          <img
            className="w-[589px] h-[282px]"
            alt="main_graph"
            src={MAINGRAPH}
          />
        </div>
      </div>
    </>
  );
};
