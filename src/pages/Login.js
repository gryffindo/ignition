import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from '../components/LoginInput'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function Signup() {
  const classes = useStyles();
  return (
    <div className="Signup" className={classes.root}>
      <Navbar />
			<LoginForm />
    </div>
  );
}

export default Signup;
