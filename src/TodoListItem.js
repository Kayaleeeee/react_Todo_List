import React, { Component } from "react";
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import classNames from "classnames/bind";

// const cx = classNames.bind(styles);

class TodoListItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { onToggle, onRemove, todo } = this.props;

		return (
			<div className={"TodoListItem"}>
				<div
					className="checkbox"
					onClick={() => onToggle(todo.id)}
					// checked={todo.checked}
				>
					{todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
					<div className="text">{todo.text}</div>
				</div>
				<div className="remove" onClick={() => onRemove(todo.id)}>
					<MdRemoveCircleOutline />
				</div>
			</div>
		);
	}
}
export default TodoListItem;
