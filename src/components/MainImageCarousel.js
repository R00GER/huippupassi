import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MainImageCarousel = () => {
  const importAll = (r) => r.keys().map(r);

  const images = importAll(
    require.context("../assets/carousel", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div style={{ height: 500, position: "absolute", top: 300, right: 0 }}>
      <Carousel width="500px" autoPlay showArrows={false} infiniteLoop>
        {images.map((src) => (
          <div style={{ maxHeight: 300 }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ maxHeight: 300, objectFit: "cover" }}
                src={src.default}
                alt="alt"
              />
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainImageCarousel;
