import { Typography, Box, Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { projects } from "./projectsData";
import { useEffect } from "react";
const Projects = () => {
  const [hover, setHover] = useState(null);
  const [today, setToday] = useState(0);
  const isMobile = useMediaQuery("(max-width:1000px)");

  useEffect(() => {
    const today = new Date();
    setToday(today);
  }, []);

  const handleTime = (date) => {
    const timePass = Math.abs(today - new Date(date));
    const formatTime = Math.ceil(timePass / (1000 * 60 * 60 * 24));
    return formatTime;
  };

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontFamily: ["Fuzzy Bubbles", "cursive"].join(","),
          fontSize: "2rem",
          pt: isMobile ? "20%" : "5%",
          pb: 5,
          textAlign: "center"
        }}
      >
        Some <span style={{ color: "#871818" }}>Things</span> I've Built
      </Typography>

      <Grid
        container
        rowSpacing={11}
        columnSpacing={17}
        direction="row"
        justifyContent="space-around"
        sx={{ pl: "10%", pr: "8%" }}
      >
        {projects
          .slice(0)
          .reverse()
          .map((project) => (
            <Grid item key={project.id} lg={6} md={12} sm={12} xs={12}>
              <div
                className="website-photo-div"
                value={"clothing"}
                onMouseEnter={() => setHover(project.id)}
                onMouseLeave={() => setHover(null)}
              >
                <img
                  src={project.image}
                  className="website-photo"
                  alt={`${project.title}`}
                />
                {(hover === project.id || isMobile) && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row"
                    }}
                  >
                    <a
                      href={`${project.githubLink}`}
                      target="_blank"
                      rel="noreferrer"
                      value={"clothing"}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        className="first-side"
                        sx={{ "&:hover": { backgroundColor: project.color } }}
                      >
                        <GitHubIcon
                          sx={{
                            color: "black",
                            fontSize: "3rem"
                          }}
                        />
                        <div className="side-option">
                          <span
                            style={{
                              color: "black",
                              letterSpacing: 2,
                              fontWeight: "bold"
                            }}
                          >
                            GITHUB
                          </span>
                        </div>
                      </Box>
                    </a>
                    <a
                      href={`${project.websiteLink}`}
                      target="_blank"
                      rel="noreferrer"
                      value={"clothing"}
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        className="second-side"
                        sx={{ "&:hover": { backgroundColor: project.color } }}
                      >
                        <LanguageIcon
                          sx={{ color: "black", fontSize: "3rem" }}
                        />
                        <div className="side-option">
                          <span
                            style={{
                              color: "black",
                              letterSpacing: 2,
                              fontWeight: "bold"
                            }}
                          >
                            WEBSITE
                          </span>
                        </div>
                      </Box>
                    </a>
                  </div>
                )}
                {project.new && (
                  <div className="new-badge-container">
                    <div className="new-badge">
                      <span className="new-badge-text">{project.update}</span>
                    </div>
                    <div className="new-badge">
                      <span>{handleTime(project.date)}d ago</span>
                    </div>
                  </div>
                )}
              </div>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Projects;
