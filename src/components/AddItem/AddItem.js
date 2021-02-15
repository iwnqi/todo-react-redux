import React from "react";
import "./AddItem.css";
import { connect } from "react-redux";
import { setLabel } from "../../redux/actions/addItemActions/actionCreators";
function AddItem(props) {
  const { label, setLabel } = props;
  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onAdd(label);
    setLabel("");
  };

  return (
    <form className="addItem" onSubmit={onSubmit}>
      <input
        value={label}
        type="text"
        className="form-control"
        onChange={onLabelChange}
        placeholder="write here"
      ></input>
      <button type="submit">Add new thing to do</button>
    </form>
  );
}
function mapState(state) {
  return {
    label: state.addItemReducer.label,
  };
}
function mapDispatch(dispatch) {
  return {
    setLabel: (l) => dispatch(setLabel(l)),
  };
}
export default connect(mapState, mapDispatch)(AddItem);
