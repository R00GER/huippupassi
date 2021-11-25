import React, { forwardRef } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import heroImage from "../assets/heroNoText.jpg";
import ImageLayer from "../components/ImageLayer";
import { texts } from "../texts";

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      padding: "3rem 1rem 3rem 1rem",
      marginRight: "0rem",
    },
    width: "75%",
    position: "relative",
    padding: "3rem 2rem 3rem 3rem",
    marginRight: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  root: {
    fontSize: "3rem",
    color: "red",
  },
  heroTextBody: {
    [theme.breakpoints.only("xs")]: {
      marginTop: "1rem",
      paddingRight: "0.5rem",
    },
    marginTop: "1rem",
    paddingRight: "1.8rem",
  },
  heroTextBottom: {
    [theme.breakpoints.only("xs")]: {
      marginTop: "1rem",
      paddingRight: "0.5rem",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    width: "100%",
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {},
}));

const Hero = forwardRef(({ scrollToView }, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.container}>
      <ImageLayer />
      <div className={classes.heroTextContainer}>
        <div className={classes.heroTextHeader}>
          <Typography variant="h1" className={classes.root}>
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
              padding: "10px 22px",
              width: "165px",
              marginRight: "1rem",
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
              width: "165px",
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
