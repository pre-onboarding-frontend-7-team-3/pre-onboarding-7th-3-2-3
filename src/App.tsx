import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Accounts from './pages/accounts/Accounts';
import Users from './pages/users/Users';
import RequireAuth from './utils/auth/RequireAuth';

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
          <Route path={ROUTES.ACCOUNTS} element={<Accounts />} />
          <Route path={ROUTES.USERS} element={<Users />} />
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<div>notfound</div>} />
        <Route
          path={ROUTES.ALL}
          element={<Navigate to={ROUTES.NOT_FOUND} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export const ROUTES = {
  LOGIN: '/',
  ACCOUNTS: '/accounts',
  USERS: '/users',
  NOT_FOUND: '/page-not-found',
  ALL: '*',
};
