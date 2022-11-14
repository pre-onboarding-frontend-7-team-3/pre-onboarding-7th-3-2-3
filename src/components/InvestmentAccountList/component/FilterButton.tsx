import styled from "styled-components";

const FilterButton = () => {
  return (
    <Container>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
};

export const Container = styled.header`
  ${({ theme }) => theme.flexDefault}
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  width: 100px;
  height: 30px;
  padding: 30px;
  background-color: aquamarine;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexDefault}
  gap: 18px;
`;

export default FilterButton;
