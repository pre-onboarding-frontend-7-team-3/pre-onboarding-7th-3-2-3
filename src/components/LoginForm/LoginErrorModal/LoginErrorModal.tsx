import { useRef } from 'react';
import * as S from './LoginErrorModal.style';
import useCheckIfClickedOutside from '../hooks/useCheckIfClickedOutside';

const LoginErrorModal = ({ serverAuthError, setServerAuthError }) => {
  const modalRef = useRef();
  const handleCloseModal = () => {
    setServerAuthError('');
  };
  useCheckIfClickedOutside(modalRef, handleCloseModal);

  return (
    <S.ViewPortContainer>
      <S.ModalContainer ref={modalRef}>
        <S.Container>
          <S.ErrorText>{serverAuthError}</S.ErrorText>
          <S.Button onClick={handleCloseModal}>확인</S.Button>
        </S.Container>
      </S.ModalContainer>
    </S.ViewPortContainer>
  );
};

export default LoginErrorModal;
