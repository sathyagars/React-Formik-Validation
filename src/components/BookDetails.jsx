import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

const BookDetails = () => {
  const { books } = useContext(BooksContext);
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container  mt-3">
      <h1>{book.title}</h1>
      <div className="card mb-3 book-card">
        <div className="row">
          <div className="col-md-4">
            <img
              src={book.coverImage}
              className="img-fluid rounded-start"
              alt={book.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">{book.about}</p>
              <div className="d-flex align-items-center justify-content-start mb-3">
                <img
                  src={book.author.image}
                  className="auth-img mx-5"
                  alt={book.author.name}
                />
                <h6>{book.author.name}</h6>
              </div>
              <div>
                <p>{book.author.biography}</p>
                <p>Date of Birth: {book.author.birth}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>ISBN: {book.isbn}</p>
        <p>Published: {book.published}</p>
      </div>
    </div>
  );
};

export default BookDetails;
