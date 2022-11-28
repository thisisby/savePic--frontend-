import { useMutation, useQuery } from "react-query";
import axios from "../../config/AxiosConfig";

const createClientUser = (data) => {
  try {
    const res = axios.post("/user/registerClient", data);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const useCreateClientUser = ({ data, config }) => {
  return useMutation({
    mutationFn: createClientUser,
    onSuccess: () => {
      console.log("success");
    },
  });
};
