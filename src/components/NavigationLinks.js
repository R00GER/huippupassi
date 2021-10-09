import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  listItemButton: {
    whiteSpace: "nowrap",
  },
});

const NavigationLinks = () => {
  const links = ["Luola klubi", "Matkailuauto", "Juhlatila", "Gaming"];

  const classes = useStyles();

  return (
    <List style={{ display: "flex" }}>
      {links.map((link) => (
        <ListItem>
          <ListItemButton className={classes.listItemButton}>
            <ListItemText primary={link} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationLinks;
