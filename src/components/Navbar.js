import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	 menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#607d8b",
    padding: "0 100px",
  },
  heading: {
    color: "rgba(0, 0, 0, 0.87)",
  },
}))

function Navbar () {
	const classes = useStyles()
	return (
		<AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ignition
          </Typography>
          <Button><Link className="nav-links" to="/" color="inherit">Home</Link></Button>
          <Button><Link className="nav-links" color="primary" to="/blog">Blog</Link></Button>
          <Button><Link className="nav-links" color="primary" to="/news">Newsfeed</Link></Button>
          <Button><Link  className="nav-links"to="/signup" color="primary">Signup</Link></Button>
          <Button><Link className="nav-links" to="/login" color="primary">Login</Link></Button>
        </Toolbar>
      </AppBar>
	)
}

export default Navbar