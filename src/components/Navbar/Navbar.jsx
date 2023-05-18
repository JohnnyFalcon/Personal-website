import React, { useEffect, useState } from "react";
import { Toolbar, useMediaQuery, Box } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import Footer from "../Footer/Footer";
const Navbar = () => {
  const [choosen, setChoosen] = useState(false);
  const isMobile = useMediaQuery("(max-width:1000px)");
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
      <Toolbar
        sx={{
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          mt: 2
        }}
        className="Toolbar"
      >
        {choosen && (
          <Box sx={{ display: "flex" }}>
            <Link to="/" className="link">
              <HomeIcon
                className="home-icon"
                sx={{ color: "black", fontSize: "2rem" }}
              />
            </Link>
          </Box>
        )}
      </Toolbar>

      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;
