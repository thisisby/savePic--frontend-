import { loginUserClient } from "../Users/authClientUser";
import storage from "../../utils/storage";

export const login = async (data) => {
  const response = await loginUserClient(data);
  storage.setToken(response.data.jwtToken);
  return response;
};

export const isLogged = () => {
  let user = storage.getToken();
  if (user) {
    return true;
  }
  return false;
};

export const userRole = () => {
  let role = storage.getRole();
  if (role) {
    return role;
  }
  return null;
};

export const logout = () => {
  storage.clearToken();
  window.location.assign("http://localhost:3000/");
};

export const loggedUser = () => {
  let user = storage.getUser();
  if (user) {
    return user;
  }
  return false;
};
