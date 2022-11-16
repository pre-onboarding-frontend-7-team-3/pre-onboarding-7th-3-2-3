import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flexCenter: ThemedCssFunction;
    flexDefault: ThemedCssFunction;
    flexColumn: ThemedCssFunction;
    bg: {
      white?: string;
      lightBlue?: string;
      darkBlue?: string;
      grey?: string;
      blue?: string;
      lightGrey?: string;
    };
  }
}
