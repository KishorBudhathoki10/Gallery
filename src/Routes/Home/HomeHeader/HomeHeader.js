import React from "react";

import ImageComponent from "../../../components/ImageComponent/ImageComponent";

import classes from "./HomeHeader.module.css";

const Header = (props) => {
  return (
    <div>
      <ImageComponent imageUrl={"./images/women.jpeg"} opacity="1">
        <div style={{ height: "500px" }}></div>
        <h1 className={classes.mainHeader}>Helena's Photo Gallery</h1>
      </ImageComponent>
    </div>
  );
};

export default Header;
