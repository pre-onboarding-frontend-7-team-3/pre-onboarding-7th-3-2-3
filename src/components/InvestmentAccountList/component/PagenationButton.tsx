import styled from 'styled-components';
import { Button } from '@mui/material';

interface PagenationButtonType {
  currentPage: number;
  maxPage: number;
  handleCurrentPage: (num: number) => void;
}

const PagenationButton = ({
  currentPage,
  maxPage,
  handleCurrentPage,
}: PagenationButtonType) => {
  return (
    <PageButtonContainer>
      <Button
        variant="contained"
        disabled={currentPage <= 1}
        onClick={() => handleCurrentPage(-1)}
      >
        Previous page
      </Button>

      <Button variant="text">Page {currentPage}</Button>

      <Button
        variant="contained"
        disabled={currentPage >= maxPage}
        onClick={() => handleCurrentPage(+1)}
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
