import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ViewEmployees from './viewemployees';
import AboutUs from './aboutus';
import Home from './home';
import NewUsers from './newusers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow:0.03,
    color:'white',
    textDecoration:'none'
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <Button variant="h6" className={classes.title }>
          <Link to="/" className={classes.title}>Home</Link>
          </Button>
          
          <Button variant="h6" className={classes.title}>
          <Link to="/viewemployees"  className={classes.title}>Employees</Link>
          </Button>
          
          <Button variant="h6" className={classes.title}>
          <Link to="/aboutus"  className={classes.title}>Add New User</Link>
          </Button>
          
          </Toolbar>
      </AppBar>

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/viewemployees">
            <ViewEmployees />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
            </Route>
            
        </Switch>

    </div>
    </Router>
  );
}


