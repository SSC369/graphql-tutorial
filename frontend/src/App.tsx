import { useQuery } from "@apollo/client";
import { TodoType } from "./types";
import Todo from "./components/Todo";
import { v4 } from "uuid";
import { useState } from "react";
import AddTodoModal from "./components/AddTodoModal";
import { GET_TODOS } from "./queries/getTodos";
import EditTodoModal from "./components/EditTodoModal";

// const GET_COMPLETED_TODOS = gql`
//   query GetCompletedTodos($completed: Boolean) {
//     completedTodos(completed: $completed) {
//       todo
//       completed
//     }
//   }
// `;

const App = () => {
  const {
    loading,
    error,
    data: todosData,
    //refetch,
  } = useQuery(GET_TODOS, {
    variables: {},
    fetchPolicy: "cache-first",
  });
  const [showAddTodoModal, setShowAddTodoModal] = useState<boolean>(false);
  const [showEditTodoModal, setShowEditTodoModal] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<TodoType | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
        {todosData?.todos.map((todoData: TodoType) => {
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

      {showAddTodoModal && (
        <AddTodoModal close={() => setShowAddTodoModal(false)} />
      )}
      {showEditTodoModal && (
        <EditTodoModal
          editTodoData={editTodo}
          close={() => setShowEditTodoModal(false)}
        />
      )}
    </div>
  );
};

export default App;
