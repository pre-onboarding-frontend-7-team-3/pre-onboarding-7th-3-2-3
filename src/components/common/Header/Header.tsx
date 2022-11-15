import { useRecoilState } from 'recoil';
import * as S from './Header.style';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { siderState } from '../../../store/sider';
import DropDown from '@src/components/InvestmentAccountList/DropDown';
import { headerOptionState } from '@src/store/HeaderOption';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const [state, setSiderState] = useRecoilState(siderState);
  const [headerOptions, setHeaderOptions] = useRecoilState(headerOptionState);
  console.log(headerOptions);

  const firstOptions = [
    { value: 'roas', text: 'ROAS' },
    { value: 'cost', text: '광고비' },
    { value: 'imp', text: '노출수' },
    { value: 'click', text: '클릭수' },
    { value: 'cvr', text: '전환수' },
    { value: 'revenue', text: '매출' },
  ];
  const secondOptions = [
    { value: 9999, text: '관리자확인필요' },
    { value: 1, text: '입금대기' },
    { value: 2, text: '운용중' },
    { value: 3, text: '투자중지' },
    { value: 4, text: '해지' },
  ];
  const thirdOptions = [
    { value: false, text: 'In-active' },
    { value: true, text: 'Active' },
  ];

  const toggleSider = () => {
    setSiderState((prev: boolean) => !prev);
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
        <DropDown
          menuItems={firstOptions}
          saveRecoilNavOption={(option: any) =>
            setHeaderOptions({ ...headerOptions, firstOption: option })
          }
        />
        <DropDown
          menuItems={secondOptions}
          saveRecoilNavOption={(option: any) =>
            setHeaderOptions({ ...headerOptions, secondOption: option })
          }
        />
        <DropDown
          menuItems={thirdOptions}
          saveRecoilNavOption={(option: any) =>
            setHeaderOptions({ ...headerOptions, thirdOption: option })
          }
        />
        <input placeholder="검색어를 입력" />
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
