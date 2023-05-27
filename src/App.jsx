//import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
} from "./services/posts";

function App() {
  // Get all data
  //const responseInfo = useGetAllPostQuery();
  //console.log("data", responseInfo);
  // const { data, isError, isFetching, isLoading, isSuccess } =
  //   useGetPostByIdQuery(7);
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetPostByLimitQuery(5, {
      pollingInterval: 3000,
    });
  return (
    <>
      <div>
        <h2>RTK Query Get single data by Id</h2>
        {isLoading && <h2>...Loading</h2>}
        {isFetching && <h2>...Fetching</h2>}
        {isError && <h2>something went wrong</h2>}
        {isSuccess && (
          // get all data
          // <div>
          //   <div>
          //     <h2>
          //       {data.id} {data.title}
          //     </h2>
          //     <p>{data.body}</p>
          //   </div>
          // </div>
          <div>
            {
              // get limited data
              data.map((post, i) => (
                <div key={i}>
                  <h2>
                    {post.id} {post.title}
                  </h2>
                  <p>{post.body}</p>
                  <hr />
                </div>
              ))
            }
          </div>
        )}
      </div>
    </>
  );
}

export default App;
