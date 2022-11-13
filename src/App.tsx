import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import test from '@components/test';
import InvestAccount from "./pages/InvestAccount";

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="login" element={<Login />}/>
    <Route path="/admin" element={<InvestAccount />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
