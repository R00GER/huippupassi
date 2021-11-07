import { Fab } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const useStyles = makeStyles({
  fab: {
    position: "fixed !important",
    bottom: 90,
    right: 20,
  },
  fabIcon: {
    fontSize: "1.8rem",
    transform: "scaleX(-1)",
    // color: "#f2f2f2",
  },
});

const ChatFab = () => {
  const classes = useStyles();
  return (
    <Fab color="primary" className={classes.fab}>
      <IoChatbubbleEllipsesSharp className={classes.fabIcon} />
    </Fab>
  );
};

export default ChatFab;
