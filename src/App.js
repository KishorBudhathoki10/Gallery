import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Navigation from "./components/Navigation/Navigation";
import Home from "./Routes/Home/Home";
import Gallery from "./Routes/Gallery/Gallery";

import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(process.env.REACT_APP_GALLERY_API, {
        params: {
          fields: "title,photoBy,imageUrl",
        },
      });

      setImages(response.data.data.images);
    };

    getImages();
  }, []);

  return (
    <div>
      <HashRouter>
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/gallery"
            component={() => <Gallery images={images} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
