import {
  SET_FILTER,
  SET_TERM,
  SET_TODODATA,
} from "../actions/appActions/actionTypes";

const initState = {
  todoData: [],
  term: "",
  filter: "all",
};
export default function appReducer(state = initState, action) {
  switch (action.type) {
    case SET_TODODATA:
      return { ...state, todoData: action.payload };
    case SET_TERM:
      return { ...state, term: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
