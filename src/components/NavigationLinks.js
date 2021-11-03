import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  listItem: {},
  listItemButton: {
    whiteSpace: "nowrap",
  },
});

const NavigationLinks = ({ showNavigationLinks, setShowNavigationLinks }) => {
  const links = ["Luola klubi", "Matkailuauto", "Juhlatila", "Gaming"];

  const classes = useStyles();

  return showNavigationLinks ? (
    <List style={{ display: "flex", width: "50%" }}>
      {links.map((link) => (
        <ListItem className={classes.listItem}>
          <ListItemButton className={classes.listItemButton}>
            <ListItemText
              style={{ textAlign: "center" }}
              primaryTypographyProps={{ fontSize: "1.2rem" }}
              primary={link}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  ) : null;
};

export default NavigationLinks;
