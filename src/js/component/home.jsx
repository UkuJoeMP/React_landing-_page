import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [todos, setTodos] = useState([]);
	const [taskInput, setTaskInput] = useState('');
  
	const handleFormSubmit = (e) => {
	  e.preventDefault();
	  setTodos([
		...todos,
		{title: taskInput}
	  ]);
	  setTaskInput('');
	};
  
	const deleteTask = (taskId) => {
	  setTodos(todos.filter(task => task.id !== taskId));
	};
  
	const tasksToRender = todos.map(task => (
	  <li key={task.id}>
		<div className="view">
		  <label>{task.title}</label>
		  <button className="destroy" onClick={() => deleteTask(task.id)}></button>
		</div>
	  </li>
	));
  
	return (
	  <section className="todoapp">
		<header className="header">
		  <h1>todos</h1>
		  <form onSubmit={handleFormSubmit}>
			<input
			  autoFocus={true}
			  className="new-todo"
			  placeholder="What needs to be done?"
			  value={taskInput}
			  onChange={(e) => setTaskInput(e.target.value)}
			/>
		  </form>
		</header>
		<section className="main">
		  <ul className="todo-list">
			{tasksToRender}
		  </ul>
		</section>
		<footer className="footer">
		  <span className="todo-count">
			<strong>{todos.filter(task => !task.done).length}</strong> item left
		  </span>
		</footer>
	  </section>
	);
  };
  export default Home;