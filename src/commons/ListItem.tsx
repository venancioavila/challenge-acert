import React from "react";
import {
  Typography,
  Card,
  IconButton,
  Paper,
  Tooltip,
  CardMedia
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Album } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "80%",
      height: 100,
      margin: 10,
      padding: 5,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto"
      }
    },
    card: {
      height: 100,
      width: 100,
      borderRadius: 75
    },
    coverRoot: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      height: "100%",
      minWidth: 250,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto"
      }
    },
    cover: { height: 100, minWidth: 100 },
    label: {
      marginLeft: 10,
      alignSelf: "flex-start",
      [theme.breakpoints.down("sm")]: {
        margin: 0,
        textAlign: "center",
        width: "100%"
      }
    },
    albums: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto"
      }
    },
    labels: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "auto"
      }
    }
  })
);

interface Props {
  data: any;
  handleDialog: (e: void) => any;
  handleAlbums: (e: string) => Promise<void>;
}

const ListItem = ({ data, handleDialog, handleAlbums }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Paper component="div" className={classes.root}>
        <div className={classes.coverRoot}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={data.image[2]["#text"]}
              title="Live from space album cover"
              src="image"
            />
          </Card>
          <div className={classes.labels}>
            <Typography
              className={classes.label}
              variant="subtitle2"
              gutterBottom
              component="span"
              data-testid="artistNames"
            >
              {data.name}
            </Typography>
            <Typography
              className={classes.label}
              variant="caption"
              gutterBottom
              component="span"
              data-testid="listeners"
            >
              {data.listeners} ouvintes
            </Typography>
          </div>
        </div>
        <div className={classes.albums}>
          <Tooltip title="Albuns">
            <IconButton
              onClick={() => {
                handleAlbums(data.name);
                handleDialog();
              }}
              aria-label="delete"
            >
              <Album fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </Paper>
    </>
  );
};

export default ListItem;
