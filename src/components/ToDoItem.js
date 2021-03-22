import React from "react";

const ToDoItem = ({ task, index, onCheckboxChange, removeTask }) => (
    <li key={index}
        className={task.isDone ? "done" : ""}>
        {task.name}
        <input
            type="checkbox"
            checked={task.isDone}
            data-index={index}
            onChange={onCheckboxChange}
        />
        <button data-index={index} onClick={removeTask}>&#10060;</button>
    </li>
)
export default ToDoItem;