import { useState } from "react";
import { toast } from "react-toastify";
import { HiOutlineSearch } from "react-icons/hi";
// import PropTypes from "prop-types";

import s from "./SearchBar.module.scss";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handelQueryChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.warn("Please, enter your query !");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={s.searchBar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="button" className={s.searchFormButton}>
          <HiOutlineSearch />
        </button>
        <input
          className={s.searchFormInput}
          type="text"
          value={query}
          autoComplete="off"
          placeholder="Search ..."
          onChange={handelQueryChange}
        />
      </form>
    </div>
  );
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
