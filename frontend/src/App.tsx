import { useState } from "react";
import { observer } from "mobx-react-lite";
import { v4 } from "uuid";

import Todo from "./components/Todo";
import AddTodoModal from "./components/AddTodoModal";
import EditTodoModal from "./components/EditTodoModal";
import todoStore from "./store/TodoStore";
import TodoModel from "./models/TodoModel";
import useGetTodos from "./hooks/useGetTodos";

const App: React.FC = observer(() => {
  const { isLoading, error, isError, refetch } = useGetTodos();
  const [showAddTodoModal, setShowAddTodoModal] = useState<boolean>(false);
  const [showEditTodoModal, setShowEditTodoModal] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<TodoModel | null>(null);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <div>
        <p>Error: {error!.message}</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  const renderAddTodoModal = (): React.ReactElement => {
    if (showAddTodoModal) {
      return <AddTodoModal close={() => setShowAddTodoModal(false)} />;
    }
    return <></>;
  };

  const renderEditTodoModal = (): React.ReactElement => {
    if (showEditTodoModal) {
      return (
        <EditTodoModal
          todoData={editTodo}
          close={() => setShowEditTodoModal(false)}
        />
      );
    }
    return <></>;
  };

  return (
    <div className="min-h-dvh p-4 bg-slate-100 relative">
      <h1 className="text-xl font-semibold text-left">Todos</h1>
      <button
        onClick={() => setShowAddTodoModal(true)}
        className={`bg-sky text-sky p-2 rounded-xl  text-sm px-4 font-medium
          mt-0 self-end absolute right-4 top-4
        }`}
      >
        Add Todo
      </button>
      <ul className="flex flex-wrap  gap-4 mt-6 ">
        {todoStore.todos.map((todoData: TodoModel) => {
          return (
            <Todo
              setEditTodo={setEditTodo}
              setShowEditTodoModal={setShowEditTodoModal}
              key={v4()}
              todoData={todoData}
            />
          );
        })}
      </ul>

      {renderAddTodoModal()}
      {renderEditTodoModal()}
    </div>
  );
});

export default App;
