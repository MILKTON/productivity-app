import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Todos(props) {
const [tasks, setTasks] = useState(props.tasks);
const [filter, setFilter] = useState('Todas');
const FILTER_MAP = {
  Todas: () => true,
  Activas: task => !task.completed,
  Finalizadas: task => task.completed,
  Corto: task => (task.seconds <=30 && !task.completed),
  Medio: task => (task.seconds > 30 && task.seconds <= 60 && !task.completed),
  Largo: task => (task.seconds > 60 && !task.completed),
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

const tasksNoun = taskList.length !== 1 ? 'Tareas' : 'Tarea';
const headingText = `${taskList.length} ${tasksNoun}`;

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <label htmlFor="button-group">Filtrar tareas por estado o duración</label>
      <div className="filters btn-group stack-exception" id="button-group">
        <ButtonGroup size="sm">
          {filterList}
        </ButtonGroup>
      </div>
      <h5>{headingText}</h5>
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