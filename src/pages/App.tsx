import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import bcrypt from "bcryptjs";
import { History } from "history";

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

interface Props {
  history: History;
}

const App = ({ history }: Props) => {
  const users: any[] = useSelector((state: any) => state.storage.users);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    const user = users.find(user => user.email === email);
    if (!user) {
      setError("Esse usuário não existe.");
      return;
    }
    setError("");
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      setPasswordError("Senha incorreta.");
      return;
    }
    setPasswordError("");
    dispatch(actions.loginRequest(user));
    history.push("/home");
  };

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
              type="email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <TextField
              className={classes.input}
              id="filled-basic"
              label="Senha..."
              variant="filled"
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        {error && (
          <Typography color="error" gutterBottom>
            {error}
          </Typography>
        )}
        {passwordError && (
          <Typography color="error" gutterBottom>
            {passwordError}
          </Typography>
        )}
        <CardActions className={classes.actions}>
          <CreateModal />
          <Button
            onClick={() => handleLogin()}
            variant="outlined"
            color="primary"
          >
            Entrar agora
          </Button>
        </CardActions>
      </Card>
    </Typography>
  );
};

export default App;
