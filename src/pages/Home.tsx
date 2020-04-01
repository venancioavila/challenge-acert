import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  AppBar,
  Toolbar,
  LinearProgress,
  IconButton
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ExitToApp } from "@material-ui/icons";
import HistoryIcon from "@material-ui/icons/History";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { History } from "history";
import { api } from "../services/api";
import ArtistList from "../commons/ArtistList";
import SearchBar from "../commons/Search";
import moment from "moment";
import HistoryDialog from "../commons/History";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: 100,
      paddingBottom: 50
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

const Home = ({ history }: Props) => {
  const user = useSelector((state: any) => state.storage.loggedUser);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [artist, setArtist] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [historySearch, setHistorySearch] = useState(false);

  const handleLogout = () => {
    dispatch(actions.logoutRequest());
    history.push("/");
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, [user]);

  const handleSearch = async () => {
    setLoading(true);
    const res = await api("artist", search);
    setArtist(res.results.artistmatches.artist);
    dispatch(
      actions.addSearch({
        email: user.email,
        type: "artist",
        search,
        createdAt: moment().format("DD/MM/YYYY, h:mm:ss a")
      })
    );
    setLoading(false);
  };

  const handleDialog = () => setHistorySearch(!historySearch);

  return (
    <>
      <AppBar color="default" position="fixed">
        {loading && <LinearProgress />}
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">{user && user.name}</Typography>
          <div>
            <IconButton onClick={() => handleDialog()} color="inherit">
              <HistoryIcon />
            </IconButton>
            <IconButton onClick={() => handleLogout()} color="inherit">
              <ExitToApp />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Typography component="div" className={classes.root}>
        <Card className={classes.card}>
          <Typography color="textSecondary" gutterBottom>
            Músicas
          </Typography>
          <CardContent className={classes.cardContent}>
            <SearchBar
              title="Pesquisa por Artistas"
              setSearch={setSearch}
              handleSearch={handleSearch}
            />
            <ArtistList data={artist} history={history} />
          </CardContent>
          <CardActions className={classes.actions}></CardActions>
        </Card>
      </Typography>
      <HistoryDialog open={historySearch} handleDialog={handleDialog} />
    </>
  );
};

export default Home;
