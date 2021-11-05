import React, { forwardRef } from "react";
import contactUs from "../assets/contactUs.jpg";

const Contact = forwardRef((_, ref) => (
  <div
    ref={ref}
    style={{
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
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
      }}
    />
    <div
      style={{
        background: "rgba(255,255,255,0.7)",
        width: "60%",
        height: "80%",
        zIndex: 2,
      }}
    />
  </div>
));

export default Contact;
