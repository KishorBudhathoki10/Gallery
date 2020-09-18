import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import classes from "./Navigation.module.css";
import useCurrentWindowWidth from "../../customHooks/useCurrentWindowWidth";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

const Navigation = (props) => {
  let width = useCurrentWindowWidth();

  // Change background color and color while state change

  const location = useLocation();

  const ref = useRef();

  React.useEffect(() => {
    if (location.pathname === "/") {
      ref.current.className = classes.Home;
    } else {
      ref.current.className = classes.Gallery;
    }
  }, [location]);

  // Hide navigation white scroll down
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      const visible = prevScrollpos > currentScrollPos;

      setPrevScrollpos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  let classCollection = classes.navigation;

  let style = {};

  const styleActiveNavLink = { color: "grey" };

  if (location.pathname === "/") {
    if (!visible) classCollection += ` ${classes.navigation_hidden}`;
  } else {
    style = { position: "static" };
  }

  const showNavAccordingly = () => {
    if (width > 600) {
      return (
        <div ref={ref}>
          <NavLink to="/" exact activeStyle={styleActiveNavLink}>
            Home
          </NavLink>

          <NavLink to="/gallery" activeStyle={styleActiveNavLink}>
            Gallery
          </NavLink>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shophelenasphotogallery.netlify.app/"
          >
            Shop
          </a>
        </div>
      );
    } else {
      return (
        <div ref={ref}>
          <MobileNavigation />
        </div>
      );
    }
  };

  return (
    <div>
      <div className={classCollection} style={style}>
        {showNavAccordingly()}
      </div>
    </div>
  );
};

export default Navigation;
