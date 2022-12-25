import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Pictures from "./page/Pictures";
import Events from "./page/Events";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import UploadImage from "./page/UploadImage";
import AddEventPage from "./page/AddEvent";
import EventPictures from "./page/EventPictures";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/upload-image" element={<UploadImage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/events/:eventId" element={<EventPictures />} />
      </Routes>
    </Router>
  );
}

export default App;
