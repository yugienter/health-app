import { useEffect, useState } from "react";

import ICON from "../../../assets/icons/scroll.svg";

export const ScrollTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showTopBtn && (
        <button onClick={scrollTop} className="fixed right-[20%] top-[55%]">
          <img className="w-[40px] h-[40px]" alt="scrollTop" src={ICON} />
        </button>
      )}
    </>
  );
};
