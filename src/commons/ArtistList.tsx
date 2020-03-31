import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardActions,
  Button,
  CardContent,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  InputBase,
  Divider
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Menu, Search, Directions } from "@material-ui/icons";
import CreateModal from "../commons/CreateModal";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { History } from "history";
import api from "../services/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: 50
    },
    card: {
      width: "90%",
      // height: ,
      background: "#EAECEE",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 10
    },
    cardContent: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    form: {
      width: "100%",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    },
    actions: {
      width: "80%",
      justifyContent: "space-around"
    },
    input: {
      width: "80%",
      margin: 10
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    rootPaper: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "80%"
    },
    inputSearch: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

interface Props {
  history: History;
}

const ArtistList = ({ history }: Props) => {
  const user = useSelector((state: any) => state.storage.loggedUser);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [artist, setArtist] = useState([]);
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    dispatch(actions.logoutRequest());
    history.push("/");
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);

  const handleSearch = async () => {
    const res = await api("artist", search);
    setArtist(res.results.artistmatches.artist);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">{user && user.name}</Typography>
          <Button onClick={() => handleLogout()} color="inherit">
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      <Typography component="div" className={classes.root}>
        <Card className={classes.card}>
          <Typography color="textSecondary" gutterBottom>
            Músicas
          </Typography>
          <CardContent className={classes.cardContent}>
            <Paper component="div" className={classes.rootPaper}>
              <InputBase
                className={classes.inputSearch}
                placeholder="Pesquise por artistas"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e: any) => setSearch(e.target.value)}
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                onClick={() => handleSearch()}
                className={classes.iconButton}
                aria-label="search"
              >
                <Search />
              </IconButton>
            </Paper>
          </CardContent>
          <CardActions className={classes.actions}></CardActions>
        </Card>
      </Typography>
    </>
  );
};

export default ArtistList;
