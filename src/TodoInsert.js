import React, { Component } from "react";
import { MdAdd, MdTransferWithinAStation } from "react-icons/md";
import "./TodoInsert.scss";

class TodoInsert extends Component {
	render() {
		const { input, onInsert, onChange } = this.props;

		return (
			<form className="TodoInsert">
				<input placeholder="할 일 입력" value={input} onChange={onChange} />
				<button type="button" onClick={onInsert}>
					<MdAdd />
				</button>
			</form>
		);
	}
}
export default TodoInsert;
