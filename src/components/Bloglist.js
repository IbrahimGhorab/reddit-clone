import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAllPosts } from "../redux/actions/postsAction";
import axios from "axios";
import Blog from "./Blog";

const Bloglist = () => {
  const postList = useSelector((state) => state.postReducer);
  console.log(postList);
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await axios.get("https://api.tawwr.com/posts");
    dispatch(getAllPosts(response.data.data));
  };

  useEffect(() => {
    getData();
  }, [postList]);

  return (
    <div className="mt-5">
      {postList.map((post, idx) => (
        <Blog key={idx} post={post} getData={getData} />
      ))}
    </div>
  );
};

export default Bloglist;
