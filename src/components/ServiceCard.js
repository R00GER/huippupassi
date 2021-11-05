import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    "&:hover": {
      backgroundColor: "var(--color-dark-orange) !important",
      border: "2px solid var(--color-dark-orange) !important",
    },
  },
});

const ServiceCard = ({ label, icon, iconProps }) => {
  const [hover, setHover] = useState(false);
  const iconComponent = React.cloneElement(icon, { ...iconProps });

  const classes = useStyles();

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "33.3%",
        minHeight: "200px",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          // backgroundColor: color,
          border: "2px solid var(--color-medium-orange)",
          marginBottom: "1rem",
        }}
      >
        {iconComponent}
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "0.4rem" }}>
          <Typography variant="h2">{label}</Typography>
        </div>
        <div style={{ padding: "0 1rem" }}>
          <Typography variant="body2">
            Matkailu- tai asuntoauto on vastaus tarpeisiisi, mikäli haaveilet
            lomasta, jolla aikataulut tai yöpaikkojen varaaminen eivät sido
            sinua. Upouusi Adria Matrix automme tarjoaa vapauden lisäksi myös
            korkeatasoiset puitteet matkailuautoilulle.
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
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
          Lue lisää
        </Button>
      </div>
    </div>
  );
};
export default ServiceCard;
