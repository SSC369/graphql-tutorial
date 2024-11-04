import React from "react";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { IoCloudDone } from "react-icons/io5";
import { observer } from "mobx-react-lite";

import { TodoPropsType } from "../types";
import useDeleteTodo from "../hooks/useDeleteTodo";

const Todo: React.FC<TodoPropsType> = observer(
  ({ todoData, setShowEditTodoModal, setEditTodo }) => {
    const { deleteTodo, error } = useDeleteTodo();
    const { id, todo, completed } = todoData;

    const handleEditClick = (): void => {
      setEditTodo(todoData);
      setShowEditTodoModal(true);
    };

    const handleTodoDelete = (): void => {
      deleteTodo({
        variables: {
          id: id,
        },
      });
    };

    const renderButtons = (): React.ReactElement => {
      return (
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={handleTodoDelete}
            className="bg-red-100 rounded-full h-8 w-8 flex items-center justify-center"
          >
            <MdDelete className="text-red-500 text-lg" />
          </button>
          <button
            onClick={handleEditClick}
            className="bg-sky rounded-full h-8 w-8 flex items-center justify-center"
          >
            <TbEdit className="text-sky" />
          </button>
        </div>
      );
    };

    if (error) {
      return <h1>Something went wrong !!!</h1>;
    }

    return (
      <li
        className="flex flex-col justify-between bg-white rounded-xl p-2 w-[200px] relative min-h-[100px]"
        key={id}
      >
        <p className=" text-sm first-letter:capitalize text-slate-800 font-medium mb-2">
          {todo}
        </p>
        {completed && <IoCloudDone className="text-green-400" />}
        {renderButtons()}
      </li>
    );
  }
);

export default Todo;
