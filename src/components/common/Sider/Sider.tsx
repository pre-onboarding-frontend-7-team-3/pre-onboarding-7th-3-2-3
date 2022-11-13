import { NavLink, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as S from './Sider.style';
import LogoutIcon from '@mui/icons-material/Logout';
import { SIDER_DATA } from '../../../constants/siderData';
import storage from '../../../utils/storage/webStorageUtils';
import ROUTES from '../../../constants/routes';
import { siderState } from '../../../store/sider';

const Sider = () => {
  const isSiderVisible = useRecoilValue(siderState);
  const navigate = useNavigate();

  const LogoutAndRedirectToLogin = () => {
    storage.remove('access_token');
    navigate(ROUTES.LOGIN);
  };

  return (
    <S.Container isSiderVisible={isSiderVisible}>
      <S.Heading>DnC</S.Heading>
      {SIDER_DATA.map(({ id, name, keyword, icon }) => (
        <NavLink
          to={`/${keyword}`}
          key={id}
          style={({ isActive }) => (isActive ? S.activeStyle : S.inactiveStyle)}
        >
          {icon}
          {name}
        </NavLink>
      ))}
      <S.LogoutButton onClick={LogoutAndRedirectToLogin}>
        <LogoutIcon />
        로그아웃
      </S.LogoutButton>
    </S.Container>
  );
};

export default Sider;
