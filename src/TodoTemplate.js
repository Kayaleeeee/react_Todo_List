import React from "react";
<<<<<<< HEAD
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
	return (
		<div className="TodoTemplate">
			<div className="app-title">
				<h1>Todo List</h1>
			</div>
			<div className="content">{children}</div>
		</div>
	);
=======
import "./TodoTemplate.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
>>>>>>> refs/remotes/origin/master
};

export default TodoTemplate;
