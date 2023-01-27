import { useState } from "react";

import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { HiOutlineSearch } from "react-icons/hi";
import { Button, Form, Input } from "./SearchForm.styled";

export default function SearchForm({ onSubmit }) {
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
    <Form onSubmit={handleSubmit}>
      <Button type="button">
        <HiOutlineSearch size={25} />
      </Button>
      <Input
        type="text"
        value={query}
        autoComplete="off"
        placeholder="Search..."
        onChange={handelQueryChange}
      />
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
