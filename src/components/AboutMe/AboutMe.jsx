import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../../images/kuba.png";
import reactIcon from "../../images/react-icon.png";
import jsIcon from "../../images/js-icon.png";
import cssIcon from "../../images/css-icon.png";
import "./styles.css";
import { TypographyStyled } from "../Navbar/styles";
import htmlIcon from "../../images/html-icon.png";
import nodeIcon from "../../images/node-icon.png";
import apiIcon from "../../images/api-icon.png";
import gitIcon from "../../images/git-icon.png";
const AboutMe = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: "13%",
          ml: 8
        }}
      >
        <Box
          sx={{
            width: "300px"
          }}
        >
          <img
            src={profilePhoto}
            className="profile-photo-am"
            alt="background"
          />
        </Box>
        <Box sx={{ width: "65%", ml: 4 }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: ["Fuzzy Bubbles", "cursive"].join(","),
              fontSize: "2rem",

              mb: 2
            }}
          >
            <span style={{ color: "#871818" }}>Hi</span>, my name is Jakub.{" "}
            <br />
            <span style={{ opacity: 0.8 }}>
              I am a front-end React developer.
            </span>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
            I have been programming for 3 years. I started learning from C++ and
            tried making games in the Unreal Engine. However, I have decided to
            leave it and got into web development what turned out to be a great
            idea. At the same time, I have become a IT student at the
            University, but after 2 years I have decided to take a one-year
            break because I was not acquiring the necessary skills to become a
            web developer. I have decided to learn it on my own. <br /> <br />
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
            For 2 years I worked really hard to master various skills and
            currently I have around a year of
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
              experience with complex&nbsp;
            </Typography>
            <Link to="/projects" className="link">
              <TypographyStyled variant="body2" className="link-projects">
                projects
              </TypographyStyled>
            </Link>
            <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
              &nbsp;with databases, APIs, and mobile responsiveness.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* My skills segment */}

      <Typography
        variant="body1"
        sx={{
          fontFamily: ["Fuzzy Bubbles", "cursive"].join(","),
          fontSize: "2rem",
          mt: 8,
          textAlign: "center"
        }}
      >
        My <span style={{ color: "#871818" }}>Skills</span>
      </Typography>

      <Box sx={{ mt: 7 }}>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            pl: "20%",
            pr: "20%"
          }}
        >
          <Box
            sx={{
              width: "80px",
              textAlign: "center"
            }}
          >
            <img src={reactIcon} className="icon" alt="react icon" />
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              REACT.JS
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80px",
              textAlign: "center"
            }}
          >
            <img src={jsIcon} className="icon" alt="javascript icon" />
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: "bold", ml: -1 }}
            >
              JAVASCRIPT
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80px",
              textAlign: "center"
            }}
          >
            <img src={cssIcon} className="icon" alt="css icon" />
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              CSS
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80px",
              textAlign: "center"
            }}
          >
            <img src={htmlIcon} className="icon" alt="html icon" />
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              HTML
            </Typography>
          </Box>
        </Box>

        {/* Second Row of my skills */}

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            pl: "30%",
            pr: "30%",
            mt: 10
          }}
        >
          <Box
            sx={{
              width: "80px",
              textAlign: "center"
            }}
          >
            <img src={nodeIcon} className="icon" alt="node icon" />
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              NODE.JS
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80px",
              textAlign: "center"
            }}
          >
            <img src={apiIcon} className="icon" alt="API icon" />
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              APIs
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80px",
              textAlign: "center"
            }}
          >
            <img src={gitIcon} className="icon" alt="Git icon" />
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              GIT
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80px",
              textAlign: "center",
              height: "145px"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="#007FFF"
              className="svg-icon"
              style={{ paddingTop: 20 }}
              viewBox="0 5 50 22"
            >
              <path
                fillRule="evenodd"
                d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
              ></path>
            </svg>

            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: "bold", ml: -1 }}
            >
              Material UI
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontFamily: ["Fuzzy Bubbles", "cursive"].join(","),
          fontSize: "2rem",
          mt: 15,
          textAlign: "center",
          mb: 10
        }}
      >
        <span style={{ color: "#871818" }}>ROAD</span>MAP
      </Typography>
      <Box>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              mr: 25,
              opacity: 0.8,
              ml: -10
            }}
          >
            TYPESCRIPT.JS
          </Typography>
          <Box sx={{ mt: 1 }}>
            <div className="arrowSliding">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
              <div className="arrow"></div>
            </div>
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              ml: 25,
              opacity: 0.8
            }}
          >
            THREE.JS
          </Typography>
        </Box>

        <hr className="hrLine2" />
      </Box>
    </>
  );
};

export default AboutMe;
