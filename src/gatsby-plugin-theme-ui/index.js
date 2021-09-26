const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    asd: "bold",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#EB92BE",
    secondary: "#FFEF78",
  },
  radii: ["4px", "8px", "16px"],

  styles: {
    body: {
      fontFamily: "body",
      backgroundColor: "red",
    },
    h1: {
      fontFamily: "heading",
    },
    h3: {
      fontFamily: "body",
    },
  },
  buttons: {
    default: {
      cursor: "pointer",
      boxShadow: "1px 1px 3.5px 0.01px black",
      minWidth: 80,
      transition: "0.2s",
      "&:active": {
        transform: "scale(0.9)",
      },
    },
    primary: {
      variant: "buttons.default",
      backgroundColor: "primary",
    },
  },
  text: {
    default: {
      fontFamily: "body",
    },
    primary: {
      fontFamily: "body",
      color: "primary",
      fontWeight: "500",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
  },
  div: {
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

export default theme;
