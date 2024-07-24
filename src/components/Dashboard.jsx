import { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";

const Dashboard = () => {
  const { books, deleteBook } = useContext(BooksContext);

  return (
    <div className="container mt-4">
      <div className="row">
        {books.map((book) => (
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={book.id}>
            <div className="card">
              <img
                src={book.coverImage}
                className="card-img-top"
                alt={book.title}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.about}</p>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={book.author.image}
                    className="rounded-circle"
                    alt={book.author.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                  <p className="mb-0">{book.author.name}</p>
                </div>
                <Link
                  to={`/dashboard/details/${book.id}`}
                  className="btn btn-primary mr-2"
                >
                  View More
                </Link>
                <Link
                  to={`/create/${book.id}`}
                  className="btn btn-warning mr-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
