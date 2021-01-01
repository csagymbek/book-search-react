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
      sort: "",
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
        // console.log(data);
        this.setState({
          books: this.cleanData(data),
        });
      });
  };

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
    // console.log(e.target.value);
  };

  cleanData = (data) => {
    const cleanedData = data?.body?.items?.map((book) => {
      if (!book.volumeInfo.hasOwnProperty("publishedDate")) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (!book?.volumeInfo.hasOwnProperty("imageLinks")) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://lh3.googleusercontent.com/proxy/osIVSGPiHqciMCjmjBWbYHcw9uhaeq-fwnRg0eNyn6FMz1DdbaP1T1SG69cpNmzEc00wK_lcQ8a2Pj_6StqbpM3uwXYbiA3NiW1xK_Xc-9PINkLCLtbwiDWgzyeBWkMtkg",
        };
      }
      return book;
    });
    return cleanedData;
  };

  render() {
    // console.log(this.state.books);
    const sortedBooks = this.state.books?.sort((a, b) => {
      if (this.state.sort === "Newest") {
        return (
          parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        );
      } else if (this.state.sort === "Oldest") {
        return (
          parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        );
      }
    });
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
          handleSearchBook={this.handleSearchBook}
          handleSort={this.handleSort}
        />
        <BookList books={sortedBooks} />
      </div>
    );
  }
}
