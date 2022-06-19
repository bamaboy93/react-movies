import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { ReactComponent as IconSearch } from "../../icons/search.svg";

import s from "./SearchBar2.module.scss";

export default function Searchbar({ onSubmit }) {
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
    <div className={s.searchBox}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.search}
          type="text"
          value={query}
          autoComplete="off"
          placeholder="Search ..."
          onChange={handelQueryChange}
        />
        <span className={s.bar}></span>
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
