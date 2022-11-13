import { useRef } from 'react';
import * as S from './LoginErrorModal.style';
import useUnmountIfClickedOutside from '../hooks/useUnmountIfClickedOutside';

interface Props {
  serverAuthError: string;
  setServerAuthError: React.Dispatch<React.SetStateAction<string>>;
}

const LoginErrorModal = ({ serverAuthError, setServerAuthError }: Props) => {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handleCloseModal = () => {
    setServerAuthError('');
  };

  useUnmountIfClickedOutside(modalRef, handleCloseModal);

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
