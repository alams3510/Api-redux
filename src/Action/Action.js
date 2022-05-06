import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "../Types/Types";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        console.log(users);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errormsg = error.message;
        // error.message is the error message
        dispatch(fetchUsersFailure(errormsg));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};
