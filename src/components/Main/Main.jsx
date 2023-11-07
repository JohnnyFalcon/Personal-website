import { Box, Chip, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import myPhoto from "../../images/myPhoto.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./styles.css";
import { Link } from "react-router-dom";
import profilePhoto from "../../images/kuba.png";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "../../index";
import { Helmet } from "react-helmet";
import titles from "../../titles";
const Main = () => {
  const isMobile = useMediaQuery("(max-width:1000px)");
  useEffect(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "page_visted");
  }, []);
  return (
    <>
      <Helmet>
        <title>{titles.home}</title>
      </Helmet>
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
              className="title"
              sx={{
                color: "white",
                fontFamily: ["Fuzzy Bubbles", "cursive"].join(",")
              }}
            >
              Jakub Sokołowski
            </Typography>
            <Typography
              variant="h3"
              className="desc"
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
            top: isMobile ? "79%" : "72%",
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
              href="https://drive.google.com/file/d/1QKofdt_36HlKNG17fGWl_zy_qnThETzK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p className="btn btn-resume-bg btn-resume">resume</p>
            </a>
          </Box>
          <hr className="hrLine" />

          <Link
            to="projects"
            className="link-project"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0 });
            }}
          >
            <p className="btn btn-project  btn-project-bg">
              pro
              <span style={{ color: "black", paddingRight: "20px" }}>
                jects
              </span>
            </p>
          </Link>
        </Box>

        <Box
          display={isMobile ? "none" : "flex"}
          sx={{
            position: "absolute",
            top: "60%",
            left: "2%",
            width: "300px",
            "&:active": {
              transform: "translateY(-1px) scaleY(-1)"
            }
          }}
        >
          <img src={profilePhoto} className="profile-img" alt="background" />
        </Box>

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
      </Box>
    </>
  );
};

export default Main;
