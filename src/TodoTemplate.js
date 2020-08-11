import React, { Component } from "react";
import "./TodoTemplate.scss";
import { MdChildFriendly } from "react-icons/md";

class TodoTemplate extends Component {
	constructor(props) {
		super(props);
		// this.props = children;
	}
	render() {
		const { children } = this.props;
		return (
			<div className="TodoTemplate">
				<div className="app-title">
					<h1>Todo List</h1>
				</div>
				<div className="content">{children}</div>
			</div>
		);
	}
}

export default TodoTemplate;
