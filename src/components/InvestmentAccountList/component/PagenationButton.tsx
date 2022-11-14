import styled from "styled-components";
import { Button } from "@mui/material";

interface PagenationButtonType {
  currentPage: number;
  maxPage: number;
  handleCurrentPagePlus: () => void;
  handleCurrentPageMinus: () => void;
}

const PagenationButton = ({
  currentPage,
  maxPage,
  handleCurrentPagePlus,
  handleCurrentPageMinus,
}: PagenationButtonType) => {
  return (
    <PageButtonContainer>
      <Button
        variant="contained"
        disabled={currentPage <= 1}
        onClick={handleCurrentPageMinus}
      >
        Previous page
      </Button>

      <Button variant="text">Page {currentPage}</Button>

      <Button
        variant="contained"
        disabled={currentPage >= maxPage}
        onClick={handleCurrentPagePlus}
      >
        Next page
      </Button>
    </PageButtonContainer>
  );
};

const PageButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export default PagenationButton;
