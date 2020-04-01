import React from "react";
import { IconButton, Paper, InputBase, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";

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
      width: "80%",
      marginBottom: 20,
      alignSelf: "center"
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
  setSearch: (e: any) => any;
  handleSearch: (e: any) => any;
  title: string;
}

const SearchBar = ({ setSearch, handleSearch, title }: Props) => {
  const classes = useStyles();

  return (
    <Paper component="div" className={classes.rootPaper}>
      <InputBase
        className={classes.inputSearch}
        placeholder={title}
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e: any) => setSearch(e.target.value)}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={handleSearch}
        className={classes.iconButton}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
