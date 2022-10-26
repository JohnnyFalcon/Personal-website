import { Box, Chip, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import myPhoto from "../../images/myPhoto.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./styles.css";
import { Link } from "react-router-dom";
import profilePhoto from "../../images/kuba.png";

const Main = () => {
  const isMobile = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <Box>
        <Box display={isMobile ? "none" : "flex"}>
          <img src={myPhoto} className="background-image" alt="background" />
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "2%"
            }}
          >
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

        {/* ------------------ Mobile version ----------------------- */}

        <Box display={isMobile ? "flex" : "none"}>
          <img src={myPhoto} className="background-image" alt="background" />
          <Box
            sx={{
              position: "absolute",
              top: "22%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontFamily: ["Fuzzy Bubbles", "cursive"].join(","),
                fontSize: "3.5rem",
                mb: 2
              }}
            >
              Jakub Sokołowski
            </Typography>
            <Chip
              sx={{ backgroundColor: "black", p: 3, pt: 2.5 }}
              label={
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontSize: "1.5rem"
                  }}
                >
                  Front-<span style={{ color: "#871818" }}>end</span> developer
                </Typography>
              }
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: isMobile ? "83%" : "72%",
            left: isMobile ? "50%" : "65%",
            justifyContent: "center",
            transform: isMobile && "translate(-50%, -50%)"
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <a
              href="https://github.com/JohnnyFalcon"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p
                className="btn btn-git-bg"
                style={{
                  paddingBottom: "12px",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
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
          </Box>

          <hr className="hrLine" />
        </Box>
        <Link to="about-me" className="link">
          <Box
            display={isMobile ? "none" : "flex"}
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
        <Link to="about-me" className="link">
          <Box
            display={isMobile ? "flex" : "none"}
            sx={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200px",
              "&:active": {
                transform: "translateY(-1px) scaleY(-1)"
              }
            }}
          >
            <img
              src={profilePhoto}
              className="profile-img"
              alt="background"
              style={{ opacity: 1 }}
            />
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Main;
