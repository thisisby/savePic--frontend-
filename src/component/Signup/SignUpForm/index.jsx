import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateClientUser } from "../../../api/Users/createClientUser";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const createUserClient = useCreateClientUser({ data: data });

  const registrationHandler = async (event) => {
    event.preventDefault();
    const res = await createUserClient.mutateAsync(data);
    console.log(res);
    if (res.status !== 201) {
      console.log("Wrong");
    } else {
      setData({
        username: "",
        email: "",
        password: "",
      });
      navigate("/login");
    }
  };
  return (
    <div className="w-full flex justify-center">
      <form onSubmit={registrationHandler} className="w-full md:w-2/3 lg:w-1/3">
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
        <div className="text-left mb-4">
          <label htmlFor="email">Email</label>
          <input
            className="w-full border rounded-lg px-2 py-2 mt-2"
            placeholder="Enter email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="text-left">
          <label htmlFor="password">Password</label>
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
          onClick={registrationHandler}
          className="mt-4 bg-green-200 w-full py-2 rounded-lg"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
