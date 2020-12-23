import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Stopwatch from "../Stopwatch/Stopwatch";

function Todos(props) {
const [tasks, setTasks] = useState(props.tasks);
const [filter, setFilter] = useState('All');
const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
  Corto: task => task.seconds <=30,
  Medio: task => task.seconds > 30 && task.seconds <= 60,
  Largo: task => task.seconds > 60,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function addTask(name, seconds) {
  const newTask = { id: "todo-" + nanoid(), name: name, seconds:seconds, completed: false };
  setTasks([...tasks, newTask]);
}

function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map(task => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return {...task, completed: !task.completed}
    }
    return task;
  });
  setTasks(updatedTasks);
}

function deleteTask(id) {
  const remainingTasks = tasks.filter(task => id !== task.id);
  setTasks(remainingTasks);
}

function editTask(id, newName) {
  const editedTaskList = tasks.map(task => {
  // if this task has the same ID as the edited task
    if (id === task.id) {
      //
      return {...task, name: newName}
    }
    return task;
  });
  setTasks(editedTaskList);
}

const taskList = tasks
.filter(FILTER_MAP[filter])
.map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    seconds={task.seconds}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));
const filterList = FILTER_NAMES.map(name => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));

const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
const headingText = `${taskList.length} ${tasksNoun}`;

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <Stopwatch key={5} h={0} m={0} s={5}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default Todos;