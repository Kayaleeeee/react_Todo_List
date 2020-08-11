import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

class TodoList extends Component {
	constructor(props) {
		super(props);
		// this.props = todos;
	}

	render() {
		const { todos, onToggle, onRemove } = this.props;

		return (
			<div className="TodoList">
				{todos.map((todo) => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						onToggle={onToggle}
						onRemove={onRemove}
					/>
				))}
			</div>
		);
	}
}

export default TodoList;
