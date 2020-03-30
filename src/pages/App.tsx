import React from "react";
import {
  Typography,
  Card,
  CardActions,
  Button,
  CardContent,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateModal from "../commons/CreateModal";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: 400,
    height: 300,
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
    justifyContent: "space-around"
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
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.root}>
      <Card className={classes.card}>
        <Typography color="textSecondary" gutterBottom>
          Login
        </Typography>
        <CardContent className={classes.cardContent}>
          <div className={classes.form}>
            <TextField
              className={classes.input}
              id="filled-basic"
              label="Email..."
              variant="filled"
            />
            <TextField
              className={classes.input}
              id="filled-basic"
              label="Senha..."
              variant="filled"
              type="password"
            />
          </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <CreateModal />
          <Button variant="outlined" color="primary">
            Login
          </Button>
        </CardActions>
      </Card>
    </Typography>
  );
};

export default App;
