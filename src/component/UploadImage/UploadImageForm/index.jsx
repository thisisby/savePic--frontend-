import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { getEvents } from "../../../api/Events/getEvents";
import {
  createPicture,
  createPost,
  useCreatePicture,
} from "../../../api/Pictures/postPicture";
import storage from "../../../utils/storage";

const UploadImageForm = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "Choose Event",
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    label: "",
    file: null,
  });
  const createPicture = useCreatePicture({ data: data });
  useEffect(() => {
    setLoading(true);
    getEvents()
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createPictureHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    let form_data = new FormData();
    form_data.append("file", data.file);
    form_data.append("label", data.label);
    form_data.append("eventId", selectedEvent.id);
    form_data.append("username", storage.getUser());

    const res = await createPicture.mutateAsync(form_data);
    setLoading(false);
    console.log(res);
  };

  if (loading) {
    return <h2 className="text-xl p-10">Loading</h2>;
  }
  return (
    <div className="w-full flex justify-center">
      <form
        encType="multipart/form-data"
        onSubmit={createPictureHandler}
        className="w-full md:w-2/3 lg:w-1/3"
      >
        <div className="text-left mb-4">
          <label htmlFor="username">Label</label>
          <input
            className="w-full border rounded-lg px-2 py-2 mt-2"
            placeholder="Enter label"
            type="text"
            onChange={(e) => setData({ ...data, label: e.target.value })}
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
        <div className="text-left">
          <label htmlFor="password">Select Picture</label>
          <input
            className="w-full border border-dashed rounded-lg px-2 py-2 mt-2"
            placeholder="Enter password"
            type="file"
            onChange={(e) => setData({ ...data, file: e.target.files[0] })}
          />
        </div>
        <button
          onClick={createPictureHandler}
          className="mt-4 bg-green-200 w-full py-2 rounded-lg"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadImageForm;
