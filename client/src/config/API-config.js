const API_BASE_URL = "http://localhost:8000/";

export const API_LOGIN = API_BASE_URL + "users/login";
export const API_USER_UPDATE = API_BASE_URL + "users/update";
export const API_GET_USER = API_BASE_URL + "users/user";
export const API_GET_GENDERED_USERS = API_BASE_URL + "users/gendered-users";
export const API_GET_MATCHES = API_BASE_URL + "users/get-matches";

export const API_HANDLE_SWIPE = API_BASE_URL + "swipe/like";

export const API_ADD_POST = API_BASE_URL + "posts";
export const API_GET_ALL_POSTS = API_BASE_URL + "posts";

export const API_SEND_MESSAGE = API_BASE_URL + "messages";
export const API_GET_MESSAGE_FROM_CONVERSATION = API_BASE_URL + "messages/" // :conversationID

export const API_START_CONVERSATION = API_BASE_URL + "conversations/";
export const API_GET_CONVERSATION = API_BASE_URL + "conversations/" // :userID
export const API_GET_CONVERSATION_OF_TWO_USERS = API_BASE_URL + "conversations/" //:fristUserId/:secondUserId

export const API_ADD_COMMENT = API_BASE_URL + "comments"