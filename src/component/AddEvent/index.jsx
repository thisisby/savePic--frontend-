import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { createEvent } from "../../api/Events/postEvent";
import storage from "../../utils/storage";
import { useNavigate } from "react-router-dom";
const AddEvent = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "CHUI",
    },
    {
      id: 2,
      title: "BATKEN",
    },
    {
      id: 3,
      title: "JALALABAT",
    },
    {
      id: 4,
      title: "ISSYKKUL",
    },
    {
      id: 5,
      title: "NARYN",
    },
    {
      id: 6,
      title: "OSH",
    },
    {
      id: 7,
      title: "TALAS",
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "Choose Location",
  });
  const [data, setData] = useState({
    title: "",
    creator: "",
    username: storage.getUser(),
  });

  const createEventHandler = async (event) => {
    event.preventDefault();

    const newData = {
      ...data,
      locationEnum: selectedEvent.title,
    };
    console.log(newData);
    const res = await createEvent(newData);
    if (res.status === 200) {
      navigate("/events");
    }
    console.log(res);
  };

  return (
    <div className="w-full flex justify-center">
      <form onSubmit={createEventHandler} className="w-full md:w-2/3 lg:w-1/3">
        <div className="text-left mb-4">
          <label htmlFor="title">Title</label>
          <input
            className="w-full border rounded-lg px-2 py-2 mt-2"
            placeholder="Enter label"
            type="text"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        <div className="text-left mb-4">
          <label htmlFor="title">Creator</label>
          <input
            className="w-full border rounded-lg px-2 py-2 mt-2"
            placeholder="Enter label"
            type="text"
            onChange={(e) => setData({ ...data, creator: e.target.value })}
          />
        </div>

        <div className="text-left mb-4 relative">
          <label htmlFor="username">Select Event</label> <br />
          <Listbox value={selectedEvent} onChange={setSelectedEvent}>
            <Listbox.Button className="w-full py-1.5 px-2 mt-2 text-left border rounded-lg">
              {selectedEvent.title}
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="border mt-2 py-1 rounded-lg cursor-pointer absolute w-full z-20 bg-white">
                <Listbox.Option value="0" className="p-2 hover:bg-green-200">
                  Select Event
                </Listbox.Option>
                {events.map((event) => (
                  <Listbox.Option
                    key={event.id}
                    value={event}
                    className="p-2 hover:bg-green-200"
                  >
                    {event.title}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
        </div>
        <button
          onClick={createEventHandler}
          className="mt-4 bg-green-200 w-full py-2 rounded-lg"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
