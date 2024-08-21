import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPost } from "../store/actions/postAction";

const useAllPost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);
};

export default useAllPost;
