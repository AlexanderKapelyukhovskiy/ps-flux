import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.authorId}</td>
              <td>{c.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPage;
