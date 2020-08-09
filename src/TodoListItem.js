import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icon/md";
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({ onToggle, todo, onRemove }) => {
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
};

export default TodoListItem;
