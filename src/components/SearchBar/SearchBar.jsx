import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import s from "./SearchBar.module.scss";

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
    <div className={s.positionBox}>
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
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
