import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
function News() {
  const classes = useStyles();
  return (
    <div className="News" className={classes.root}>
      <Navbar />
    </div>
  );
}

export default News;
