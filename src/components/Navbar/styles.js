import { FormControl, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonStyled = styled(Button)({
  borderColor: "white",
  marginRight: 50,
  "&:hover": {
    color: "white",
    borderColor: "black"
  },

  "&:active": {
    transform: "translateY(-1px)"
  }
});
const ButtonStyledMobile = styled(Button)({
  borderColor: "white",

  "&:hover": {
    color: "white",
    borderColor: "black"
  },

  "&:active": {
    transform: "translateY(-1px)"
  }
});
const ButtonStyledRev = styled(Button)({
  borderColor: "black",
  marginRight: 50,
  "&:hover": {
    color: "black",
    borderColor: "white"
  },

  "&:active": {
    transform: "translateY(-1px)"
  }
});
const TypographyStyled = styled(Typography)({
  color: "#871818",
  fontSize: "1.5rem",

  "&:hover": {
    transform: "translateY(-2px)"
  },
  borderBottomWidth: "1px",
  borderBottomColor: "#871818",
  paddingBottom: "1px",
  borderBottomStyle: "solid"
});

export { ButtonStyled, ButtonStyledRev, TypographyStyled, ButtonStyledMobile };
