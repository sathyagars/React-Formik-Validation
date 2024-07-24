import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div
      className={`sidebar-wrapper ${
        isVisible ? "sidebar-visible" : "sidebar-hidden"
      }`}
    >
      <div className="list-group list-group-flush">
        <Link
          to="/home"
          className="list-group-item list-group-item-action"
          onClick={toggleSidebar}
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="list-group-item list-group-item-action"
          onClick={toggleSidebar}
        >
          Dashboard
        </Link>
        <Link
          to="/create"
          className="list-group-item list-group-item-action"
          onClick={toggleSidebar}
        >
          Add Book
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
