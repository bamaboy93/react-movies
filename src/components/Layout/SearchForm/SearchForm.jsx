import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import { HiOutlineSearch } from "react-icons/hi";
import {
  Button,
  Form,
  Input,
  MobileForm,
  MobileInput,
  FormButton,
} from "./SearchForm.styled";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(max-width: 1279px)",
  });

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
    <>
      {isMobile ? (
        <MobileForm onSubmit={handleSubmit}>
          <FormButton type="button">
            <HiOutlineSearch size={25} />
          </FormButton>
          <MobileInput
            type="text"
            value={query}
            autoComplete="off"
            placeholder="Search..."
            onChange={handelQueryChange}
          />
        </MobileForm>
      ) : (
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
      )}
    </>
  );
}
