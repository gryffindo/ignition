import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Hero from "../components/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className="Home" className={classes.root}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
