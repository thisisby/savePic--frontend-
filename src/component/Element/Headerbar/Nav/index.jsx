import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = ({ LinkList }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const ButtonList = LinkList.map((LinkItem) => {
    if (LinkItem.isClientRoute) {
      return (
        <Link
          className={`border-b-2 hover:border-b-green-300 transition duration-300 ${
            currentPath === LinkItem.link
              ? " border-b-green-300"
              : "border-b-white"
          }`}
          key={LinkItem.id}
          to={LinkItem.link}
        >
          {LinkItem.text}
        </Link>
      );
    }
    return (
      <a href={LinkItem.link} key={LinkItem.id}>
        {LinkItem.text}
      </a>
    );
  });
  return <div className="flex items-center gap-x-3">{ButtonList}</div>;
};

export default Nav;
