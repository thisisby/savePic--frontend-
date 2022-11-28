import axios from "../../config/AxiosConfig";

export const loginUserClient = (data) => {
  try {
    const res = axios.post("/user/authenticate", data);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
