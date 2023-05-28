//import "./App.css";
import { useState } from "react";
import { useGetAllPostQuery } from "./services/posts";

function App() {
  const [isPost, setIsPost] = useState(true);
  const responseInfo = useGetAllPostQuery(null, { skip: isPost });
  console.log(responseInfo);
  console.log(responseInfo.isError);
  // const { data, error, isLoading, isFetching, isSuccess } = useGetAllPostQuery(
  //   null,
  //   { skip: isPost }
  // );
  return (
    <>
      <div>
        <h2>RTK Query (Get all data)</h2>
        {responseInfo.isLoading && <h2>...Loading</h2>}
        {responseInfo.isFetching && <h2>...Fetching</h2>}
        {/* {responseInfo.isError && (
          <div>
            {responseInfo.error.status}{" "}
            {JSON.stringify(responseInfo.error.data)}
          </div>
        )} */}
        {responseInfo.isError && "status" in responseInfo.error ? (
          <h2>Something went wrong</h2> //or-->responseInfo.error.data.message
        ) : null}
        {responseInfo.isSuccess &&
          // get all data
          responseInfo.data.map((post) => (
            <div key={post.id}>
              <h2>
                {post.id} {post.title}
              </h2>
              <p>{post.body}</p>
              <hr />
            </div>
          ))}
        <button onClick={() => setIsPost(false)}>Fetch Data</button>
      </div>
    </>
  );
}

export default App;
