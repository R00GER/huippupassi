import logoDark from "../assets/logo_dark.png";
import { IconButton } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";

const Footer = ({ scrollToView }) => (
  <div
    style={{
      position: "relative",
      height: "20vh",
      width: "100%",
      padding: "0.5rem",
    }}
  >
    <IconButton
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%)",
      }}
      onClick={() => scrollToView("heroRef")}
    >
      <IoIosArrowUp
        style={{
          color: "var(--color-dark-orange)",
          zIndex: 5,
          fontSize: "2.8rem",
        }}
      />
    </IconButton>
    <img
      style={{ height: "30px" }}
      alt="huippupassi logo dark"
      src={logoDark}
    />
  </div>
);

export default Footer;
