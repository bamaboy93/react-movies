import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchQuery } from "../../hooks/useInfiniteQueries";
import { useSearchParams } from "react-router-dom";
import { Container } from "@mui/material";

import AlertMessage from "../../components/AlertMessage";
import PageTitle from "../../components/PageTitle";
import DataGrid from "../../components/DataGrid";
import DataGridItem from "../../components/DataGridItem";
import PaginationNotification from "../../components/PaginationNotification";
import ButtonUp from "../../components/Buttons/ButtonUp/ButtonUp";

export default function QueryPage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query"));
  const { ref, inView } = useInView();
  const {
    data,
    isSuccess,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchQuery(searchQuery);

  useEffect(() => {
    const newSearch = searchParams.get("query");
    if (searchQuery === newSearch) {
      return;
    }
    setSearchQuery(newSearch);
  }, [searchParams, searchQuery]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <Container>
      <PageTitle title={`Results for "${searchQuery}"`} />
      {isError && (
        <AlertMessage message="500 Internal Server Error! Try again later." />
      )}
      <DataGrid>
        {isSuccess &&
          data.pages.map((page) =>
            page.results.map((result) => (
              <DataGridItem key={result.id} movie={result} />
            ))
          )}
      </DataGrid>
      <div ref={ref}>
        <PaginationNotification
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
      <ButtonUp />
    </Container>
  );
}
