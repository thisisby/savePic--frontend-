import { useState } from "react";
import { getPicture } from "../../../api/Pictures/getPicture";

const SearchBar = ({ setPictureLabel, loading, setLoading }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (event) => {
    event.preventDefault();
    setLoading("PENDING");
    getPicture(searchValue)
      .then((response) => {
        setPictureLabel(response.data);
        if (response.data.length === 0) {
          setLoading("NOT FOUND");
        } else {
          setLoading("OK");
        }
      })
      .catch((err) => {
        setPictureLabel(null);
        setLoading("NOT FOUND");
        console.log(err);
      });
  };

  return (
    <form
      className="flex justify-center items-stretch"
      onSubmit={searchHandler}
    >
      <input
        className="border px-3 py-2 w-full md:w-2/3 lg:w-1/3 focus:outline-none rounded-tl-lg rounded-bl-lg"
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="Enter your number"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="border border-l-0 px-3 bg-green-100 rounded-tr-lg rounded-br-lg"
        onClick={searchHandler}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
