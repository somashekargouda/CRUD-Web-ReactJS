import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import './employees.css';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '35ch',
      marginLeft: 460,

    },
  },
}));
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(event)
    {
      let stateName=event.target.name;
      this.setState({
        [stateName]:event.target.value
        
      });
    }
    handleSubmit(event) 
    {
      event.preventDefault();
      const users = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        phone: this.state.phone 
      }
      axios.post('http://localhost:4000/employees',users)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        this.setState({
          name: '',
          username:'',
          email:'',
          phone:''
        })

    }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container >
          <Typography >
            <h1 style={{ textAlign: 'center' }}>ADDING A NEW USER</h1>
            <form style={{width: '60ch', marginLeft: 460}} onSubmit={this.handleSubmit}>
              <TextField style={{width:345}} type="text" id="outlined-basic" label="Enter First Name" variant="outlined" name='name' onChange={this.handleChange} /><br></br><br></br>
              <TextField style={{width:345}} id="outlined-basic" type="text" label="Enter Last Name" variant="outlined" name='username' onChange={this.handleChange} /><br></br><br></br>
              <TextField style={{width:345}} id="outlined-basic" type="text" label="Enter Email" variant="outlined" name='email' onChange={this.handleChange} required/><br></br><br></br>
              <TextField  style={{width:345}} id="outlined-basic" type="text" label="Enter mobile number" variant="outlined" name='phone' onChange={this.handleChange} /><br></br><br></br>
              <Button style={{width:345}} type="submit" variant="contained" color="primary">Submit</Button>    
            </form>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}
export default AboutUs;
