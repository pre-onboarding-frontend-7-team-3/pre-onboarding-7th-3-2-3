import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Detail from "./pages/detail/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />'
        <Route path="/detail" element={<Detail />} />'
      </Routes>
    </BrowserRouter>
  );
};

export default App;
