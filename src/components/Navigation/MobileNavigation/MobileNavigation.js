import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./MobileNavigation.module.css";
import BackDrop from "../../../components/BackDrop/BackDrop";

const MobileNavigation = () => {
  const [navClicked, setNavClicked] = useState(false);

  let linkClasses = `${classes.navbar} ${classes.navbar__hidden}`;

  //   const backDropRef = useRef();

  //   useEffect(() => {
  //     if (backDropRef.current) {
  //       backDropRef.current.addEventListener("click", () => setNavClicked(false));
  //     }
  //   }, []);

  const location = useLocation();

  if (navClicked) {
    linkClasses = classes.navbar;
  } else {
    linkClasses = `${classes.navbar} ${classes.navbar__hidden}`;
  }

  const onBackDropClick = () => {
    setNavClicked(false);
  };

  const showBackDropAccordingly = () => {
    if (navClicked) {
      return <BackDrop click={onBackDropClick} />;
    }
  };

  let styleLine, styleActiveHome, styleActiveGallery;

  if (location.pathname === "/") {
    styleLine = { backgroundColor: "white" };
    styleActiveHome = { color: "#969797" };
  } else {
    styleLine = { backgroundColor: "black" };
    styleActiveGallery = { color: "#969797" };
  }

  return (
    <div className={classes.navMobile}>
      <div onClick={() => setNavClicked(true)}>
        <div className={classes.line1} style={styleLine}></div>
        <div className={classes.line2} style={styleLine}></div>
        <div className={classes.line3} style={styleLine}></div>
      </div>

      <div className={linkClasses}>
        <div className={classes.links}>
          <Link
            to="/"
            style={styleActiveHome}
            onClick={() => setNavClicked(false)}
          >
            Home
          </Link>

          <Link
            to="/gallery"
            style={styleActiveGallery}
            onClick={() => setNavClicked(false)}
          >
            Gallery
          </Link>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shophelenasphotogallery.netlify.app/"
            onClick={() => setNavClicked(false)}
          >
            Shop
          </a>
        </div>
      </div>

      {showBackDropAccordingly()}
    </div>
  );
};

export default MobileNavigation;
