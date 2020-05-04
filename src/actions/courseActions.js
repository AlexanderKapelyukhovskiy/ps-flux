import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionType from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((saveCourse) => {
    return dispatcher.dispatch({
      actionType: course.id
        ? actionType.UPDATE_COURSE
        : actionType.CREATE_COURSE,
      course: saveCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    return dispatcher.dispatch({
      actionType: actionType.LOAD_COURSES,
      courses,
    });
  });
}
