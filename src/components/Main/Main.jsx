import { Box, Container, Typography, Divider } from "@mui/material";
import React from "react";
import myPhoto from "../../images/myPhoto.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./styles.css";
import { Link } from "react-router-dom";
import profilePhoto from "../../images/kuba.png";
import cv from "../../cv.pdf";
const Main = () => {
  return (
    <>
      <Box>
        <Box>
          <img src={myPhoto} className="background-image" alt="background" />
          <Box sx={{ position: "absolute", top: "10%", left: "2%" }}>
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontFamily: ["Fuzzy Bubbles", "cursive"].join(",")
              }}
            >
              Jakub Sokołowski
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "white"
              }}
            >
              Front-<span style={{ color: "#871818" }}>end</span> developer
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "72%",
            left: "65%",
            justifyContent: "center"
          }}
        >
          <a
            href="https://github.com/JohnnyFalcon"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <p className="btn btn-git-bg" style={{ paddingBottom: "12px" }}>
              <GitHubIcon sx={{ mr: 1, mb: "-7px" }} />
              Github
            </p>
          </a>
          <a
            href="https://drive.google.com/file/d/191INn2sR3sslmrXhP2T-Kyiq5mU9yo-N/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p
              className="btn btn-resume-bg btn-resume"
              style={{ paddingBottom: "12px" }}
            >
              resume
            </p>
          </a>

          <hr className="hrLine" />
        </Box>
        <Link to="about-me" className="link">
          <Box
            sx={{
              position: "absolute",
              top: "65%",
              left: "2%",
              width: "300px",
              "&:active": {
                transform: "translateY(-1px) scaleY(-1)"
              }
            }}
          >
            <img src={profilePhoto} className="profile-img" alt="background" />
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Main;
