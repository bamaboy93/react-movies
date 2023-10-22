import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useTopRatedQuery } from "../../hooks/useInfiniteQueries";

import Container from "../../components/Container";
import AlertMessage from "../../components/AlertMessage";
import PageTitle from "../../components/PageTitle";
import DataGrid from "../../components/DataGrid";
import DataGridItem from "../../components/DataGridItem";
import PaginationNotification from "../../components/PaginationNotification";
import ButtonUp from "../../components/Buttons/ButtonUp/ButtonUp";

export default function TopRatedView() {
  const { ref, inView } = useInView();
  const {
    data,
    isSuccess,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useTopRatedQuery();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      <Container>
        <PageTitle title="Top Rated movies" />
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
    </>
  );
}
