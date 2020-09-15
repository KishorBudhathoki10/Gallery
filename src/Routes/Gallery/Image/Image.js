import React, { useState, useRef, useEffect } from "react";

import classes from "./Image.module.css";

const Image = (props) => {
  const { id, title, imageUrl, photoBy, imageClicked } = props;

  const [spans, setSpans] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [hoverContent, setHoverContent] = useState(false);

  const imageRef = useRef();

  useEffect(() => {
    const settingSpans = () => {
      const height = imageRef.current.clientHeight;

      setImageHeight(height);

      const newSpans = Math.ceil(height / 10);

      setSpans(newSpans);
    };

    imageRef.current.addEventListener("load", settingSpans);

    return () => {};
  }, []);

  // For text sliding in image
  let styleContent;

  if (hoverContent) {
    styleContent = {
      opacity: 1,
      transform: `translate( 0px, ${imageHeight / 2.8}px)`,
    };
  } else {
    styleContent = {};
  }

  return (
    <div className={classes.ImageBlock} style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        src={imageUrl}
        alt={title}
        className={classes.Image}
      />
      <div
        onMouseOver={() => setHoverContent(true)}
        onMouseLeave={() => setHoverContent(false)}
        className={classes.content}
        style={{ height: `${imageHeight}px` }}
        onClick={() => imageClicked(id)}
      >
        <div className={classes.text} style={styleContent}>
          <h2 className={classes.photoBy}>Photo By</h2>
          <h2 className={classes.photographer}>{photoBy}</h2>
        </div>
      </div>
    </div>
  );
};

export default Image;
