import React, { useState } from "react";
import MainTemplate from "../component/Layout/Main";
import Header from "../component/Element/Header";
import Searchbar from "../component/Element/Searchbar";
import PictureList from "../component/Picture/PictureList";

const Pictures = () => {
  const [pictureLabel, setPictureLabel] = useState();
  const [loading, setLoading] = useState("OK");
  const PicturesContent = (
    <>
      <Header text="Pictures" />
      <Searchbar
        loading={loading}
        setLoading={setLoading}
        setPictureLabel={setPictureLabel}
      />
      <PictureList loading={loading} pictureLabel={pictureLabel} />
    </>
  );

  return <MainTemplate contents={PicturesContent} />;
};

export default Pictures;
