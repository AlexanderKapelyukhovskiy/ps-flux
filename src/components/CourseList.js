import React from "react";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((c) => (
          <tr key={c.id}>
            <td>{c.title}</td>
            <td>{c.authorId}</td>
            <td>{c.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseList;
