import React, { useState, useEffect } from "react";

import Image from "./Image/Image";
import classes from "./Gallery.module.css";
import ImageView from "./ImageView/ImageView";

const Gallery = ({ images }) => {
  const [imageClicked, setImageClicked] = useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedImage, setSelecetedImage] = useState({});

  useEffect(() => {
    setSelecetedImage(images[selectedImageIndex]);
  }, [selectedImageIndex, images]);

  const onClick = (id) => {
    const index = images.findIndex((image) => image._id === id);
    const image = images[index];
    setSelectedImageIndex(index);
    setSelecetedImage(image);
    setImageClicked(true);
  };

  const imageCollection = images.map((image) => (
    <Image
      key={image._id}
      id={image._id}
      title={image.title}
      imageUrl={image.imageUrl}
      photoBy={image.photoBy}
      imageClicked={onClick}
    />
  ));

  const displayPreviousImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const displayNextImage = () => {
    if (images.length - 1 > selectedImageIndex) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const imageClickedDOM = () => {
    if (imageClicked) {
      return (
        <ImageView
          image={selectedImage}
          setImageClicked={setImageClicked}
          displayPreviousImage={displayPreviousImage}
          displayNextImage={displayNextImage}
          selectedImage={selectedImage}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className={classes.Gallery}>
      {imageCollection}

      {imageClickedDOM()}
    </div>
  );
};

export default Gallery;
