import React, { forwardRef } from "react";
import { Typography } from "@mui/material";
import { FaRegHandRock } from "react-icons/fa";
import { BiCar } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { MdOutlineShower, MdOutlineHeadsetMic } from "react-icons/md";
// import autoIcon from "../assets/icons/autoIcon.png";
// import luolaIcon from "../assets/icons/luolaklubiIcon.png";
// import goonsIcon from "../assets/icons/goonsIcon.png";
// import juhlatilaIcon from "../assets/icons/juhlatilaIcon.png";
// import saunakellariIcon from "../assets/icons/saunakellariIcon.png";
// import bookingIcon from "../assets/icons/bookingIcon.png";
// import bg from "../assets/es.png";
import ServiceCard from "../components/ServiceCard";

const ServicesContainer = forwardRef((_, ref) => {
  const services = [
    {
      label: "Matkailuauto",
      icon: <BiCar />,
      iconProps: {
        style: { fill: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: "Luola Klubi",
      icon: <FaRegHandRock />,
      iconProps: {
        style: { fill: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: "Goons",
      icon: <IoGameControllerOutline />,
      iconProps: {
        style: { color: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: "Juhlatila",
      icon: <BiDrink />,
      iconProps: {
        style: { color: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: "Saunakellari",
      icon: <MdOutlineShower />,
      iconProps: {
        style: { color: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: "Bookkaus",
      icon: <MdOutlineHeadsetMic />,
      iconProps: {
        style: { color: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
  ];

  return (
    <div
      ref={ref}
      style={{
        height: "100%",
        width: "100%",
        paddingTop: "1rem",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          // backgroundColor: "#fff",
          paddingBottom: "2rem",
        }}
      >
        <Typography variant="h1" style={{ fontSize: "4rem" }}>
          Palvelumme
        </Typography>
      </div> */}
      <div
        style={{
          display: "flex",
          padding: "2rem 2rem 0 2rem",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        {services.map(({ label, icon, iconProps }) => (
          <ServiceCard
            key={label}
            label={label}
            icon={icon}
            iconProps={iconProps}
          />
        ))}
      </div>
    </div>
  );
});

export default ServicesContainer;
