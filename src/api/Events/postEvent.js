
import axios from "../../config/AxiosConfig";

export const createEvent = (data) => {
  try {
    const res = axios.post("/event/save", data);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
