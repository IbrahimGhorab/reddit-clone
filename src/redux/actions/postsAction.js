export const getAllPosts = (posts) => {
  return {
    type: "GET_ALL_POSTS",
    payload: posts,
  };
};

export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};
