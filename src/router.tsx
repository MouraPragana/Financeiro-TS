import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { About, DefaultLayout, Financial } from "./pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<>Home</>} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Router;
