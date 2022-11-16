import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import InvestmentAccounts from "./pages/InvestmentAccounts/InvestmentAccounts";
import Users from "./pages/users";
import RequireAuth from "./utils/auth/RequireAuth";
import ROUTES from "./constants/routes";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <RequireAuth isAuthRequired={false} redirectUrl={ROUTES.ACCOUNTS} />
          }
        >
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>
        <Route
          element={
            <RequireAuth isAuthRequired={true} redirectUrl={ROUTES.LOGIN} />
          }
        >
          <Route path={ROUTES.ACCOUNTS} element={<InvestmentAccounts />} />
          <Route path={ROUTES.USERS} element={<Users />} />
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route
          path={ROUTES.ALL}
          element={<Navigate to={ROUTES.NOT_FOUND} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
