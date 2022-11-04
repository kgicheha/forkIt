import React from 'react';
import { Typography, Tooltip, Button, ButtonGroup } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ScrollButton from './ScrollButton';


function LandingPage() {

  function visitProjectGithub() {
    window.open('https://github.com/kgicheha/forkIt');
  }

  function visitLauraLinkedin() {
    window.open('https://www.linkedin.com/in/lauragonzalez0319/');
  }

  function visitLauraGithub() {
    window.open('https://github.com/lauragonzalez0319');
  }

  function visitLauraMedium() {
    window.open('https://medium.com/@lauragonzalez0319');
  }
  function visitKevinLinkedin() {
    window.open('https://www.linkedin.com/in/kevin-gicheha/');
  }

  function visitKevinGithub() {
    window.open('https://github.com/kgicheha');
  }

  function visitKevinMedium() {
    window.open('https://medium.com/@gichehakevin');
  }


  return (
    <div id="landingPageDiv">
      <video id="landing-page-video" loop muted autoPlay src="/landingPage.mp4" type="video/mp4" />
      <Typography variant="h4" align= "center" sx={{backgroundColor: "#f45d48", marginLeft: 20, marginRight: 20, marginBottom: 5}}>
           About The App
      </Typography>
      <div id="about-app">
        <Card sx={{ maxWidth: 1100 }}>
            <CardMedia
              component="img"
              image="/react-rails-heroku.jpeg"
              height="200"
              alt="React + Ruby on Rails + Heroku"
            />
            <CardContent align="center">
            <Typography variant="body1" color="text.secondary">
              Check it out our open source project below! <br/>
              Specs: <br/>
              Frontend- React (Javascript), Backend- Ruby on Rails (Postgres), Deployment- Heroku
            </Typography>
            </CardContent>
            <CardActions id="center">
              <Tooltip title="Fork It Github Repo">
                <Button onClick={visitProjectGithub}>
                  <GitHubIcon sx={{fontSize: 40, color: "black"}}/>
                </Button>
              </Tooltip>
            </CardActions>
          </Card>
      </div>
      <Typography variant="h4" align= "center" sx={{backgroundColor: "#f45d48", marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>
        The Developers
      </Typography>
      <div id="laura-info">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image="/laura.jpeg"
            height="360"
            width="300"
            alt="Laura Gonzalez Headshot"
          />
          <CardContent>
          <Typography variant="h5" align= "center">
            Laura Gonzalez
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            I'm a software engineer who values diversity, impact, innovation, and creative freedom in problem solving spaces.
          </Typography>
          </CardContent>
          <CardActions id="center">
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Tooltip title="Personal Github">
                <Button onClick={visitLauraGithub}>
                  <GitHubIcon sx={{fontSize: 30, color: "black"}}/>
                </Button>
              </Tooltip>
              <Tooltip title="Linkedin Profile">
                <Button onClick={visitLauraLinkedin}>
                  <LinkedInIcon sx={{fontSize: 30}}/>
                </Button>
              </Tooltip>
              <Tooltip title="Medium Blog">
                <Button onClick={visitLauraMedium}>
                  <MenuBookIcon sx={{fontSize: 30, color: "black"}}/>
                </Button>
              </Tooltip>
            </ButtonGroup>
          </CardActions>
        </Card>
      </div>
      <div id="kevin-info">
      <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
        <CardMedia
          component="img"
          image="/kevin.jpeg"
          height="360"
          width="300"
          alt="Kevin Gicheha Headshot"
        />
        <CardContent>
          <Typography variant="h5" align= "center">
            Kevin Gicheha
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            I'm a finance professional turned Software Engineer with a passion for building a better lifestyle through real-world applications.
          </Typography>
        </CardContent>
        <CardActions id="center">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Tooltip title="Personal Github">
              <Button onClick={visitKevinGithub}>
                <GitHubIcon sx={{fontSize: 30, color: "black"}}/>
              </Button>
            </Tooltip>
            <Tooltip title="Linkedin Profile">
              <Button onClick={visitKevinLinkedin}>
                <LinkedInIcon sx={{fontSize: 30}}/>
              </Button>
            </Tooltip>
            <Tooltip title="Medium Blog">
              <Button onClick={visitKevinMedium}>
                <MenuBookIcon sx={{fontSize: 30, color: "black"}}/>
              </Button>
            </Tooltip>
          </ButtonGroup>
        </CardActions>
      </Card>
      <ScrollButton />
      </div>
    </div>
  )
}

export default LandingPage