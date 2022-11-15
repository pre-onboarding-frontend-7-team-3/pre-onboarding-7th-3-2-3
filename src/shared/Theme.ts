import { css, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  bg: {
    darkBlue: '#0f253c',
    grey: '#f0f2f5',
    white: '#ffffff',
    blue: '#586CF5',
  },
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexDefault: css`
    display: flex;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default theme;
