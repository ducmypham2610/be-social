import axios from "axios";
import {
  API_ADD_POST,
  API_GET_ALL_POSTS,
  API_ADD_COMMENT,
  API_LIKE_POST,
} from "../config/API-config";
import axiosClient from "./http-common";

export const getPosts = async () => {
  return axiosClient.get(API_GET_ALL_POSTS);
};

export const addPost = async (data) => {
  return axios.post(API_ADD_POST, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const likePost = async (id) => {
  return axiosClient.patch(API_LIKE_POST + "/" + id + "/likePost");
};

// add comment to post
export const addComment = async (text, userId, postId) => {
  return axiosClient.post(API_ADD_COMMENT, {
    text,
    userId,
    postId,
  });
};
