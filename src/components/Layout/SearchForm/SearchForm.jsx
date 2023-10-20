import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase, SearchButton } from "./SearchForm.styled";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handelQueryChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.warn("Please, enter your query !");
      return;
    }
    navigate({
      pathname: "/search",
      search: `query=${query}`,
    });

    setQuery("");
  };

  return (
    <Search onSubmit={handleSubmit}>
      <StyledInputBase
        value={query}
        onChange={handelQueryChange}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <SearchButton aria-label="search" type="submit">
        <SearchIcon />
      </SearchButton>
    </Search>
  );
}
