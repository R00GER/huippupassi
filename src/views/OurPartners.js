import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { texts } from "../texts";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // background: "#222222",
  },
  headerContainer: {
    paddingBottom: "4rem",
  },
  img: {
    height: "50vh",
    objectFit: "cover",
  },
});

const OurPartners = () => {
  const importAll = (r) => r.keys().map(r);

  const images = importAll(
    require.context("../assets/carousel", false, /\.(png|jpe?g|svg)$/)
  );

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography
          style={{ fontSize: "3.9rem", textTransform: "uppercase" }}
          variant="h1"
        >
          {texts.ourPartners.header}
        </Typography>
      </div>
      <Carousel
        stopOnHover={false}
        showThumbs={false}
        autoPlay
        showArrows={false}
        infiniteLoop
      >
        {images.map((src) => (
          <img
            className={classes.img}
            key={src}
            src={src.default}
            alt={src.default}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default OurPartners;
