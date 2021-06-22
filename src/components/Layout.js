import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import "../App.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Layout({ className, children }) {
  const classes = useStyles();

  return (
    <div className={className} className={classes.root}>
      <Navbar />
      {children}
    </div>
  );
}