import React from "react";
import { postService } from "../../components/APIs/Services/Posts";

const PostsContext = React.createContext([]);

function PostsProvider({ children }) {
  const [isTrue, setIsTrue] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    postService.getAllPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <PostsContext.Provider value={[{ isTrue, setIsTrue, posts, setPosts }]}>
      {children}
    </PostsContext.Provider>
  );
}

const usePostsContext = () => {
  const postsContext = React.useContext(PostsContext);
  return postsContext;
};

export { usePostsContext, PostsProvider };
