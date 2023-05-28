//import "./App.css";
import { useState } from "react";
import { useGetAllPostQuery } from "./services/posts";

function App() {
  // Get all data
  const [page, setPage] = useState(1);
  const { data, isLoading, isSuccess, isError } = useGetAllPostQuery(page);
  //console.log(data);

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
