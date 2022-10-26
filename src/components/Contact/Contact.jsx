import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import cv from "../../cv.pdf";
const Contact = () => {
  const isMobile = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          pt: "15%",
          pb: "9%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pl: isMobile && "5%",
          pr: isMobile && "3%"
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: ["Fuzzy Bubbles", "cursive"].join(","),
            fontSize: "2.5rem",
            mt: 8,
            mb: 3,
            textAlign: "center"
          }}
        >
          Get In <span style={{ color: "#871818" }}>Touch</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.5rem", mb: isMobile ? 7 : 3 }}
        >
          If you need beautiful website that people love and need ambitious
          employee for your company
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Go ahead and
        </Typography>

        <p>
          {" "}
          <a
            href="mailto:sokolowski8.kuba@gmail.com"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <p className="btn btn-git-bg" style={{ letterSpacing: 4 }}>
              CONTACT ME
            </p>
          </a>
        </p>
      </Box>
    </>
  );
};

export default Contact;
