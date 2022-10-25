import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const [choosen, setChoosen] = useState(false);
  const [contact, setContact] = useState(false);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setChoosen(true);
    } else {
      setChoosen(false);
    }

    location.pathname === "contact" && setContact(true);
  }, [location]);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          textAlign: "center",
          p: 2,
          mt: choosen ? 15 : -1
        }}
      >
        <a
          href="https://github.com/JohnnyFalcon"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "white",
              "&:hover": {
                color: "rgb(134, 255, 251)"
              }
            }}
          >
            Designed & Built by Jakub Sokołowski
          </Typography>
        </a>
        <span style={{ color: "#871818", fontSize: "0.9rem" }}>
          Thanks for icons&nbsp;
        </span>
        <a
          href="https://www.flaticon.com"
          title="icons"
          style={{ color: "#871818", fontSize: "0.9rem" }}
        >
          Freepik - Flaticon
        </a>
        <span>&nbsp;&nbsp;</span>
        <a
          style={{ color: "#871818", fontSize: "0.9rem" }}
          href="https://www.flaticon.com/free-icons/git"
          title="git icons"
        >
          smalllikeart - Flaticon
        </a>
        <span>&nbsp;&nbsp;</span>
        <a
          style={{ color: "#871818", fontSize: "0.9rem" }}
          href="https://www.flaticon.com/free-icons/api"
          title="api icons"
        >
          surang - Flaticon
        </a>
        <span>&nbsp;&nbsp;</span>
        <a
          style={{ color: "#871818", fontSize: "0.9rem" }}
          href="https://www.flaticon.com/free-icons/html"
          title="html icons"
        >
          Flat Icons - Flaticon
        </a>
      </Box>
    </>
  );
};

export default Footer;
