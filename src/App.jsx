//import "./App.css";
import { useGetAllPostQuery, useGetAllPostsQuery } from "./services/posts";

function App() {
  // get all data
  //const responseInfo = useGetAllPostQuery();
  //console.log(responseInfo)
  const { data, isError, isLoading, isFetching, isSuccess } =
    useGetAllPostQuery();
  //console.log(data);
  return (
    <>
      <h2>RTK Query (Get all data)</h2>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {isError && <h2>something went wrong</h2>}
      {isSuccess &&
        // get all data
        data.map((post) => (
          <div key={post.id}>
            <h2>
              {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      <div>
        <FetchSecondApi />
      </div>
    </>
  );
}

export const FetchSecondApi = () => {
  const { data, isError, isLoading, isFetching, isSuccess } =
    useGetAllPostsQuery();
  //console.log(data);
  return (
    <>
      <h2>RTK Query (Get Second Api data)</h2>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {isError && <h2>something went wrong</h2>}
      {isSuccess &&
        // get all data
        data.map((post) => (
          <div key={post.id}>
            <h2>
              {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
    </>
  );
};

export default App;
