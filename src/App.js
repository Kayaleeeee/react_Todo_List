<<<<<<< HEAD
import React, { useState, useRef, useCallback } from "react";
import TodoInsert from "./TodoInsert";
import TodoTemplate from "./TodoTemplate";
import TodoList from "./TodoList";
import Calendar from "react-calendar";

const App = () => {
	const [todos, setTodos] = useState([
		{ id: 1, text: "react 복습하기", checked: true },
		{ id: 2, text: "정처기 공부하기", checked: true },
		{ id: 3, text: "react app 만들기", checked: false },
	]);

	const nextId = useRef(4);
	const onInsert = useCallback(
		(text) => {
			const todo = {
				id: nextId.current,
				text,
				checked: false,
			};
			setTodos(todos.concat(todo));
			nextId.current += 1;
		},
		[todos]
	);
	const onRemove = useCallback(
		(id) => {
			setTodos(todos.filter((todo) => todo.id !== id));
		},
		[todos]
	);

	const onToggle = useCallback(
		(id) => {
			setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo
				)
			);
		},
		[todos]
	);
	return (
		<div>
			<TodoTemplate>
				<TodoInsert onInsert={onInsert} />
				<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
			</TodoTemplate>
		</div>
	);
=======
import React, { useCallback } from "react";
import TodoInsert from "./TodoInsert";
import TodoTemplate from "./TodoTemplate";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "react 복습하기", checked: true },
    { id: 2, text: "정처기 공부하기", checked: true },
    { id: 3, text: "react app 만들기", checked: false },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
>>>>>>> refs/remotes/origin/master
};

export default App;
