import { Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OurPartners = () => {
  const importAll = (r) => r.keys().map(r);

  const images = importAll(
    require.context("../assets/carousel", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // background: "#222222",
      }}
    >
      <div style={{ paddingBottom: "4rem" }}>
        <Typography variant="h1" style={{ fontSize: "4rem" }}>
          Yhteistyössä
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
            key={src}
            style={{ height: "50vh", objectFit: "cover" }}
            src={src.default}
            alt="alt"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default OurPartners;
