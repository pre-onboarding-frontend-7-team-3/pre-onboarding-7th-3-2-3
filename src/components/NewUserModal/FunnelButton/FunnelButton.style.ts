import styled from 'styled-components';

export const SelectedFunnelButton = styled.button`
  padding: 8px 14px;
  margin-right: 10px;
  border-radius: 20px;
  background: #3c6dba;
  color: #fff;
  box-shadow: 0px 1px 2px rgba(9, 16, 55, 0.4);
  cursor: pointer;
`;

export const DefaultFunnelButton = styled(SelectedFunnelButton)`
  background: #eff2f5;
  color: #afafaf;
`;
