//import "./App.css";
import {
  useGetAllPostQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/posts";

function App() {
  // Get all data
  //const responseInfo = useGetAllPostQuery();
  //console.log("data", responseInfo);
  const { data, isError, isLoading, isFetching, isSuccess } =
    useGetAllPostQuery();
  const [deletePost] = useDeletePostMutation();
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
              <button onClick={() => deletePost(post.id)}>Delete Post</button>
              <hr />
            </div>
          ))}
        <div>
          <AddPost />
        </div>
      </div>
    </>
  );
}

export const AddPost = () => {
  const [addPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const newPost = {
    id: 13,
    title: "est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi ",
    userId: 1,
  };

  const updatePostData = {
    id: 13,
    title: "Manpreet10 updated",
    body: "Singh Aulakh10 updated",
    userId: 1,
  };

  const addHandler = async () => {
    await addPost(newPost);
  };

  const updateHandler = async () => {
    await updatePost(updatePostData);
  };

  return (
    <>
      <button onClick={addHandler}>Add New Post</button>
      <button onClick={updateHandler}>Update Post</button>
    </>
  );
};

export default App;
