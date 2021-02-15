import React from "react";
import "./ListItem.css";
function ListItem({
  label,
  onDelete,
  onToggleDone,
  onToggleImportant,
  important,
  done,
}) {
  let classNames = "listItem";
  if (done) {
    classNames += " done";
  }
  if (important) {
    classNames += " important";
  }
  return (
    <span className={classNames}>
      <span className="listItemLabel" onClick={onToggleDone}>
        {label}
      </span>
      <div>
        <button onClick={onDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
        <button onClick={onToggleImportant}>
          <i className="fa fa-exclamation"></i>
        </button>
      </div>
    </span>
  );
}

export default ListItem;
