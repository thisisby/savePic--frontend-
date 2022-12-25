import React from "react";
import MainTemplate from "../component/Layout/Main";
import Header from "../component/Element/Header";
import SignUpForm from "../component/Signup/SignUpForm";
import UploadImageForm from "../component/UploadImage/UploadImageForm";
import AddEvent from "../component/AddEvent";

const AddEventPage = () => {
  const UploadImageContent = (
    <>
      <Header text="Add Event" />
      <AddEvent />
    </>
  );

  return <MainTemplate contents={UploadImageContent} />;
};

export default AddEventPage;
