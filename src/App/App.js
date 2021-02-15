import React from "react";
import SearchPanel from "../components/SearchPanel";
import ListTitle from "../components/ListTitle";
import TodoList from "../components/TodoList";
import AddItem from "../components/AddItem";
import { connect } from "react-redux";
import "./App.css";
import {
  setFilterAction,
  setTermAction,
  setTodoDataAction,
} from "../redux/actions/appActions/actionCreators";
let maxId = 0;
function App(props) {
  const { setTodoData, setTerm, setFilter, todoData, term, filter } = props;
  const newTodo = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: maxId++,
    };
  };
  const deleteId = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const fixedTodoData = [
      ...todoData.slice(0, idx),
      ...todoData.slice(idx + 1),
    ];
    setTodoData(fixedTodoData);
  };
  const search = (arr, term) => {
    if (term.length === 0) return arr;
    return arr.filter((el) => el.label.toLowerCase().indexOf(term) > -1);
  };

  const onSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setTerm(value);
  };
  const addTodo = (text) => {
    const newItem = newTodo(text);
    const expandedTodoData = [...todoData, newItem];
    setTodoData(expandedTodoData);
  };

  const toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };
  const toggleDone = (id) => {
    setTodoData(toggleProp(todoData, id, "done"));
  };
  const toggleImportant = (id) => {
    setTodoData(toggleProp(todoData, id, "important"));
  };
  const handleFilter = (arr, filter) => {
    switch (filter) {
      case "all":
        return arr;
      case "active":
        return arr.filter((el) => !el.done);
      case "done":
        return arr.filter((el) => el.done);
      default:
        return arr;
    }
  };
  const onFilter = (e) => {
    const allBtn = document.getElementById("allFilter");
    const activeBtn = document.getElementById("activeFilter");
    const doneBtn = document.getElementById("doneFilter");
    const filterBtns = [allBtn, activeBtn, doneBtn];
    filterBtns.map((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    const filter = e.target.dataset.event;
    setFilter(filter);
  };

  const visibleData = handleFilter(search(todoData, term), filter);
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  //addTodo("Do bad thing");
  //addTodo("Do good thing");
  return (
    <div className="todoContainer">
      <div className="mainTodoList">
        <ListTitle done={doneCount} todo={todoCount} />
        <SearchPanel onFilter={onFilter} onSearch={onSearchChange} />
        <TodoList
          todoData={visibleData}
          onDelete={deleteId}
          onToggleDone={toggleDone}
          onToggleImportant={toggleImportant}
        />
        <AddItem onAdd={addTodo} />
      </div>
    </div>
  );
}
const mapState = (state) => {
  return {
    todoData: state.appReducer.todoData,
    term: state.appReducer.term,
    filter: state.appReducer.filter,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setTodoData: (newArr) => dispatch(setTodoDataAction(newArr)),
    setTerm: (t) => dispatch(setTermAction(t)),
    setFilter: (f) => dispatch(setFilterAction(f)),
  };
};
export default connect(mapState, mapDispatch)(App);
