import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  list: { display: "flex", maxWidth: "700px", paddingBottom: "0" },
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

export const links = ["Luola klubi", "Matkailuauto", "Juhlatila", "Gaming"];

const NavigationLinks = ({
  showNavigationLinks,
  setShowNavigationLinks,
  breakpoint,
}) => {
  const classes = useStyles();

  return !breakpoint && showNavigationLinks ? (
    <List className={classes.list}>
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
