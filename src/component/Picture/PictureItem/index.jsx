import React from "react";

const PictureItem = ({ picture }) => {
  const { label, imgUrl } = picture;
  return (
    <div className="w-full break-inside-avoid relative mb-4">
      <img className="rounded-lg" src={imgUrl} alt="" />
      <h2 className="absolute bottom-1 left-1 bg-white py-1 px-3 rounded-lg">
        {label}
      </h2>
    </div>
  );
};

export default PictureItem;
