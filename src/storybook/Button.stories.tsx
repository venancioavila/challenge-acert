import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";

export default { title: "Buttons" };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Outlined = () => (
  <Button variant="outlined">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Colored = () => (
  <Button color="secondary" variant="outlined">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Contained = () => (
  <Button color="secondary" variant="contained">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const WithIcon = () => (
  <IconButton>
    <Home />
  </IconButton>
);
