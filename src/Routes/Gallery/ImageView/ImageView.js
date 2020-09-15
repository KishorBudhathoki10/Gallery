import React, { useEffect, useRef } from "react";

import classes from "./ImageView.module.css";

const ImageView = (props) => {
  const {
    image,
    setImageClicked,
    displayPreviousImage,
    displayNextImage,
  } = props;

  const imageRef = useRef();
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();

  // Move image when key press
  useEffect(() => {
    const displayImageDependingOnKey = (event) => {
      if (event.key === "ArrowLeft") {
        displayPreviousImage();
      } else if (event.key === "ArrowRight") {
        displayNextImage();
      }
    };

    window.addEventListener("keydown", displayImageDependingOnKey);

    return () => {
      window.removeEventListener("keydown", displayImageDependingOnKey);
    };
  }, [displayNextImage, displayPreviousImage]);

  const backdropClicked = (event) => {
    if (
      [imageRef.current, leftArrowRef.current, rightArrowRef.current].includes(
        event.target
      )
    )
      return;

    setImageClicked(false);
  };

  return (
    <div className={classes.imageClickedDOM}>
      <div className={classes.backdrop} onClick={backdropClicked}>
        <div className={classes.container}>
          <p
            ref={leftArrowRef}
            className={classes.leftArrow}
            onClick={displayPreviousImage}
          >
            {"<"}
          </p>
          <p
            ref={rightArrowRef}
            className={classes.rightArrow}
            onClick={displayNextImage}
          >
            {">"}
          </p>

          <div className={classes.imageContainer}>
            <img ref={imageRef} src={image.imageUrl} alt={image.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
