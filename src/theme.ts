import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Ensures dark mode behavior
    primary: {
      main: "#C65829", // Your primary color
    },
    secondary: {
      main: "#050401", // Your secondary color
    },
    background: {
      default: "#303036", // Example dark mode background
      paper: "#FFFAFF",
    },
    text: {
      primary: "#050401",
      secondary: "#FFFAFF",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
