import React from "react";

import classes from "./BackDrop.module.css";

const BackDrop = ({ click }) => {
  return <div className={classes.backdrop} onClick={() => click()}></div>;
};

export default BackDrop;
