import React from "react";

import classes from "./SectionComponent.module.css";

const sectionComponent = (props) => {
  return (
    <div
      className={classes.sectionComponent}
      style={{
        backgroundColor: `${props.backgroundColor}`,
        color: `${props.color}`,
      }}
    >
      <h2 className={classes.sectionHeader}>{props.sectionHeader}</h2>
      <div className={classes.sectionContent}>{props.children}</div>
    </div>
  );
};

export default sectionComponent;
