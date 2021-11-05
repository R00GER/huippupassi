import React, { forwardRef } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import heroImage from "../assets/heroNoText.jpg";

const useStyles = makeStyles({
  container: {
    height: "100%",
    position: "relative",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${heroImage})`,
    display: "flex",
    justifyContent: "center",
  },
  layer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
  },
  heroTextContainer: {
    position: "relative",
    width: "75%",
    padding: "3rem 2rem 3rem 3rem",
    marginRight: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heroTextBody: {
    marginTop: "1rem",
    paddingRight: "1.8rem",
  },
  heroTextBottom: {
    width: "100%",
    textAlign: "center",
    marginTop: "2rem",
  },
});

const Hero = forwardRef(({ scrollToView }, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.layer} />
      <div className={classes.heroTextContainer}>
        <div className={classes.heroTextHeader}>
          <Typography variant="h1" style={{ fontSize: "5rem" }}>
            ASIAKASTAPAAMISIA KAIKILLE TOIMIALOILLE
          </Typography>
        </div>
        <div className={classes.heroTextBody}>
          <Typography variant="body1" style={{ fontSize: "1.4rem" }}>
            Olipa yrityksesi tarve asiakastapaamisten buukkauksen suhteen mikä
            hyvänsä, löydämme joustavat ratkaisut kaiken kokoisten yritysten
            tarpeisiin. Jokainen puhelu potentiaaliselle asiakkaalle on uniikki
            keskustelu - emme tukehduta asiakasta valmiisiin spiikkeihin.
            Tulokset puhuvat puolestaan - buukkaamme vain tuottavia käyntejä.
          </Typography>
        </div>
        <div className={classes.heroTextBottom}>
          <Button
            onClick={() => scrollToView("servicesRef")}
            size="large"
            style={{
              marginRight: "1rem",
              padding: "10px 22px",
            }}
            variant="outlined"
          >
            <Typography>Palvelumme</Typography>
          </Button>
          <Button
            onClick={() => scrollToView("contactRef")}
            size="large"
            style={{
              backgroundColor: "#ec962c",
              padding: "10px 22px",
            }}
            variant="contained"
          >
            <Typography>Ota yhteyttä</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Hero;
