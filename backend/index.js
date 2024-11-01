import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import data from "./data.js";
import { typeDefs } from "./schema.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const resolvers = {
  Query: {
    todos() {
      return data.todos;
    },
    todo(_, args) {
      return data.todos.find((todo) => todo.id === parseInt(args.id));
    },
    completedTodos(_, args) {
      return data.todos.filter((todo) => {
        const { completed } = todo;
        if (completed === args.completed) {
          return todo;
        }
      });
    },
  },

  // Todo: {
  //   user(todo) {
  //     return data.users.find((user) => user.userId === todo.user);
  //   },
  // },

  Mutation: {
    addTodo(_, args) {
      const { todo, user } = args;
      const newTodo = {
        id: data.todos.length + 1,
        todo,
        completed: false,
        user,
      };
      data.todos.push(newTodo);
      return newTodo;
    },
    editTodo(_, args) {
      const { id, todo, completed } = args.todoData;
      let updatedTodo;
      const filteredData = data.todos.map((eachTodo) => {
        if (eachTodo.id === parseInt(id)) {
          updatedTodo = {
            id,
            todo,
            completed,
            user: eachTodo.user,
          };
          return {
            ...eachTodo,
            todo: todo,
            completed,
          };
        }
        return eachTodo;
      });
      data.todos = filteredData;

      return updatedTodo;
    },
    deleteTodo(_, { id }) {
      let deletedTodo;
      data.todos = data.todos.filter((todo) => {
        if (todo.id !== parseInt(id)) {
          return todo;
        }
        deletedTodo = todo;
      });
      return deletedTodo;
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
