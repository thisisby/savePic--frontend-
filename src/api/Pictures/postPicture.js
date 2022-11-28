import { useMutation, useQuery } from "react-query";
import axios from "../../config/AxiosConfig";

const createPicture = (data) => {
  let label = data.get("label");
  let username = data.get("username");
  let eventId = parseInt(data.get("eventId"));
  let file = data.get("file");
  try {
    const res = axios.post(`/picture/save`, data);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const useCreatePicture = ({ data, config }) => {
  return useMutation({
    mutationFn: createPicture,
    onSuccess: () => {
      console.log("success");
    },
  });
};
