import React from "react";

import classes from "./ImageComponent.module.css";

const imageComponent = (props) => {
  return (
    <div
      className={classes.imageComponent}
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        opacity: `${props.opacity}`,
      }}
    >
      {props.children}
    </div>
  );
};

export default imageComponent;
