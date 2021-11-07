import { Fab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IoCall } from "react-icons/io5";

const useStyles = makeStyles({
  fab: {
    position: "fixed !important",
    bottom: 20,
    right: 20,
  },
  fabIcon: {
    fontSize: "1.8rem",
  },
});

const PhoneFab = () => {
  const classes = useStyles();
  return (
    <Fab color="primary" className={classes.fab}>
      <IoCall className={classes.fabIcon} />
    </Fab>
  );
};

export default PhoneFab;
