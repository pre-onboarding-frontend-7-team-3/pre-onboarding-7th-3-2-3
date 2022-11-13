import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Layout from "./components/common/Layout";

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/auth" element={<Login />} />
      </Routes>
  );
}

export default App;
