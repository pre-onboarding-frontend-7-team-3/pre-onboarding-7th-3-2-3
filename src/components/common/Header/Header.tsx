import { useSetRecoilState } from 'recoil';
import * as S from './Header.style';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { siderState } from '../../../store/sider';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const setSiderState = useSetRecoilState(siderState);

  const toggleSider = () => {
    setSiderState(prev => !prev);
  };
  return (
    <S.Conatiner>
      <MenuOpenIcon sx={{ cursor: 'pointer' }} onClick={toggleSider} />
      {title}
    </S.Conatiner>
  );
};

export default Header;
