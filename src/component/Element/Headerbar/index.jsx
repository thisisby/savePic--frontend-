import { Link } from "react-router-dom";
import { isLogged, logout } from "../../../api/Auth/auth";
import Nav from "./Nav";

const Headerbar = ({ nav }) => {
  const logged = isLogged();
  return (
    <div className="w-full flex justify-between items-center border-b py-3 px-4 md:px-20">
      <div className="flex items-center gap-x-10">
        <Link className="font-bold" to="/">
          Logo
        </Link>
        <Nav LinkList={nav.LinkList} />
      </div>
      <div className="gap-x-2 flex items-center">
        {logged ? (
          <>
            <Link
              className="px-3 py-1 border border-green-200 rounded-xl hover:bg-green-200 transition duration-300"
              to="/upload-image"
            >
              Upload picture
            </Link>
            <button
              onClick={logout}
              className="px-3 py-1 border border-green-200 rounded-xl hover:bg-green-200 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              className="px-3 py-1 border border-green-200 rounded-xl hover:bg-green-200 transition duration-300"
              to="/sign-up"
            >
              Sign up
            </Link>
            <Link
              className="px-3 py-1 border border-green-200 rounded-xl hover:bg-green-200 transition duration-300"
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Headerbar;
