import {
  API_LOGIN,
  API_GET_USER,
  API_GET_GENDERED_USERS,
  API_GET_MATCHES,
  API_USER_UPDATE,
  API_HANDLE_SWIPE,
} from "../config/API-config";
import axiosClient from "./http-common";

export const getUser = async (id) => {
  return axiosClient.get(API_GET_USER, {
    params: { userId: id },
  });
};

export const getGenderedUsers = async (gender, id) => {
  return axiosClient.get(API_GET_GENDERED_USERS, {
    params: { gender, id },
  });
};

export const updateMatches = async (userId, swipedUserId) => {
  return axiosClient.put(API_HANDLE_SWIPE, {
    userId,
    swipedUserId,
  });
};
