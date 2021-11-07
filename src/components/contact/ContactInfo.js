import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { cloneElement } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import logoDark from "../../assets/logo_dark.png";

const useStyles = makeStyles({
  container: {
    width: "30%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "var(--color-dark-orange)",
    padding: "1rem",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  imageContainer: {
    marginBottom: "1rem",
  },
  icon: {
    fontSize: "2rem",
    color: "var(--color-text-contrast)",
    marginRight: "0.5rem",
  },
});

const ContactInfo = () => {
  const classes = useStyles();

  const contactCards = [
    {
      key: "phone",
      icon: <IoCall />,
      value: "045 135 4987",
    },
    {
      key: "email",
      icon: <MdEmail />,
      value: "marko@huippupassi.fi",
    },
    {
      key: "chat",
      icon: <IoChatbubbleEllipsesSharp />,
      value: "Chat",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          style={{ width: "60%" }}
          alt="huippupassi logo dark"
          src={logoDark}
        />
      </div>
      {contactCards.map((card) => {
        const iconComponent = cloneElement(card.icon, {
          className: classes.icon,
        });

        return (
          <div
            key={card.key}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              minWidth: "350px",
            }}
          >
            <div>{iconComponent}</div>
            <Typography style={{ color: "var(--color-text-contrast)" }}>
              {card.value}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
