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
          pt: 2.5,
          mt: choosen ? 15 : -1
        }}
      >
        <a
          href="https://github.com/JohnnyFalcon/Personal-website"
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
      </Box>
    </>
  );
};

export default Footer;
