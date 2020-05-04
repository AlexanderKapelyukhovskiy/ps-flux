import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionType from "./actionTypes";

export function saveCourse(course) {
  courseApi.saveCourse(course).then((saveCourse) => {
    return dispatcher.dispatch({
      actionType: actionType.CREATE_COURSE,
      course: saveCourse,
    });
  });
}
