import React from "react";
import MainTemplate from "../component/Layout/Main";
import Header from "../component/Element/Header";
import SignUpForm from "../component/Signup/SignUpForm";
import UploadImageForm from "../component/UploadImage/UploadImageForm";

const UploadImage = () => {
  const UploadImageContent = (
    <>
      <Header text="Upload Image" />
      <UploadImageForm />
    </>
  );

  return <MainTemplate contents={UploadImageContent} />;
};

export default UploadImage;
