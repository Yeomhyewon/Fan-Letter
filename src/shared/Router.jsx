import React from "react";
import Detail from "pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
