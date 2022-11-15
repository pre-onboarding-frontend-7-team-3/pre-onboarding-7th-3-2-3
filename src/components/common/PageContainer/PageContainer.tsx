import * as S from "./PageContainer.style";

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};

export default PageContainer;
