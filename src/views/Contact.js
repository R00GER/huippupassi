import { forwardRef } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import contactUs from "../assets/contactUs.jpg";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ImageLayer from "../components/ImageLayer";
import { texts } from "../texts";

const useStyles = makeStyles({
  container: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${contactUs})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  box: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "rgba(255,255,255,0.7)",
    zIndex: 2,
    borderRadius: 8,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  boxInnerContainer: {
    display: "flex",
  },
});

const Contact = forwardRef((_, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.container} ref={ref}>
      <ImageLayer />
      <div className={classes.headerContainer}>
        <Typography
          style={{
            zIndex: 4,
            fontSize: "3.9rem",
            textTransform: "uppercase",
          }}
          variant="h1"
        >
          {texts.contact.header}
        </Typography>
      </div>
      <div className={classes.box}>
        <div className={classes.boxInnerContainer}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
});

export default Contact;
