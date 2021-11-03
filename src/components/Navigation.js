import { makeStyles } from "@mui/styles";
import logo from "../assets/logo_nav.png";
import NavigationLinks from "./NavigationLinks";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "10vh",
    position: "fixed",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // background: "rgba(0, 0, 0, 0.03)",
    zIndex: 1,
  },
  img: {
    paddingLeft: "1.5rem",
    height: "50%",
  },
});

const Navigation = ({ showNavigationLinks, setShowNavigationLinks }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.img} src={logo} alt="logo" />
      <NavigationLinks
        showNavigationLinks={showNavigationLinks}
        setShowNavigationLinks={setShowNavigationLinks}
      />
    </div>
  );
};

export default Navigation;
