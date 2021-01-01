import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Books from "./components/Books";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Books />
      </>
    );
  }
}
