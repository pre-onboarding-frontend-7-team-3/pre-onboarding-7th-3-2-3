import * as S from './FunnelButton.style';

type ButtonProps = {
  text: string;
  handleButtonStyle: () => void;
  isSelected: boolean;
};

const FunnelButton = ({ text, handleButtonStyle, isSelected }: ButtonProps) => {
  return (
    <div>
      {isSelected ? (
        <S.SelectedFunnelButton disabled={true} onClick={handleButtonStyle}>
          {text}
        </S.SelectedFunnelButton>
      ) : (
        <S.DefaultFunnelButton onClick={handleButtonStyle}>
          {text}
        </S.DefaultFunnelButton>
      )}
    </div>
  );
};

export default FunnelButton;
