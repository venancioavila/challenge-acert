import React from "react";
import TextField from "@material-ui/core/TextField";

export default { title: "TextFields" };

export const TextFieldBasic = () => (
  <TextField id="standard-basic" label="Standard" />
);

export const TextFieldFilled = () => (
  <TextField id="filled-basic" label="Filled" variant="filled" />
);

export const TextFieldOutlined = () => (
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
);
