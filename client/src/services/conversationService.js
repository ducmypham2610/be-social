import { API_GET_CONVERSATION } from "../config/API-config";
import axiosClient from "./http-common";

export const getConversations = async (userId) => {
    return axiosClient.get(API_GET_CONVERSATION + ""+ userId);
}

export const getConversationOfTwoUsers = async (userId, friendId) => {
    return axiosClient.get(API_GET_CONVERSATION + "find/" + userId + "/" + friendId);
}