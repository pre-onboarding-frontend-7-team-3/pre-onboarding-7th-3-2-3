import { HashLoader } from 'react-spinners';

import * as S from './Loader.style';

const Loader = () => {
  return (
    <S.Wrapper>
      <HashLoader size={60} speedMultiplier={1.5} />
    </S.Wrapper>
  );
};

export default Loader;
