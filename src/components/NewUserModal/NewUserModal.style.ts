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

export const ModalContainer = styled.form`
  position: relative;
  ${({ theme }) => theme.flexColumn}
  align-items:flex-start;
  width: 600px;
  min-width: 300px;
  height: 70vh;
  gap: 10px;
  padding: 40px;
  margin-bottom: 50px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 2px 2px 6px rgb(173, 173, 173);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #194384;
  padding-bottom: 10px;
`;

export const Header = styled.div`
  margin-top: 0.6rem;
  color: #194384;
  font-family: Roboto;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
`;

export const FunnelButtonContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexCenter}
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  gap: 10px;
  word-spacing: 6px;
  font-size: 18px;
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 8px 14px;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 15px;
  background: #3c6dba;
  color: #fff;
  box-shadow: 0px 1px 2px rgba(9, 16, 55, 0.4);
  cursor: pointer;
`;
