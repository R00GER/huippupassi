import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { texts } from "../texts";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "33.3%",
    minHeight: "200px",
    marginBottom: "1rem",
  },
  iconContainer: {
    width: "150px",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    // backgroundColor: color,
    border: "2px solid var(--color-medium-orange)",
    marginBottom: "1rem",
  },
  textContainer: {
    textAlign: "center",
  },
  label: {
    marginBottom: "0.4rem",
  },
  body: {
    padding: "0 1rem",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1.5rem",
  },
  button: {
    "&:hover": {
      backgroundColor: "var(--color-dark-orange) !important",
      border: "2px solid var(--color-dark-orange) !important",
    },
  },
});

const ServiceCard = ({ label, body, icon, iconProps }) => {
  const [hover, setHover] = useState(false);
  const iconComponent = React.cloneElement(icon, { ...iconProps });

  const classes = useStyles();

  return (
    <div
      className={classes.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={classes.iconContainer}>{iconComponent}</div>
      <div className={classes.textContainer}>
        <div className={classes.label}>
          <Typography variant="h2">{label}</Typography>
        </div>
        <div className={classes.body}>
          <Typography variant="body2">{body}</Typography>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          style={{
            color: "#f2f2f2",
            border: "2px solid #f2f2f2",
            padding: "7px 2rem",
            opacity: hover ? "1" : "0",
            transition: "opacity 0.3s",
          }}
          size="large"
          variant="outlined"
        >
          {texts.services.action}
        </Button>
      </div>
    </div>
  );
};
export default ServiceCard;
