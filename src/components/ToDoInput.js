import React from "react";

const ToDoInput = ({ value, onInputChange, onInputKeyUp, addTask }) => (
    <div className="toDoInput">
        <input
            type="text"
            value={value}
            onChange={onInputChange}
            onKeyUp={onInputKeyUp} />
        <button onClick={addTask}>Create</button>
    </div>
)


export default ToDoInput;