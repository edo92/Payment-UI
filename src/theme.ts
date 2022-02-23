import { createGlobalStyle } from "styled-components";

/**
 *
 * Colors
 *
 */
const highlight = "#d9d9d9";
const highlight1 = "#40a9ff";
const highlight2 = "rgba(24, 144, 255, 0.2)";

const dark = "#000000";
const dark1 = "#000000d9";
// const dark2 = "#000000d4";
const dark3 = "rgba(114, 114, 114, 0.9);";

const primary = "#1890ff";
// const primary1 = "#40a9ff";
// const primary2 = "#e6f7ff";

const light = "#fff";
// const white = "#ffff";
const error = "#ff4d4f";
const success = "rgb(82, 196, 26)";

/**
 *
 * Theme
 */
const themeColors = {
  border: {
    highlight: highlight,
    primary: highlight1,
    error,
  },

  shadow: {
    primary: highlight2,
  },

  text: {
    innerDark: dark1,
  },
};

/**
 *
 * Base
 */
const baseColors = {
  primary,
  light,
  error,
  success,
  dark,
  dark3,
};

/**
 *
 * Config
 */
export interface ThemeProps {
  baseColors: typeof baseColors;
  border: typeof themeColors.border;
  shadow: typeof themeColors.shadow;
  text: typeof themeColors.text;
}

export const themeStyle: ThemeProps = Object.assign(
  {},
  { baseColors, ...themeColors }
);

/**
 *
 * Global Style
 */
export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  }

  body {
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
