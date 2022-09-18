import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import EmoticonBackgroud from "../components/EmoticonContainer/EmoticonBackgroud";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";

function ProfilePage() {
  const onClickGithub = () => {
    window.open("https://github.com/yingstm124", "_blank");
    
  };

  const onClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/sutimar-pengpinij/", "_blank");
  };

  const onClickTelephone = () => {
    window.open("tel:+6618548171")
  };

  return (
    <Grid container>
      <EmoticonBackgroud />

      <Grid
        item
        container
        justifyContent="center"
        height="100vh"
        spacing={2}
        px={6}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="flex-end"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h4" color="white">
              Sutimar Pengpinij
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="white">
              Junior Software engineer 🌟 | Web Developer 💻
            </Typography>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center">
          <Grid item>
            <IconButton onClick={onClickGithub}>
              <GitHubIcon sx={{ color: "white" }}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={onClickLinkedin}>
              <LinkedInIcon sx={{ color: "white" }}/>
            </IconButton>
          </Grid>
          <Grid item>
            <Button
              startIcon={<CallIcon sx={{ color: "white" }} />}
              onClick={onClickTelephone}
            >
              <Typography variant="subtitle1" color="white">+66 18548171</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProfilePage;
