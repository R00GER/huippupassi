import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Camper from "./Camper";

const MainImageCarousel = () => {
  const importAll = (r) => r.keys().map(r);

  const images = importAll(
    require.context("../assets/carousel", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div style={{}}>
      <Carousel autoPlay showArrows={false} infiniteLoop>
        {/* {images.map((src) => (
          <div>
            <img
              style={{ maxHeight: "100vh", objectFit: "cover" }}
              src={src.default}
              alt="alt"
            />
          </div>
        ))} */}
        <Camper />
      </Carousel>
    </div>
  );
};

export default MainImageCarousel;
