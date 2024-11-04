export const typeDefs = `#graphql
type Todo{
    id: ID
    todo: String
    completed: Boolean
    user: Int
    # user: User  :=> for nested fetching
}

type User{
    id: ID 
    name: String 
    city: String 
    country: String 
    phoneNumber: String
}

type UnauthorizedUser {
    message: String
}

type Success {
    todosData: [Todo]
}
type Failure{
    error: String
}

union TodosResponse = Success | Failure

type Query{
    todos: TodosResponse
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
