import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function NewUsers()
{
    // const classes = useStyles();

    return(
    <form >
      <TextField id="outlined-basic" label="Enter Name" variant="outlined" />
      <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
    </form>
    );
}