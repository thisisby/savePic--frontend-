import axios from "../../config/AxiosConfig";

export const getPicturesByEventId = (eventId) => {
  try {
    const res = axios.get(`/picture/findByEventId`, {
      params: {
        id: eventId,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};
