import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import solmiaLogo from "../assets/solmia.png";
import { texts } from "../texts";

const useStyles = makeStyles({
  container: {
    height: "100%",
    position: "relative",
    padding: "2rem 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  quoteTopRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
  },
  quoteLeftContainer: {
    alignSelf: "flex-start",
  },
  quoteRightContainer: {
    alignSelf: "flex-end",
  },
  quoteIcon: {
    color: "var(--color-dark-orange)",
    fontSize: "3rem",
  },
  body: {
    width: "90%",
  },
  img: {
    opacity: "0.4",
  },
});

const Testimonials = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.quoteTopRow}>
        <div className={classes.quoteLeftContainer}>
          <RiDoubleQuotesL className={classes.quoteIcon} />
        </div>
        <div className={classes.body}>
          <Typography style={{ fontSize: "1.3rem", fontStyle: "italic" }}>
            {texts.testimonials.body}
          </Typography>
          <br />
          <Typography>{texts.testimonials.signature}</Typography>
        </div>
        <div className={classes.quoteRightContainer}>
          <RiDoubleQuotesR className={classes.quoteIcon} />
        </div>
      </div>
      <img className={classes.img} alt="solmia logo" src={solmiaLogo} />
    </div>
  );
};

export default Testimonials;
