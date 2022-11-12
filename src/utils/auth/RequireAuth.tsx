import { Outlet, Navigate } from 'react-router-dom';
import storage from '../storage/webStorageUtils';

interface Props {
  isAuthRequired: boolean;
  redirectUrl: string;
}

const RequireAuth = ({ isAuthRequired, redirectUrl }: Props) => {
  const token = storage.get('access_token');

  return isAuthRequired === (token !== null) ? (
    <Outlet />
  ) : (
    <Navigate to={redirectUrl} replace />
  );
};

export default RequireAuth;
