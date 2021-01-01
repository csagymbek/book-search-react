import React, { Component } from "react";
import Search from "./Search";
import request from "superagent";
import BookList from "./BookList";
export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  handleSearch = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  handleSearchBook = (e) => {
    e.preventDefault();
    request
      ?.get(`https://www.googleapis.com/books/v1/volumes`)
      ?.query({ q: this.state.searchField })
      ?.then((data) => {
        // console.log(data)
        this.setState({
          books: [...data?.body?.items],
        });
      });
  };

  render() {
    console.log(this.state.books);
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
          handleSearchBook={this.handleSearchBook}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}
