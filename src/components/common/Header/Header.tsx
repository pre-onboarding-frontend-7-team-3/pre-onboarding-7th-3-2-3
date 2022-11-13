import * as S from './Header.style';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return <S.Conatiner>{title}</S.Conatiner>;
};

export default Header;
