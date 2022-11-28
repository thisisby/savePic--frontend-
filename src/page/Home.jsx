import React from "react";
import MainTemplate from "../component/Layout/Main";

const Home = () => {
  const MainContent = (
    <>
      <h1 className="font-bold text-3xl md:text-5xl mb-5">
        Welcome to Save Pic
      </h1>
      <p className="text-gray-500 font-thin sm:font-normal">
        With this app your pictures will be always with you
      </p>
    </>
  );

  return <MainTemplate contents={MainContent} />;
};

export default Home;
