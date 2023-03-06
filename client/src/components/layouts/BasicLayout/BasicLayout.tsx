import { useLayoutEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { ScrollTopBtn } from "../../molecules/ScrollTopBtn/ScrollTopBtn";

import { Footer } from "../../organism/Footer/Footer";
import { Header } from "../../organism/Header/Header";

export const BasicLayout = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="min-h-full flex flex-col items-center justify-start">
        <Header />
        <div className="min-h-[725px] flex">
          <Outlet />
          <ScrollTopBtn />
        </div>
        <Footer />
      </div>
    </>
  );
};
