import React from "react";

import classes from "./Layer.module.css";

const Layer = (props) => {
  return (
    <div
      className={classes.Layer}
      style={{
        backgroundColor: props.color,
      }}
    ></div>
  );
};

export default Layer;
