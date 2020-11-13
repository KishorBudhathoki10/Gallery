import React from "react";

import ImageComponent from "../../components/ImageComponent/ImageComponent";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import HomeHeader from "./HomeHeader/HomeHeader";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <div>
      <HomeHeader />

      <ImageComponent imageUrl={"./images/old_man.jpeg"}>
        <SectionComponent sectionHeader="Section One">
          <p className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
            laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora
            facere dolores nisi facilis consequatur, odio hic minima nostrum.
            Perferendis eos earum praesentium, blanditiis sapiente labore
            aliquam ipsa architecto vitae. Minima soluta temporibus voluptates
            inventore commodi cumque esse suscipit optio aliquam et, dolorem a
            cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde
            eveniet placeat quisquam blanditiis voluptatem doloremque fugiat
            dolor repellendus ratione in.
          </p>
        </SectionComponent>
      </ImageComponent>

      <ImageComponent imageUrl={"./images/guy_sleeping.jpeg"}>
        <SectionComponent
          sectionHeader="Section Two"
          backgroundColor="#282E34"
          color="#DDD"
        >
          <p className={classes.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
            laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora
            facere dolores nisi facilis consequatur, odio hic minima nostrum.
            Perferendis eos earum praesentium, blanditiis sapiente labore
            aliquam ipsa architecto vitae. Minima soluta temporibus voluptates
            inventore commodi cumque esse suscipit optio aliquam et, dolorem a
            cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde
            eveniet placeat quisquam blanditiis voluptatem doloremque fugiat
            dolor repellendus ratione in.
          </p>
        </SectionComponent>
      </ImageComponent>

      <SectionComponent
        sectionHeader="Section Two"
        backgroundColor="#282E34"
        color="#DDD"
      >
        <p className={classes.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
          laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora
          facere dolores nisi facilis consequatur, odio hic minima nostrum.
          Perferendis eos earum praesentium, blanditiis sapiente labore aliquam
          ipsa architecto vitae. Minima soluta temporibus voluptates inventore
          commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate
          nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat
          quisquam blanditiis voluptatem doloremque fugiat dolor repellendus
          ratione in.
        </p>
      </SectionComponent>

      <ImageComponent imageUrl={"./images/swing.jpeg"} opacity="1">
        {/* <h1 className={classes.mainHeader}>Helena's Photo Gallery</h1> */}
      </ImageComponent>
    </div>
  );
};

export default Home;
