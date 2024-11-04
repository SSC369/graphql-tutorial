import { useState } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { observer } from "mobx-react-lite";
import { v4 } from "uuid";

import { TodoType } from "./types";
import Todo from "./components/Todo";
import AddTodoModal from "./components/AddTodoModal";
import { GET_TODOS } from "./queries/getTodos";
import EditTodoModal from "./components/EditTodoModal";
import todoStore from "./store/TodoStore";

const App: React.FC = observer(() => {
  const { networkStatus, error } = useQuery(GET_TODOS, {
    variables: {},
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data.todos.__typename === "Success") {
        todoStore.addTodoDataIntoStore(data.todos.todosData);
      } else {
        alert(data.todos.error);
      }
    },
  });
  const [showAddTodoModal, setShowAddTodoModal] = useState<boolean>(false);
  const [showEditTodoModal, setShowEditTodoModal] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<TodoType | null>(null);

  if (networkStatus === NetworkStatus.loading) {
    return <p>Loading...</p>;
  }
  if (networkStatus === NetworkStatus.error) {
    return <p>Error: {error!.message}</p>;
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
          editTodoData={editTodo}
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
      <ul className="flex flex-wrap justify-around gap-4 mt-6 ">
        {todoStore.todos.map((todoData: TodoType) => {
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
