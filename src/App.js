import React, { Component } from 'react';
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

class App extends Component {
  state = {
    newTaskName: "",
    tasks: [
      {
        name: "go to gym",
        isDone: false
      },
      {
        name: "learn time",
        isDone: false
      }
    ]
  }

  addTask = () => {
    if (!this.state.newTaskName) return;
    const tasks = [...this.state.tasks];
    tasks.push({
      name: this.state.newTaskName,
      isDone: false
    }
    );
    this.setState({
      tasks,
      newTaskName: ""
    })
  }
  handleInputChange = event => {
    const newTaskName = event.currentTarget.value;
    this.setState({ newTaskName })
  }
  handleCheckboxChange = event => {
    console.log(event.target)
    const tasks = [...this.state.tasks];
    const index = event.currentTarget.dataset.index;
    console.log(index)
    const task = tasks[index];
    task.isDone = !task.isDone;
    this.setState({ tasks });

  }

  removeTask = (event) => {
    const tasks = [...this.state.tasks];
    const index = event.currentTarget.dataset.index;
    tasks.splice(index, 1);
    this.setState({ tasks });
    console.log(tasks);
  }

  handleInputKeyUp = event => {
    // console.log(event.key);
    if (event.key === "Enter") {
      this.addTask();
    }
  }


  render() {
    const { newTaskName, tasks } = this.state;
    return (
      <div className="App">
        <ToDoInput value={newTaskName}
          onInputChange={this.handleInputChange}
          onInputKeyUp={this.handleInputKeyUp}
          addTask={this.addTask} />
        <ToDoList
          items={tasks}
          onCheckboxChange={this.handleCheckboxChange}
          removeTask={this.removeTask} />
      </div>
    )
  }
}


export default App;
