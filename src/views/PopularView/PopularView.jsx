import { useState, useEffect } from "react";
import { getPopularMovies } from "../../services/api/movies-api";
import Status from "../../services/status";
import { Container } from "@mui/material";
import AlertMessage from "../../components/AlertMessage";
import PageTitle from "../../components/PageTitle";
import DataGrid from "../../components/DataGrid";
import DataGridItem from "../../components/DataGridItem";

import ButtonUp from "../../components/Buttons/ButtonUp/ButtonUp";

export default function PopularView() {
  const [popularMovies, setPopularMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    getPopularMovies()
      .then((data) => {
        setPopularMovies(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [error]);

  return (
    <>
      {status === Status.PENDING}

      {status === Status.REJECTED && (
        <AlertMessage message="500 Internal Server Error! Try again later." />
      )}
      <Container>
        {status === Status.RESOLVED && (
          <>
            <PageTitle title="Popular movies" />

            {popularMovies && (
              <DataGrid>
                {popularMovies.map((result) => (
                  <DataGridItem key={result.id} movie={result} />
                ))}
              </DataGrid>
            )}
          </>
        )}

        <ButtonUp />
      </Container>
    </>
  );
}
