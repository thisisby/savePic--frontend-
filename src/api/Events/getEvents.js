import axios from "../../config/AxiosConfig";

export const getEvents = () => {
  try {
    const res = axios.get(`/event`);
    return res;
  } catch (error) {
    return error;
  }
};
