import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
