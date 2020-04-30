import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChangeTitle(event) {
    const updatedCourse = { ...course, title: event.target.value };
    setCourse(updatedCourse);
  }

  function handleChangeAuthorId(event) {
    debugger;
  }

  function handleChangeCategory(event) {
    debugger;
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChangeTitle={handleChangeTitle}
        onChangeAuthorId={handleChangeAuthorId}
        onChangeCategory={handleChangeCategory}
      />
    </>
  );
};

export default ManageCoursePage;
