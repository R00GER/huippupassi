import { makeStyles } from "@mui/styles";
import heroImage from "../assets/hero.jpg";
import MainImageCarousel from "../components/MainImageCarousel";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  layer: {
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(45deg, #ff9a9e66 0%, #fad0c466 99%, #fad0c466 100%)",
    position: "absolute",
    top: 0,
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <div className={classes.layer} /> */}
      <img className={classes.img} src={heroImage} alt="hero" />
      <MainImageCarousel />
    </div>
  );
};

export default Main;
