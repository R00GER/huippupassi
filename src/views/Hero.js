import React, { forwardRef } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import heroImage from "../assets/heroNoText.jpg";
import ImageLayer from "../components/ImageLayer";
import { texts } from "../texts";

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
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
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
      <ImageLayer />
      <div className={classes.heroTextContainer}>
        <div className={classes.heroTextHeader}>
          <Typography variant="h1" style={{ fontSize: "5rem" }}>
            {texts.hero.header}
          </Typography>
        </div>
        <div className={classes.heroTextBody}>
          <Typography variant="body1" style={{ fontSize: "1.4rem" }}>
            {texts.hero.body}
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
            <Typography>{texts.hero.actionSecondary}</Typography>
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
            <Typography>{texts.hero.actionPrimary}</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Hero;
