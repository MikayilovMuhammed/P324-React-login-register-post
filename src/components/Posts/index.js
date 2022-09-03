import React from "react";
import { usePostsContext } from "../../context/Post";
import { postService } from "../APIs/Services/Posts";

function Posts() {
  const [{ posts, setPosts }] = usePostsContext();

  const [newPost, setNewPost] = React.useState({
    title: "",
    body: "",
  });

  const handleChangePosts = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });

    // const obj = {
    //   user: "Test",
    // };

    // const key = "user"; // Keyword-u götürmək üçün

    // // Obyektin çağrılma növləri (Destruct olmadan)
    // console.log(obj.user); // 1
    // console.log(obj["user"]); // 2
    // console.log(obj[key]);
  };

  const handleClick = () => {
    postService.createNewPost(newPost);
    postService.getAllPosts().then(({ data }) => setPosts(data));
  };

  return (
    <>
      <input
        name="title"
        placeholder="Write title"
        onChange={handleChangePosts}
      />
      <input
        name="body"
        placeholder="Write body"
        onChange={handleChangePosts}
      />
      <button onClick={handleClick}>Create New Post</button>
      <ul>
        {posts.map(({ title, id }) => (
          <li key={id}>
            <h2>
              {id} - {title}
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
