import React from "react";
import ListStatus from "./ListStatus";
import "./ListTitle.css";
const ListTitle = (props) => {
  return (
    <div className="todoListHeader">
      <h1>Todo list</h1>
      <ListStatus {...props} />
    </div>
  );
};
export default ListTitle;
