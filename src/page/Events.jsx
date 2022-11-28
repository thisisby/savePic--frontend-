import React from "react";
import MainTemplate from "../component/Layout/Main";
import Header from "../component/Element/Header";
import EventList from "../component/Event/EventList";

const Events = () => {
  const EventsContent = (
    <>
      <Header text="Events" />
      <EventList />
    </>
  );

  return <MainTemplate contents={EventsContent} />;
};

export default Events;
