import React, { useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Card,
  CardActions,
  Button,
  CardContent,
  TextField,
  Fade
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: 400,
    height: 400,
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

const CreateModal = () => {
  const users: any[] = useSelector((state: any) => state.storage.users);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSave = () => {
    const exist = users.find(user => user.email === email);
    if (exist) {
      setError("Esse usuários já está cadastrado.");
      return;
    }
    setError("");
    dispatch(
      actions.registerUserRequest({
        name,
        email,
        password
      })
    );
  };

  return (
    <>
      <Button onClick={() => handleOpen()}>Criar conta</Button>
      <Modal
        open={open}
        onClose={handleOpen}
        onBackdropClick={handleOpen}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Fade in={open}>
          <Typography component="div" className={classes.root}>
            <Card className={classes.card}>
              <Typography color="textSecondary" gutterBottom>
                Nova conta
              </Typography>
              <CardContent className={classes.cardContent}>
                <div className={classes.form}>
                  <TextField
                    className={classes.input}
                    id="filled-basic"
                    label="Name..."
                    variant="filled"
                    onChange={(e: any) => setName(e.target.value)}
                  />
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

              <CardActions className={classes.actions}>
                <Button onClick={() => handleOpen()}>Cancelar</Button>
                <Button
                  onClick={() => handleSave()}
                  variant="outlined"
                  color="primary"
                >
                  Criar
                </Button>
              </CardActions>
            </Card>
          </Typography>
        </Fade>
      </Modal>
    </>
  );
};

export default CreateModal;
