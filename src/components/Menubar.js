import { cloneElement } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Fragment } from "react";
import { links } from "./navigation/NavigationLinks";
import logo from "../assets/logo_nav4.png";
import { contacts } from "./contact/ContactInfo";

const useStyles = makeStyles({
  container: {
    background: "#181818",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  img: {
    height: "50px",
    cursor: "pointer",
    marginLeft: "-10px",
  },
  listItemText: {
    fontSize: "0.5rem",
  },
});

const Menubar = ({ showMenubar, setShowMenuBar }) => {
  const classes = useStyles();
  const anchor = "left";

  const list = () => (
    <Box
      className={classes.container}
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setShowMenuBar(false)}
      onKeyDown={() => setShowMenuBar(false)}
    >
      <List>
        <ListItem>
          <img className={classes.img} src={logo} alt="logo" />
        </ListItem>
        {links.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {contacts.map((contact) => {
          const icon = cloneElement(contact.icon, { style: { fill: "#fff" } });
          return (
            contact.key !== "chat" && (
              <ListItem>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ style: { fontSize: "0.9rem" } }}
                  primary={contact.value}
                />
              </ListItem>
            )
          );
        })}
      </List>
    </Box>
  );
  return showMenubar ? (
    <Fragment key={anchor}>
      <SwipeableDrawer
        anchor={anchor}
        open={showMenubar}
        onClose={() => setShowMenuBar(false)}
        onOpen={() => setShowMenuBar(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Fragment>
  ) : null;
};

export default Menubar;
