import { makeStyles } from "@mui/styles";
import logo from "../assets/logo_nav4.png";
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
    zIndex: 1,
  },
  img: {
    paddingLeft: "1.5rem",
    height: "50%",
  },
  divider: {
    width: "90%",
    height: "1px",
    backgroundColor: "darkgray",
  },
});

const Navigation = ({ showNavigationLinks, setShowNavigationLinks }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <img className={classes.img} src={logo} alt="logo" />
        <NavigationLinks
          showNavigationLinks={showNavigationLinks}
          setShowNavigationLinks={setShowNavigationLinks}
        />
      </div>
    </>
  );
};

export default Navigation;
