import React from "react";
import "./ListTitle.css";
function ListStatus({ todo, done }) {
  return (
    <span className="listStatus">
      {todo} more to do, {done} done
    </span>
  );
}
export default ListStatus;
