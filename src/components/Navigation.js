import { makeStyles } from "@mui/styles";
import logo from "../assets/logo_og.jpg";
import NavigationLinks from "./NavigationLinks";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "10%",
    position: "fixed",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ffffff60",
  },
  img: {
    height: "50%",
  },
});

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.img} src={logo} alt="logo" />
      <NavigationLinks />
    </div>
  );
};

export default Navigation;
