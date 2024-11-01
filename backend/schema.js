export const typeDefs = `#graphql
type Todo{
    id: ID
    todo: String
    completed: Boolean
    # user: User
    user: Int
}

type User{
    id: ID 
    name: String 
    city: String 
    country: String 
    phoneNumber: String
}

type Query{
    todos: [Todo]
    todo(id: ID): Todo
    completedTodos(completed: Boolean):[Todo]
}

type Mutation{
    addTodo(todo:String, user: Int): Todo
    editTodo(todoData: TodoInput): Todo
    deleteTodo(id: ID!): Todo
}

input TodoInput{
    id:ID!
    todo: String! 
    completed: Boolean!
}
`;
