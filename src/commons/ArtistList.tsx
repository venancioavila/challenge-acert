import React, { useState, useEffect } from "react";
import {
  GridListTile,
  Button,
  GridList,
  DialogActions,
  Dialog,
  DialogContent,
  IconButton,
  DialogTitle,
  GridListTileBar
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Info } from "@material-ui/icons";
import { History } from "history";
import ListItem from "./ListItem";
import { getAlbums } from "../services/api";
import SearchBar from "./Search";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      marginTop: 50
    },
    gridList: {
      width: "100%",
      height: "100%"
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    },
    rootGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      width: "100%"
    },
    gridTitle: {
      height: "auto",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center"
    }
  })
);

interface Props {
  history: History;
  data: any[];
}

const ArtistList = ({ history, data }: Props) => {
  const user = useSelector((state: any) => state.storage.loggedUser);
  const searchs = useSelector((state: any) => state.storage.searchs);
  const dispatch = useDispatch();

  const [dialog, setDialog] = useState(false);
  const [albums, setAlbums] = useState<any[]>([]);
  const [artist, setArtist] = useState("");
  const [search, setSearch] = useState("");
  const [albumbackup, setAlbumbackup] = useState<any[]>([]);
  const classes = useStyles();
  const handleDialog = () => setDialog(!dialog);

  const handleAlbums = async (artist: string) => {
    setArtist(artist);
    const res: any = await getAlbums(artist);
    const { topalbums: album } = res;
    setAlbums(album.album);
    setAlbumbackup(album.album);
  };

  const handleSearch = () => {
    dispatch(
      actions.addSearch({
        email: user.email,
        search,
        createdAt: moment().format("DD/MM/YYYY, h:mm:ss a")
      })
    );
    if (search === "") {
      setAlbums(albumbackup);
      return;
    }
    const album: any[] = albums.filter(item => {
      if (item.name.toLowerCase().includes(search)) return item;
    });

    if (album.length < 1) {
      setAlbums([]);
    }
    setAlbums(album);
  };

  useEffect(() => {
    console.log(searchs);
  }, [searchs]);

  return (
    <>
      <div className={classes.root}>
        {data.map(item => (
          <ListItem
            key={item.name}
            handleAlbums={handleAlbums}
            handleDialog={handleDialog}
            data={item}
          />
        ))}
      </div>
      <Dialog
        onClose={handleDialog}
        aria-labelledby="customized-dialog-title"
        open={dialog}
        fullScreen
      >
        <DialogTitle id="customized-dialog-title">{artist}</DialogTitle>
        <DialogContent dividers>
          <div className={classes.rootGrid}>
            <div className={classes.gridTitle}>
              <SearchBar
                title="Pesquise por álbuns"
                setSearch={setSearch}
                handleSearch={() => handleSearch()}
              />
            </div>
            <GridList cellHeight={180} className={classes.gridList}>
              {albums.map(item => (
                <GridListTile key={item.name}>
                  <img src={item.image[3]["#text"]} alt="" />
                  <GridListTileBar
                    title={item.name}
                    subtitle={<span>by: {item.artist.name}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about Artista`}
                        className={classes.icon}
                      >
                        <Info />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleDialog();
              setAlbums([]);
            }}
            color="primary"
          >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ArtistList;
