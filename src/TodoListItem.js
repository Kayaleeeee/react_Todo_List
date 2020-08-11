import React from "react";
import {
<<<<<<< HEAD
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from "react-icons/md";
=======
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icon/md";
>>>>>>> refs/remotes/origin/master
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({ onToggle, todo, onRemove }) => {
<<<<<<< HEAD
	const { id, text, checked } = todo;
	localStorage.setItem("name", text);
	return (
		<div className={"TodoListItem"}>
			<div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className="text">{text}</div>
			</div>
			<div className="remove" onClick={() => onRemove(id)}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
=======
  const { id, text, checked } = todo;
  return (
    <div className={"TodoListItem"}>
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className={"text"}>{text}</div>
      </div>
      <div className={"remove"} onClick={() => onRemove(id)}>
        <idRemoveCircleOutline />
      </div>
    </div>
  );
>>>>>>> refs/remotes/origin/master
};

export default TodoListItem;
