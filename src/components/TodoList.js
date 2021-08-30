// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const handleClick = () => {
    props.handleRm();
  };

  return (
    <div className="todo-list">
      {props.tasks.map(task => (
        <Todo handleComplete={props.handleComplete} key={task.id} task={task} />
      ))}
      <button onClick={handleClick} className="button completed">
        Clear finished tasks.
      </button>
    </div>
  );
};

export default TodoList;
