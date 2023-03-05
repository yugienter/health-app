import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BasicLayout } from "../components/layouts/BasicLayout/BasicLayout";

import { Column } from "../pages/Column/Column";
import { MyPage } from "../pages/MyPage/MyPage";
import { MyRecord } from "../pages/MyRecord/MyRecord";
import { ProtectedRoute, PublicRoute } from "./router";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <BasicLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<MyPage />} />
            <Route path="/myrecord" element={<MyRecord />} />
          </Route>
          <Route
            path="/"
            element={
              <PublicRoute>
                <BasicLayout />
              </PublicRoute>
            }
          >
            <Route path="/column" element={<Column />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
