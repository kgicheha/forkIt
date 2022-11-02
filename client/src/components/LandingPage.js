import React from 'react';
import { Typography, Tooltip, Button, ButtonGroup } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';


function LandingPage() {

  function visitProjectGithub() {
    window.open('https://github.com/lauragonzalez0319/flomind');
  }

  function visitLinkedin() {
    window.open('https://www.linkedin.com/in/lauragonzalez0319/');
  }

  function visitMyGithub() {
    window.open('https://github.com/lauragonzalez0319');
  }

  function visitMedium() {
    window.open('https://medium.com/@lauragonzalez0319');
  }

  return (
    <div>
      <video id="landing-page-video" loop muted autoPlay src="/landingPage.mp4" type="video/mp4" />
      <Typography variant="h4" align= "center">
        Checkout our open-sourced React + Ruby on Rails Project
      </Typography>
      <Tooltip title="fork it github repo">
        <Button id="center">
          <GitHubIcon sx={{fontSize: 40, color: "black"}}/>
        </Button>
      </Tooltip>
      <Typography variant="h4" align= "center">
        The Developers
      </Typography>
      <Typography variant="h5" align= "center">
        Laura Gonzalez
      </Typography>
      <Typography variant="h5" align= "center">
        Kevin Gicheha
      </Typography>
      <div id="button-group">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Tooltip>
            <Button >
              <GitHubIcon />
            </Button>
          </Tooltip>
          <Tooltip>
            <Button>
              <LinkedInIcon />
            </Button>
          </Tooltip>
          <Tooltip>
            <Button>
              <MenuBookIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default LandingPage