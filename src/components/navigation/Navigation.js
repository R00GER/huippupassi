import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CgMenu } from "react-icons/cg";
import logo from "../../assets/logo_nav4.png";
import NavigationLinks from "./NavigationLinks";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "10vh",
    position: "fixed",
    top: 0,
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "flex-start",
      paddingLeft: "0.5rem",
    },
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
    paddingRight: "1.5rem",
  },
  img: {
    paddingLeft: "1.5rem",
    height: "50%",
    cursor: "pointer",
  },
  divider: {
    width: "90%",
    height: "1px",
    backgroundColor: "darkgray",
  },
}));

const Navigation = ({
  scrollToView,
  showNavigationLinks,
  setShowNavigationLinks,
  setShowMenubar,
}) => {
  const classes = useStyles();

  const md = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <div className={classes.container}>
      {md && (
        <CgMenu
          style={{ fontSize: "2rem", color: "#fff", cursor: "pointer" }}
          onClick={() => setShowMenubar(true)}
        />
      )}
      <img
        className={classes.img}
        src={logo}
        alt="logo"
        onClick={() => scrollToView("heroRef")}
      />

      <NavigationLinks
        showNavigationLinks={showNavigationLinks}
        setShowNavigationLinks={setShowNavigationLinks}
        breakpoint={md}
      />
    </div>
  );
};

export default Navigation;
