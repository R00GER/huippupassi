import { Typography } from "@mui/material";
import autoIcon from "../assets/icons/autoIcon.png";
import luolaIcon from "../assets/icons/luolaklubiIcon.png";
import goonsIcon from "../assets/icons/goonsIcon.png";
import juhlatilaIcon from "../assets/icons/juhlatilaIcon.png";
import saunakellariIcon from "../assets/icons/saunakellariIcon.png";
import bookingIcon from "../assets/icons/bookingIcon.png";
import bg from "../assets/es.png";
import ServiceCard from "../components/ServiceCard";

const ServicesContainer = () => {
  const services = [
    {
      name: "Matkailuauto",
      icon: autoIcon,
      color: "red",
    },
    {
      name: "Luola Klubi",
      icon: luolaIcon,
      color: "yellow",
    },
    {
      name: "Goons",
      icon: goonsIcon,
      color: "orange",
    },
    {
      name: "Juhlatila",
      icon: juhlatilaIcon,
      color: "green",
    },
    {
      name: "Saunakellari",
      icon: saunakellariIcon,
      color: "purple",
    },
    {
      name: "Bookkaus",
      icon: bookingIcon,
      color: "pink",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // background: "#ec962c99",
        paddingTop: "2rem",
        // backgroundImage: `url(${bg})`,
      }}
    >
      <div
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
      </div>
      <div
        style={{
          display: "flex",
          padding: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        {services.map(({ name, icon, color }) => (
          <ServiceCard name={name} icon={icon} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ServicesContainer;
