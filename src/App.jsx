//import "./App.css";
import { useGetAllPostQuery } from "./services/posts";

function App() {
  // Get all data
  //const responseInfo = useGetAllPostQuery();
  //console.log("data", responseInfo);
  const { data, isError, isLoading, isFetching, isSuccess } =
    useGetAllPostQuery();
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default App;
