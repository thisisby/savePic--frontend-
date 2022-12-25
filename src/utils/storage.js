const storagePrefix = "save_pic_";

const storage = {
  // token
  getToken: () => {
    return window.localStorage.getItem(`${storagePrefix}token`);
  },
  setToken: (t) => {
    let token = `Bearer ${t}`;
    window.localStorage.setItem(`${storagePrefix}token`, token);
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },

  // user
  getUser: () => {
    return window.localStorage.getItem(`${storagePrefix}user`);
  },
  setUser: (user) => {
    window.localStorage.setItem(`${storagePrefix}user`, user);
  },
  setRole: (user) => {
    window.localStorage.setItem(`${storagePrefix}role`, user);
  },
  getRole: () => {
    return window.localStorage.getItem(`${storagePrefix}role`);
  },
};

export default storage;
