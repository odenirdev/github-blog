import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/defaultTheme";

import { Routes } from "./routes";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Routes />
    </ThemeProvider>
  );
};
