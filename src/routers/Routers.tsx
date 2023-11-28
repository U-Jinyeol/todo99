import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Detail from "../pages/detail";
import PageNotFoundPage from "../pages/404";
import Add from "../pages/add";
import Edit from "../pages/edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
