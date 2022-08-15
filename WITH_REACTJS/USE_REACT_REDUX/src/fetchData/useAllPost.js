import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPost } from "../store/actions/postAction";

const useAllPost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return;
};

export default useAllPost;
