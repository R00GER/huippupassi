import React, { forwardRef } from "react";
import { makeStyles } from "@mui/styles";
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
import { texts } from "../texts";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: "1rem",
  },
  serviceCardsContainer: {
    display: "flex",
    padding: "2rem 2rem 0 2rem",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    marginTop: "1rem",
  },
});

const ServicesContainer = forwardRef((_, ref) => {
  const services = [
    {
      label: texts.services.matkailuauto,
      body: texts.services.matkailuautoBody,
      icon: <BiCar />,
      iconProps: {
        style: { fill: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: texts.services.luolaKlubi,
      body: texts.services.luolaKlubiBody,
      icon: <FaRegHandRock />,
      iconProps: {
        style: { fill: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: texts.services.goons,
      body: texts.services.goonsBody,
      icon: <IoGameControllerOutline />,
      iconProps: {
        style: { color: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: texts.services.juhlatila,
      body: texts.services.juhlatilaBody,
      icon: <BiDrink />,
      iconProps: {
        style: { color: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: texts.services.saunakellari,
      body: texts.services.saunakellariBody,
      icon: <MdOutlineShower />,
      iconProps: {
        style: { color: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
    {
      label: texts.services.bookkaus,
      body: texts.services.bookkausBody,
      icon: <MdOutlineHeadsetMic />,
      iconProps: {
        style: { color: "var(--color-dark-orange)", fontSize: "3.5rem" },
      },
    },
  ];

  const classes = useStyles();

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.serviceCardsContainer}>
        {services.map(({ label, body, icon, iconProps }) => (
          <ServiceCard
            key={label}
            label={label}
            body={body}
            icon={icon}
            iconProps={iconProps}
          />
        ))}
      </div>
    </div>
  );
});

export default ServicesContainer;
