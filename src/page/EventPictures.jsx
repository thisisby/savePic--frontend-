import React, { useState } from "react";
import MainTemplate from "../component/Layout/Main";
import Header from "../component/Element/Header";
import Searchbar from "../component/Element/Searchbar";
import PictureList from "../component/Picture/PictureList";
import EventPicturesList from "../component/EventPicture";

const EventPictures = () => {
  const PicturesContent = (
    <>
      <Header text="Event pictures" />

      <EventPicturesList />
    </>
  );

  return <MainTemplate contents={PicturesContent} />;
};

export default EventPictures;
