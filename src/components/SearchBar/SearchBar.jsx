import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { ReactComponent as IconSearch } from "../../icons/search.svg";

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
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.searchFormButton}>
        <IconSearch />
        <span className={s.searchFormButtonLabel}>Search</span>
      </button>

      <input
        className={s.searchFormInput}
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search ..."
        onChange={handelQueryChange}
      />
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
