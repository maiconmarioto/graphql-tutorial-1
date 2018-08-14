import React, { Component } from "react";
import { graphql } from "react-apollo";
import BookDetails from "./BookDetails";
import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading Books...</div>;
    }

    return data.books.map(book => {
      return (
        <li
          key={book.id}
          onClick={e => {
            this.setState({ selected: book.id });
          }}
        >
          {book.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
