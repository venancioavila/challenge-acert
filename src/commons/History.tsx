import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  handleDialog: (e: any) => any;
}

const History = ({ open, handleDialog }: Props) => {
  const [userSearchs, setUserSearchs] = useState<any[]>([]);
  const user = useSelector((state: any) => state.storage.loggedUser);
  const searchs = useSelector((state: any) => state.storage.searchs);

  const classes = useStyles();

  useEffect(() => {
    const currentSearchs = searchs.filter(
      (item: any) => item.email === user.email
    );
    setUserSearchs(currentSearchs);
  }, [searchs]);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleDialog}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="body1" className={classes.title}>
              Historico
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {userSearchs.map(item => (
            <>
              <ListItem button>
                <ListItemText
                  primary={`${item.search} - ${item.type}`}
                  secondary={item.createdAt}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Dialog>
    </div>
  );
};

export default History;
