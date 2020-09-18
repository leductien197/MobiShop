import * as ActionTypes from "./actionTypes";

export const addUser = (user) => {
  return {
    type: ActionTypes.ADD_USER,
    user,
  };
};

export const removePerson = (user) => {
  return {
    tye: ActionTypes.REMOVE_USER,
    user,
  };
};
