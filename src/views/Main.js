import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import heroImage from "../assets/heroNoText.jpg";
import MainImageCarousel from "../components/MainImageCarousel";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    // marginBottom: "2rem",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "right top",
  },
  layer: {
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(45deg, #ff9a9e40 0%, #00000066 99%, #00000066 100%)",
    position: "absolute",
    top: 0,
  },
  heroTextContainer: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    width: "50%",
    padding: "3rem 2rem 3rem 3rem",
    marginRight: "2rem",
    // textAlign: "justify",
    background: "rgba(0, 0, 0, 0.03)",
    borderRadius: "4px",
    // textOverflow: "auto",
  },
  heroTextBody: {
    marginTop: "1rem",
  },
  heroTextBottom: {
    width: "100%",
    textAlign: "center",
    marginTop: "2rem",
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.layer} />
      <img className={classes.img} src={heroImage} alt="hero" />
      <div className={classes.heroTextContainer}>
        <div className={classes.heroTextHeader}>
          <Typography variant="h1" style={{ fontSize: "4rem" }}>
            ASIAKASTAPAAMISIA KAIKILLE TOIMIALOILLE
          </Typography>
        </div>
        <div className={classes.heroTextBody}>
          <Typography style={{ fontSize: "1.4rem" }}>
            Olipa yrityksesi tarve asiakastapaamisten buukkauksen suhteen mikä
            hyvänsä, löydämme joustavat ratkaisut niin pienten kuin suurtenkin
            yritysten tarpeisiin. Jokainen puhelu potentiaaliselle asiakkaalle
            on uniikki keskustelu - emme tukehduta asiakasta valmiisiin
            spiikkeihin. Tulokset puhuvat puolestaan - buukkaamme vain tuottavia
            käyntejä.
          </Typography>
        </div>
        <div className={classes.heroTextBottom}>
          <Button
            size="large"
            style={{ backgroundColor: "#ec962c" }}
            variant="contained"
          >
            Ota yhteyttä
          </Button>
        </div>
      </div>
      {/* <MainImageCarousel /> */}
    </div>
  );
};

export default Main;
