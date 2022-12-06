import React, { Component } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import UpdateUserPassword from "./components/UpdateUserPassword";
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AddUser />
        <UpdateUserPassword />
        <AllUsers />
      </ApolloProvider>
    );
  }
}
