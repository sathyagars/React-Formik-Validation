import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BooksProvider } from "./context/BooksContext";
import AddBookAuthor from "./components/AddBookAuthor";
import Dashboard from "./components/Dashboard";
import BookDetails from "./components/BookDetails";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <BooksProvider>
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">
            Library Management
          </Link>
        </nav>
        <div className="d-flex">
          <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
          <div
            className={`page-content-wrapper ${
              isSidebarVisible ? "overlay" : ""
            }`}
          >
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/create" element={<AddBookAuthor />} />
                <Route path="/create/:id" element={<AddBookAuthor />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/dashboard/details/:id"
                  element={<BookDetails />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </BooksProvider>
  );
};

export default App;
