import { SET_LABEL } from "../actions/addItemActions/actionTypes";
const initState = {
  label: "",
};
export default function addItemReducer(state = initState, action) {
  if (action.type === SET_LABEL) {
    return {
      label: action.payload,
    };
  }

  return state;
}
