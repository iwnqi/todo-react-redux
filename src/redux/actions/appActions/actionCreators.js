import { SET_FILTER, SET_TERM, SET_TODODATA } from "./actionTypes";

export const setTodoDataAction = (payload) => {
  return {
    type: SET_TODODATA,
    payload,
  };
};
export const setTermAction = (payload) => {
  return {
    type: SET_TERM,
    payload,
  };
};
export const setFilterAction = (payload) => {
  return {
    type: SET_FILTER,
    payload,
  };
};
