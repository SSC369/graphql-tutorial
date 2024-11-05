import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

import { AddTodoFormData, AddTodoModalProps } from "../types";
import useAddTodo from "../apis/mutations/addTodo/useAddTodo";

const AddTodoModal: React.FC<AddTodoModalProps> = ({ close }) => {
  const [formData, setFormData] = useState<AddTodoFormData>({
    todo: "",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { addTodo, loading, error } = useAddTodo();

  const handleModalClose = (): void => {
    setIsVisible(false);
    setTimeout(() => {
      close();
    }, 300);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = (): boolean => {
    const { todo } = formData;
    if (todo.trim() === "") {
      alert("Please add todo");
      return false;
    }
    return true;
  };

  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (handleValidation()) {
      const { todo } = formData;
      addTodo({
        variables: {
          todo: todo,
          user: 369,
        },
      });
      handleModalClose();
    }
  };

  if (error) {
    return <h1>Something went wrong!!!</h1>;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-60 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex relative flex-col justify-center rounded-xl  bg-slate-100 gap-4 px-4 py-6 w-1/3 transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-90"
        }`}
      >
        <h1 className="text-lg font-semibold text-slate-700">Add Todo</h1>

        <button onClick={handleModalClose} className="absolute top-4 right-4">
          <IoClose />
        </button>

        <form onSubmit={handleSubmitTodo} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-slate-700 text-sm">Title</label>
            <input
              onChange={handleInputChange}
              value={formData.todo}
              className="p-3 rounded-xl outline-none"
              name="todo"
            />
          </div>

          <button
            className="bg-sky text-sky p-2 rounded-xl  text-sm px-4 font-medium self-center"
            type="submit"
          >
            {loading ? "...loading" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoModal;
