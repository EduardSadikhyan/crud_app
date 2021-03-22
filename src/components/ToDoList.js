import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ items, onCheckboxChange, removeTask }) => (
    <ul className="todoList">
        {items.map((item, index) => <ToDoItem 
            key={index}
            task={item}
            index={index}
            onCheckboxChange={onCheckboxChange}
            removeTask={removeTask}
        />
        )}
    </ul>
)
export default ToDoList;