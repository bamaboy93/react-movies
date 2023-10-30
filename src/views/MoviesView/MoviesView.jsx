import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { getGenres, getSortedMovies } from "../../services/api/movies-api";
import Status from "../../services/status";

import DataGrid from "../../components/DataGrid";
import DataGridItem from "../../components/DataGridItem";
import GenreTabs from "../../components/GenreTabs";

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [value, setValue] = useState(35);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setStatus(Status.PENDING);
    getGenres()
      .then((data) => {
        setGenres(data);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);

  useEffect(() => {
    setStatus(Status.PENDING);
    getSortedMovies(value)
      .then((data) => {
        setMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [value, error]);

  return (
    <Container>
      {genres && (
        <GenreTabs genres={genres} value={value} onChange={handleChange}>
          {movies && (
            <DataGrid>
              {movies.map((result) => (
                <DataGridItem key={result.id} movie={result} />
              ))}
            </DataGrid>
          )}
        </GenreTabs>
      )}
    </Container>
  );
}
