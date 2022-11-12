import { NavLink } from 'react-router-dom';
import * as S from './Sider.style';
import { SIDER_DATA } from '../../../constants/siderData';

const Sider = () => {
  return (
    <S.Container>
      <S.Heading>DnC</S.Heading>
      {SIDER_DATA.map(({ id, name, keyword }) => (
        <NavLink
          to={`/${keyword}`}
          key={id}
          style={({ isActive }) => (isActive ? S.activeStyle : S.inactiveStyle)}
        >
          {name}
        </NavLink>
      ))}
    </S.Container>
  );
};

export default Sider;
