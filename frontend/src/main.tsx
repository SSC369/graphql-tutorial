import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

import "./index.css";
import App from "./App.tsx";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000", // Replace with your GraphQL API URL
  }),
  cache: new InMemoryCache(), // Initializes the Apollo cache
});

// HttpLink: This is used to define how Apollo Client interacts with your GraphQL server via HTTP. The uri is the endpoint of your GraphQL server.
// InMemoryCache: This is the default caching implementation used by Apollo Client. It stores query results in memory to optimize performance and reduce network requests

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
