import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../api/Auth/auth";
import { userRole } from "../../../api/Users/authClientUser";
import storage from "../../../utils/storage";

const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const authHandler = async (event) => {
    event.preventDefault();
    const res = await login(data);
    console.log(res);
    if (res.status === 200) {
      storage.setUser(data.username);
      const user = await userRole();
      if (user.status === 200) {
        storage.setRole(user.data);
        navigate("/");
      }
    }
  };
  return (
    <div className="w-full flex justify-center">
      <form onSubmit={authHandler} className="w-full md:w-2/3 lg:w-1/3">
        <div className="text-left mb-4">
          <label htmlFor="username">Username</label>
          <input
            className="w-full border rounded-lg px-2 py-2 mt-2"
            placeholder="Enter username"
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="text-left">
          <label htmlFor="username">Password</label>
          <input
            className="w-full border rounded-lg px-2 py-2 mt-2"
            placeholder="Enter password"
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            autoComplete="on"
          />
        </div>
        <button
          onClick={authHandler}
          className="mt-4 bg-green-200 w-full py-2 rounded-lg"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
