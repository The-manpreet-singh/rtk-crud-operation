//import "./App.css";
import { useCallback, useState, useEffect } from "react";
import { useGetAllPostQuery, usePrefetch } from "./services/posts";

function App() {
  // Get all data
  const [page, setPage] = useState(1);

  const [hasPrefetchedAll, setHasPrefetchedAll] = useState(false); //for automatic prfetch data for all next page

  const { data, isLoading, isSuccess, isError } = useGetAllPostQuery(page);

  const prefetchPage = usePrefetch("getAllPost");
  //console.log(data?.totalPages);
  const prefetchNext = useCallback(() => {
    prefetchPage(page + 1);
  }, [prefetchPage, page]);

  useEffect(() => {
    if (page !== data?.totalPages) {
      prefetchNext();
    }
  }, [data, page, prefetchNext]); //for automatic prfetch data for next page

  // useEffect(() => {
  //   if (!hasPrefetchedAll) {
  //     if (data && data.totalPages > 1) {
  //       [...new Array(data.totalPages)].forEach((page, index) => {
  //         if (index >= data.totalPages) return;
  //         prefetchPage(index + 1, { force: true });
  //       });
  //       setHasPrefetchedAll(true);
  //     }
  //   }
  // }, [data, page, prefetchPage, hasPrefetchedAll]); //for automatic prfetch data for all next page

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>oh no, an error!</div>;

  return (
    <>
      <div>
        <h2>RTK Query (Get all data)</h2>
        {isSuccess &&
          // get all data
          data.data.map((post) => (
            <div key={post._id}>
              <h4>{post._id}</h4>
              <p>{post.name}</p>
              <p>{post.trips}</p>
              <hr />
            </div>
          ))}
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          onMouseEnter={prefetchNext}
          disabled={page === data.totalPages}
        >
          Next
        </button>
        <div> {`${page} / ${data.totalPages}`}</div>
      </div>
    </>
  );
}

export default App;
