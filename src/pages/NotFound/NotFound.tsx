import * as S from './NotFound.style'
import Layout from '../../components/common/Layout/Layout'
import Header from '../../components/common/Header/Header'

const NotFound = () => {
  return (
    <Layout>
      <Header />
      <S.Container>
        <S.NotFoundText>페이지를 찾을 수 없습니다.</S.NotFoundText>
      </S.Container>
    </Layout>
  )
}

export default NotFound;