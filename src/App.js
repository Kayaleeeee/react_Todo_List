import React, { Component } from "react";
import TodoInsert from "./TodoInsert";
import TodoTemplate from "./TodoTemplate";
import TodoList from "./TodoList";

class App extends Component {
	state = {
		nextId: 3,
		input: "", ///input값 초기 설정
		todos: [
			{ id: 0, text: "0-test123", checked: false },
			{ id: 1, text: "1-t123", checked: false },
			{ id: 2, text: "2-tes3", checked: true },
		],
	};

	onChange = (e) => {
		const { value } = e.target;
		this.setState({ input: value });

		//중괄호에서 받아오기
	};

	onInsert = () => {
		const { todos, input, nextId } = this.state;
		//클래스 내 이벤트 사용시, 설정해준 state값 받아오기
		//{}선언과 일반 선언의 차이?

		const newTodo = {
			id: nextId,
			text: input,
			checked: false,
		};

		this.setState({
			todos: [...todos, newTodo],
			//state바꿔주기 [...원래배열, 새로 생성한 배열]
			input: "",
			nextId: nextId + 1,
		});
	};

	handletoggle = (id) => {
		const { todos } = this.state;
		const index = todos.findIndex((todo) => todo.id === id);

		///...용법, 체크드
		const toggled = {
			...todos[index],
			checked: !todos[index].checked,
		};

		//id가 같은 index 전/후 데이터 slice로 복사, 그 사이에 toggled넣기
		this.setState({
			...this.state,
			todos: [
				...todos.slice(0, index),
				toggled,
				...todos.slice(index + 1, todos.length),
			],
		});
	};

	handleRemove = (id) => {
		const { todos } = this.state;
		// const index = todos.findIndex((todo) => todo.id === id);
		const filterTodo = todos.filter((val) => val.id !== id);
		this.setState({ ...this.state, todos: filterTodo });
	};

	render() {
		const { todos, input } = this.state;

		//위에서 설정해준 함수, 변수 연결해주기

		return (
			<TodoTemplate>
				<TodoInsert
					input={input}
					onInsert={this.onInsert}
					onChange={this.onChange}
					// onSubmit={this.onSubmit}
				/>
				<TodoList
					todos={todos}
					onToggle={this.handletoggle}
					onRemove={this.handleRemove}
				/>
			</TodoTemplate>
		);
	}
}

export default App;
