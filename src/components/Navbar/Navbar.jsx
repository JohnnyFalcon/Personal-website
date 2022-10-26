import React, { useEffect, useState } from "react";
import { Toolbar, useMediaQuery, Box, Popover } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ButtonStyled, ButtonStyledMobile } from "./styles";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import Footer from "../Footer/Footer";
const Navbar = () => {
  const [choosen, setChoosen] = useState(false);
  const isMobile = useMediaQuery("(max-width:1000px)");
  let location = useLocation();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    if (location.pathname !== "/") {
      setChoosen(true);
    } else {
      setChoosen(false);
    }
    setMobileMoreAnchorEl(null);
  }, [location]);
  return (
    <>
      {!isMobile && choosen && <div className="shape"></div>}
      <Toolbar
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: choosen && !isMobile ? "space-between" : "flex-end",
          mt: 2
        }}
        className="Toolbar"
      >
        {choosen && (
          <Box sx={{ display: !isMobile ? "flex" : "none" }}>
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
        <Box sx={{ display: !isMobile ? "flex" : "none" }}>
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

        {/* -------------------------------- Mobile view -----------------------------  */}

        <Box
          sx={{
            display: isMobile ? "flex" : "none",
            pr: 2,
            justifyContent: "flex-end"
          }}
        >
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
          >
            <Box
              sx={{
                backgroundColor: "rgb(135, 24, 24)",
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                p: 1,
                zIndex: 10
              }}
            >
              <MoreIcon sx={{ color: "white" }} />
            </Box>
          </IconButton>
          <Popover
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            PaperProps={{
              sx: {
                display: "flex",
                position: "fixed",
                flexDirection: "column",
                backgroundColor: "black",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "300px",
                borderRadius: "12px",
                p: 3
              }
            }}
          >
            <Link to="/" className="link">
              <ButtonStyledMobile variant="outlined" display="flex">
                <span
                  style={{
                    color: "white",
                    letterSpacing: 2
                  }}
                >
                  Home
                </span>
              </ButtonStyledMobile>
            </Link>

            <Link to="about-me" className="link">
              <ButtonStyledMobile variant="outlined" display="flex">
                <span
                  style={{
                    color: "white",
                    letterSpacing: 2
                  }}
                >
                  About me
                </span>
              </ButtonStyledMobile>
            </Link>

            <Link to="projects" className="link">
              <ButtonStyledMobile display="flex" variant="outlined">
                <span style={{ color: "white", letterSpacing: 2 }}>
                  Projects
                </span>
              </ButtonStyledMobile>
            </Link>

            <Link to="contact" className="link">
              <ButtonStyledMobile display="flex" variant="outlined">
                <span style={{ color: "white", letterSpacing: 2 }}>
                  Contact
                </span>
              </ButtonStyledMobile>
            </Link>
          </Popover>
        </Box>
      </Toolbar>

      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;
