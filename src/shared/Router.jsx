import React from "react";
import Detail from "pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";

function Router({ letter, setLetter }) {
  // console.log(props);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main letter={letter} setLetter={setLetter} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail letter={letter} setLetter={setLetter} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
