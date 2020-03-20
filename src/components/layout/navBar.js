import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from '@material-ui/core/styles';
import me from './../../me.jpg'

import Home from "../pages/home";
import AboutMe from "../pages/aboutMe";
import Contact from "../pages/contact";
import Education from "../pages/education";
import Skills from "../pages/skills";
import WorkExperience from "../pages/workExperience";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
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
          <h1>Edward Boorn</h1>
          <h2>This is my Portfolio</h2>
          </div>
          <div className={classes.toolbar} />
          <List>
            <ListItem
              button
              component={Link}
              to="/home"
            >
              <ListItemText>Home</ListItemText>
            </ListItem>
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
              to="/contact"
            >
              <ListItemText>Contact</ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
        <Route exact path="/home" compoent={Home}/>
          <Route path="/aboutMe" component={AboutMe}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/education" component={Education}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/workExperience" component={WorkExperience}/>
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
