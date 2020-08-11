<<<<<<< HEAD
import React, { useState, useCallback } from "react";
=======
import React, { useCallback } from "react";

>>>>>>> refs/remotes/origin/master
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
<<<<<<< HEAD
	const [value, setValue] = useState("");

	const onChange = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		(e) => {
			onInsert(value);
			setValue("");
			e.preventDefault();
		},
		[onInsert, value]
	);

	return (
		<form className="TodoInsert" onSubmit={onSubmit}>
			<input
				placeholder={"   What should you do?"}
				value={value}
				onChange={onChange}
			/>
			<button type={"submit"}>
				<MdAdd />
			</button>
		</form>
	);
=======
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder={"What should you do?"}
        value={value}
        onChange={onChange}
      />
      <button type={"submit"}>
        <MdAdd />
      </button>
    </form>
  );
>>>>>>> refs/remotes/origin/master
};

export default TodoInsert;
