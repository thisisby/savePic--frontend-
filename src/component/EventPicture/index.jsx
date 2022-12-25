import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PictureItem from "../Picture/PictureItem";
import { getPicturesByEventId } from "../../api/Pictures/getPicturesByEventId";

const EventPicturesList = () => {
  const { eventId } = useParams();
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getPicturesByEventId(eventId)
      .then((res) => {
        console.log("res", res);
        setPictures(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading) {
    return <h2 className="text-xl p-10">Loading</h2>;
  }
  return (
    <div className="mt-6 columns-2 md:columns-3 lg:columns-4">
      {pictures?.map((picture) => (
        <PictureItem key={picture.id} picture={picture} />
      ))}
    </div>
  );
};

export default EventPicturesList;
