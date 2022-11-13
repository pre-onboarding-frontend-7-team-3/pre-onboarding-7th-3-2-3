import styled from 'styled-components';

export const ViewPortContainer = styled.div`
  position: fixed;
  ${({ theme }) => theme.flexCenter}
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.17);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 320px;
  height: 120px;
  margin-bottom: 50px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 2px 2px 6px rgb(173, 173, 173);
`;

export const Button = styled.button`
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 12px;
  box-shadow: 1px 1px 1px rgb(200, 200, 200);

  &:hover {
    background-color: lightgrey;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;
  height: 100%;
  gap: 20px;
  word-spacing: 6px;
  font-size: 18px;
  font-weight: 700;
`;

export const ErrorText = styled.div`
  margin-top: 10px;
`;