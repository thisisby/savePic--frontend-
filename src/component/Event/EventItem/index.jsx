import React from "react";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  const { title, creator, createdAt, location } = event;
  const eventDate = new Date(createdAt.join(" "))
    .toUTCString()
    .substring(0, 11);
  return (
    <Link className="border rounded-lg flex items-center flex-col px-3 py-10">
      <h2 className="text-xl font-bold border-b-2 w-fit pb-2">{title}</h2>
      <div className="text-sm mt-2 text-gray-500 text-left">
        <p className="mb-1 capitalize">
          Location: <span className="text-black">{location.location}</span>
        </p>
        <p className="mb-1">
          Organizator: <span className="text-black">{creator}</span>
        </p>
        <p>
          Date: <span className="text-black">{eventDate}</span>
        </p>
      </div>
    </Link>
  );
};

export default EventItem;
