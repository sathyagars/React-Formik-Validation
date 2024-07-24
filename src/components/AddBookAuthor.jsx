import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BooksContext } from "../context/BooksContext";
import { useNavigate, useParams } from "react-router-dom";

const AddBookAuthor = () => {
  const { books, addBook, editBook } = useContext(BooksContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  const bookToEdit = books.find((book) => book.id === parseInt(id));

  return (
    <div className="container mt-4">
      <h1>{isEditMode ? "Edit" : "Add"} Book and Author</h1>
      <Formik
        initialValues={{
          title: bookToEdit ? bookToEdit.title : "",
          isbn: bookToEdit ? bookToEdit.isbn : "",
          published: bookToEdit ? bookToEdit.published : "",
          coverImage: bookToEdit ? bookToEdit.coverImage : "",
          about: bookToEdit ? bookToEdit.about : "",
          authorName: bookToEdit ? bookToEdit.author.name : "",
          authorBirth: bookToEdit ? bookToEdit.author.birth : "",
          authorImage: bookToEdit ? bookToEdit.author.image : "",
          biography: bookToEdit ? bookToEdit.author.biography : "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) errors.title = "Required";
          if (!values.isbn) errors.isbn = "Required";
          if (!values.published) errors.published = "Required";
          if (!values.coverImage) errors.coverImage = "Required";
          if (!values.about) errors.about = "Required";
          if (!values.authorName) errors.authorName = "Required";
          if (!values.authorBirth) errors.authorBirth = "Required";
          if (!values.authorImage) errors.authorImage = "Required";
          if (!values.biography) errors.biography = "Required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const bookData = {
            title: values.title,
            isbn: values.isbn,
            published: values.published,
            coverImage: values.coverImage,
            about: values.about,
            author: {
              name: values.authorName,
              birth: values.authorBirth,
              image: values.authorImage,
              biography: values.biography,
            },
          };
          if (isEditMode) {
            editBook({ ...bookData, id: bookToEdit.id });
          } else {
            addBook(bookData);
          }
          setSubmitting(false);
          navigate("/dashboard");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <Field type="text" name="title" className="form-control" />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="isbn" className="form-label">
                ISBN
              </label>
              <Field type="text" name="isbn" className="form-control" />
              <ErrorMessage
                name="isbn"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="published" className="form-label">
                Published
              </label>
              <Field type="date" name="published" className="form-control" />
              <ErrorMessage
                name="published"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="coverImage" className="form-label">
                Book Cover Image URL
              </label>
              <Field type="text" name="coverImage" className="form-control" />
              <ErrorMessage
                name="coverImage"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="about" className="form-label">
                About
              </label>
              <Field as="textarea" name="about" className="form-control" />
              <ErrorMessage
                name="about"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="authorName" className="form-label">
                Author Name
              </label>
              <Field type="text" name="authorName" className="form-control" />
              <ErrorMessage
                name="authorName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="authorBirth" className="form-label">
                Author Birth
              </label>
              <Field type="date" name="authorBirth" className="form-control" />
              <ErrorMessage
                name="authorBirth"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="authorImage" className="form-label">
                Author Image URL
              </label>
              <Field type="text" name="authorImage" className="form-control" />
              <ErrorMessage
                name="authorImage"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="biography" className="form-label">
                Biography
              </label>
              <Field as="textarea" name="biography" className="form-control" />
              <ErrorMessage
                name="biography"
                component="div"
                className="text-danger"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isEditMode ? "Update" : "Add"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBookAuthor;
