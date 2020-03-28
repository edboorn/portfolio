import React from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import me from './../../me.jpg'

import AboutMe from "../pages/aboutMe";
import Contact from "../pages/contact";
import Education from "../pages/education";
import Skills from "../pages/skills";
import WorkExperience from "../pages/workExperience";
import PersonalProjects from "../pages/personalProjects";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    maxWidth : drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  aboutContent : {
    paddingLeft : '40%',
  }
}));

const Navigation = withStyles(useStyles) (
    ({classes}) => (
        <Router history={history}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className="personalIntro">
            <img alt="This is me " src={me} className="navImageStyle"/>
            <Divider variant="middle"/>
          <h1>Edward Boorn</h1>
          <h2 className={classes.aboutContent} style={{padding:"5%"}} > Product // Tech // Space </h2>
          <Divider variant="middle"/>
          </div>
          <div className={classes.toolbar} />
          <List>
            {/* <ListItem
              button
              component={Link}
              to="/home"
            >
              <ListItemText>Home</ListItemText>
            </ListItem> */}
            <ListItem
              button
              component={Link}
              to="/aboutMe"
            >
              <ListItemText>About Me</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/workExperience"
            >
              <ListItemText>Job History</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/education"
            >
              <ListItemText>Education</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/skills"
            >
              <ListItemText>Skills</ListItemText>
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/personalProjects"
            >
              <ListItemText>Personal Projects</ListItemText>
            </ListItem>
            {/* <ListItem
              button
              component={Link}
              to="/contact"
            >
              <ListItemText>Contact</ListItemText>
            </ListItem> */}
          </List>
        </Drawer>
        <main className={classes.content}>
          <Route exact path="/portfolio/" >{
            <Redirect to="/aboutMe"/>
          }</Route>
          <Route path="/aboutMe" component={AboutMe}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/education" component={Education}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/workExperience" component={WorkExperience}/>
          <Route path="/personalProjects" component={PersonalProjects}/>
        </main>
        </Router>
    )
)

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation/>
    </div>
  );
}
