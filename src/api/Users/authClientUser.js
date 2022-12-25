import axios from "../../config/AxiosConfig";
import storage from "../../utils/storage";

export const loginUserClient = (data) => {
  try {
    const res = axios.post("/user/authenticate", data);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const userRole = () => {
  try {
    const res = axios.post("/user/login", null, {
      params: {
        username: storage.getUser(),
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
