import { createGlobalStyle, ThemeProvider } from "styled-components";

import Wrapper from "./components/Wrapper";
import LoadFonts from "./utils/LoadFonts";
import ThemeContext from "./context/ThemeContext";

import font from "./utils/typography";
import useTheme from "./utils/useTheme";

function App() {
  const { theme, setThemeName, getThemeName } = useTheme();
  const contextValue = {
    setThemeName,
    getThemeName,
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        <LoadFonts />
        <CSSReset />
        <CSSDefaultTypography />
        <Wrapper />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

const CSSReset = createGlobalStyle`
  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    /* line-height: 1.5; */
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;

const CSSDefaultTypography = createGlobalStyle`
  :root {
    font-family: ${font.family};
    font-size: ${font.size};
    font-weight: ${font.weight};
  }
`;

export default App;
