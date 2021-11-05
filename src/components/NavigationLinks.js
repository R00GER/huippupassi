import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  listItem: {},
  listItemButton: {
    "&:hover": {
      backgroundColor: "unset !important",
    },
    height: "50%",
    whiteSpace: "nowrap",
  },
  listItemText: {
    textAlign: "center",
  },
  listItemTextInput: {
    "&:hover": {
      color: "#ec962c",
    },
    fontSize: "1.2rem",
    lineHeight: 1,
  },
});

const NavigationLinks = ({ showNavigationLinks, setShowNavigationLinks }) => {
  const links = ["Luola klubi", "Matkailuauto", "Juhlatila", "Gaming"];

  const classes = useStyles();

  return showNavigationLinks ? (
    <List style={{ display: "flex", width: "50%", paddingBottom: "0" }}>
      {links.map((link) => (
        <ListItem key={link} className={classes.listItem}>
          <ListItemButton className={classes.listItemButton}>
            <ListItemText
              className={classes.listItemText}
              primaryTypographyProps={{ className: classes.listItemTextInput }}
              primary={link}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  ) : null;
};

export default NavigationLinks;
