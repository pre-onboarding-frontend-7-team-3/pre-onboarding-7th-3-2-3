import * as S from './NotFound.style';
import SEO from '../../components/common/SEO/SEO';

const NotFound = () => {
  const title = '404 Not Found';
  return (
    <>
      <SEO title={title} />
      <S.Container>
        <S.NotFoundText>페이지를 찾을 수 없습니다.</S.NotFoundText>
      </S.Container>
    </>
  );
};

export default NotFound;
