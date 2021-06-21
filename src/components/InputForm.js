import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import '../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} className="SignUpForm" noValidate autoComplete="off">
      <TextField   id="outlined-basic" label="Name" variant="outlined" /><br /><br />
      <TextField   id="outlined-basic" label="Email" variant="outlined" /><br /><br />
      <TextField   id="outlined-basic" label="Username" variant="outlined" /><br /><br />
      <TextField   id="outlined-basic" label="Password" variant="outlined" /><br /><br />
			<Button variant="contained" color="primary">Signup </Button>
    </form>
  );
}