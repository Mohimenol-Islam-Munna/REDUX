import React from "react";
import { useSelector, useDispatch } from "react-redux";
import useAllPost from "./fetchData/useAllPost";
import { createPost, updatePost } from "./store/actions/postAction";
import formData from "./formData.json";

import "./App.css";

function App() {
  const postState = useSelector((store) => store.post);
  const dispatch = useDispatch();

  // fetch post data
  const allPost = useAllPost();

  console.log("postState in app.js ::", postState.postStateData);

  // create post handler
  const createPostHandler = (data) => {
    dispatch(createPost(data));
  };

  // update post handler
  const updatePostHandler = (id) => {
    const updateData = {
      body: "i am a full stack developer and also a react native developer",
      title: "my new updated data",
    };

    dispatch(updatePost(id, updateData));
  };

  // post loading
  if (postState.isAllPostLoading) {
    return <h2>Loading Post ...</h2>;
  }

  return (
    <div className="App">
      <h2>REACT REDUX A2Z PRACTICE</h2>
      <h3>Data Name: {postState?.postStateTitle}</h3>

      {/* show product  */}
      <div className="all_post">
        <h2>Show All Post</h2>
        {postState.postStateData?.map((post) => (
          <div key={post.id}>
            <h3>Post Title : {post.title}</h3>
          </div>
        ))}
      </div>

      {/* create post  */}
      <div className="create_post">
        <button onClick={() => createPostHandler(formData)}>
          Create New Post
        </button>
      </div>

      {/* update post  */}
      <div className="update_post">
        <button onClick={() => updatePostHandler(1)}>Update Post</button>
      </div>
    </div>
  );
}

export default App;
