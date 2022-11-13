import { useRecoilState } from 'recoil';
import * as S from './Header.style';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { siderState } from '../../../store/sider';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const [state, setSiderState] = useRecoilState(siderState);

  const toggleSider = () => {
    setSiderState(prev => !prev);
  };
  return (
    <S.Container>
      <S.ButtonContainer>
        {state ? (
          <MenuOpenIcon sx={{ cursor: 'pointer' }} onClick={toggleSider} />
        ) : (
          <MenuIcon sx={{ cursor: 'pointer' }} onClick={toggleSider} />
        )}
        <span>{title}</span>
      </S.ButtonContainer>
      <S.IconContainer>
        <NotificationsNoneIcon />
        <HelpOutlineIcon />
        <PermIdentityIcon />
      </S.IconContainer>
    </S.Container>
  );
};

export default Header;
