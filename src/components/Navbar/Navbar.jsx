import React, { useEffect, useState } from "react";
import { Toolbar, useMediaQuery, Box } from "@mui/material";

import { ButtonStyled, ButtonStyledRev } from "./styles";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import Footer from "../Footer/Footer";
const Navbar = () => {
  const [choosen, setChoosen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  let location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setChoosen(true);
    } else {
      setChoosen(false);
    }
  }, [location]);
  return (
    <>
      {choosen && <div className="shape"></div>}
      <Toolbar
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: choosen ? "space-between" : "flex-end",
          mt: 2
        }}
        className="Toolbar"
      >
        {choosen && (
          <Box>
            <Link to="/" className="link">
              <ButtonStyled variant="outlined" display="flex" sx={{ ml: 14 }}>
                <span
                  style={{
                    color: "white",
                    letterSpacing: 2
                  }}
                >
                  Home
                </span>
              </ButtonStyled>
            </Link>
          </Box>
        )}
        <Box>
          <Link to="about-me" className="link">
            <ButtonStyled variant="outlined" display="flex">
              <span
                style={{
                  color: "white",
                  letterSpacing: 2
                }}
              >
                About me
              </span>
            </ButtonStyled>
          </Link>
          <Link to="projects" className="link">
            <ButtonStyled display="flex" variant="outlined">
              <span style={{ color: "white", letterSpacing: 2 }}>Projects</span>
            </ButtonStyled>
          </Link>
          <Link to="contact" className="link">
            <ButtonStyled display="flex" variant="outlined" sx={{ mr: 14 }}>
              <span style={{ color: "white", letterSpacing: 2 }}>Contact</span>
            </ButtonStyled>
          </Link>
        </Box>
      </Toolbar>

      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;
