import React from "react";
import PropTypes from "prop-types";
import { prototype } from "flux/lib/Dispatcher";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((c) => (
          <tr key={c.id}>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() =>
                  props
                    .deleteCourse(c.id)
                    .then(() => toast.warning("Course deleted"))
                }
              >
                Delete
              </button>
            </td>
            <td>
              <Link to={"/course/" + c.slug}>{c.title}</Link>
            </td>
            <td>{c.authorId}</td>
            <td>{c.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
