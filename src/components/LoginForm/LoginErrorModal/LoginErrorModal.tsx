import * as S from './LoginErrorModal.style'

const LoginErrorModal = ({ serverAuthError, setServerAuthError }) => {
  const handleCloseModal = () => {
    setServerAuthError('');
  };
  return (
    <S.ViewPortContainer>
      <S.ModalContainer>
        <S.Container>
          <div>{serverAuthError}</div>
          <S.Button onClick={handleCloseModal}>확인</S.Button>
        </S.Container>
      </S.ModalContainer>
    </S.ViewPortContainer>
  );
};

export default LoginErrorModal;


