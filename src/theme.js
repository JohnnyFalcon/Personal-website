import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(",")
  },
  palette: {
    myColor: {
      main: "#008b8b",
      contrastText: "#fff"
    },
    myColor2: {
      main: "red"
    }
  }
});
