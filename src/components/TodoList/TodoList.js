import React from "react";
import ListItem from "../ListItem";
import "./TodoList.css";
const TodoList = ({ todoData, onDelete, onToggleDone, onToggleImportant }) => {
  const listItems = todoData.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="list-group-item todoListItem" key={id}>
        <ListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });
  return <ul className="todoList">{listItems}</ul>;
};
export default TodoList;
