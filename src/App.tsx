import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvestmentAccount from "./components/Admin/InvestmentAccount";
import Layout from "./components/Layout";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/admin" element={<InvestmentAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
