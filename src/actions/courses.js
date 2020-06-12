import fetch from "cross-fetch";
import { addDayWithoutFormat, dateParse } from "../components/utils/dateParse";
import message from "../components/utils/message";
import history from '../history'

declare var $: any;

export const SET_COURSE = "SET_COURSE";
export const CANCEL_DELETE_COURSE = "CANCEL_DELETE_COURSE";
export const VIEW_COURSE_DETAILS = "VIEW_COURSE_DETAILS";
export const EDIT_COURSE_DETAILS = "EDIT_COURSE_DETAILS";
export const CANCEL_EDIT_COURSE = "CANCEL_EDIT_COURSE";
export const GO_BACK_TO_COURSES_LIST = "GO_BACK_TO_COURSES_LIST";
export const HANDLE_EDIT_INPUT_CHANGE = "HANDLE_EDIT_INPUT_CHANGE";
export const HANDLE_NEW_INPUT_CHANGE = "HANDLE_NEW_INPUT_CHANGE";
export const HANDLE_COURSE_FILTER_CHANGE = "HANDLE_COURSE_FILTER_CHANGE";
export const CANCEL_NEW_COURSE = "CANCEL_NEW_COURSE";
export const NEW_COURSE = "NEW_COURSE";
export const COURSE_FILE_FOUND = "COURSE_FILE_FOUND";
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const HANDLE_BUY_REQUEST_COMMENT = "HANDLE_BUY_REQUEST_COMMENT";
export const CANCEL_BUY_REQUEST_COMMENT = "CANCEL_BUY_REQUEST_COMMENT";

// Actions Requests
export const REQUEST_COURSES = "REQUEST_COURSES";
export const REQUEST_GET_COURSES_SUCCEDED = "REQUEST_GET_COURSES_SUCCEDED";
export const REQUEST_GET_COURSES_FAILED = "REQUEST_GET_COURSES_FAILED";
export const REQUEST_DELETE_COURSE_SUCCEDED = "REQUEST_DELETE_COURSE_SUCCEDED";
export const REQUEST_DELETE_COURSE_FAILED = "REQUEST_DELETE_COURSE_FAILED";
export const REQUEST_UPDATE_COURSE_SUCCEDED = "REQUEST_UPDATE_COURSE_SUCCEDED";
export const REQUEST_UPDATE_COURSE_FAILED = "REQUEST_UPDATE_COURSE_FAILED";
export const REQUEST_SAVE_COURSE_SUCCEDED = "REQUEST_SAVE_COURSE_SUCCEDED";
export const REQUEST_SAVE_COURSE_FAILED = "REQUEST_SAVE_COURSE_FAILED";
export const REQUEST_REACTIVATE_COURSE_SUCCEDED =
  "REQUEST_REACTIVATE_COURSE_SUCCEDED";
export const REQUEST_REACTIVATE_COURSE_FAILED =
  "REQUEST_REACTIVATE_COURSE_FAILED";
export const REQUEST_UPLOAD_COURSE_IMAGE_SUCCEDED =
  "REQUEST_UPLOAD_COURSE_IMAGE_SUCCEDED";
export const REQUEST_UPLOAD_COURSE_IMAGE_FAILED =
  "REQUEST_UPLOAD_COURSE_IMAGE_FAILED";
export const REQUEST_GET_COURSE_SUCCEDED = "REQUEST_GET_COURSE_SUCCEDED";
export const REQUEST_GET_COURSE_FAILED = "REQUEST_GET_COURSE_FAILED";
export const REQUEST_GET_COURSES_BY_CATEGORIES_SUCCEDED =
  "REQUEST_GET_COURSES_BY_CATEGORIES_SUCCEDED";
export const REQUEST_GET_COURSES_BY_CATEGORIES_FAILED =
  "REQUEST_GET_COURSES_BY_CATEGORIES_FAILED";
export const REQUEST_GET_COURSES_BY_MODALITIES_SUCCEDED =
  "REQUEST_GET_COURSES_BY_MODALITIES_SUCCEDED";
export const REQUEST_GET_COURSES_BY_MODALITIES_FAILED =
  "REQUEST_GET_COURSES_BY_MODALITIES_FAILED";
export const REQUEST_MARK_COURSE_AS_POPULAR_SUCCEDED =
  "REQUEST_MARK_COURSE_AS_POPULAR_SUCCEDED";
export const REQUEST_MARK_COURSE_AS_POPULAR_FAILED =
  "REQUEST_MARK_COURSE_AS_POPULAR_FAILED";
export const REQUEST_DISMARK_COURSE_AS_POPULAR_SUCCEDED =
  "REQUEST_DISMARK_COURSE_AS_POPULAR_SUCCEDED";
export const REQUEST_DISMARK_COURSE_AS_POPULAR_FAILED =
  "REQUEST_DISMARK_COURSE_AS_POPULAR_FAILED";
export const REQUEST_SEND_BUY_REQUEST = "REQUEST_SEND_BUY_REQUEST";
export const REQUEST_SEND_BUY_REQUEST_SUCCESS =
  "REQUEST_SEND_BUY_REQUEST_SUCCESS";
export const REQUEST_SEND_BUY_REQUEST_FAILED =
  "REQUEST_SEND_BUY_REQUEST_FAILED";
export const REQUEST_UNBLOCK_COURSE = "REQUEST_UNBLOCK_COURSE";
export const REQUEST_UNBLOCK_COURSE_SUCCESS = "REQUEST_UNBLOCK_COURSE_SUCCESS";
export const REQUEST_UNBLOCK_COURSE_FAILED = "REQUEST_UNBLOCK_COURSE_FAILED";

function fileFound(resp) {
  return {
    type: COURSE_FILE_FOUND,
    resp,
  };
}

function requestCourses() {
  return {
    type: REQUEST_COURSES,
  };
}

function requestDeleteCourseSucceded(course) {
  return {
    type: REQUEST_DELETE_COURSE_SUCCEDED,
    course,
  };
}

function requestDeleteCourseFailed() {
  return {
    type: REQUEST_DELETE_COURSE_FAILED,
  };
}

function requestUpdateCourseSucceded(course) {
  return {
    type: REQUEST_UPDATE_COURSE_SUCCEDED,
    course,
  };
}

function requestUpdateCourseFailed() {
  return {
    type: REQUEST_UPDATE_COURSE_FAILED,
  };
}

function requestUploadCourseImageSucceded(course, image) {
  return {
    type: REQUEST_UPLOAD_COURSE_IMAGE_SUCCEDED,
    course,
    image,
  };
}

function requestUploadCourseImageFailed() {
  return {
    type: REQUEST_UPLOAD_COURSE_IMAGE_FAILED,
  };
}

function requestMarkCourseAsPopularSucceded(course) {
  return {
    type: REQUEST_MARK_COURSE_AS_POPULAR_SUCCEDED,
    course,
  };
}

function requestMarkCourseAsPopularFailed() {
  return {
    type: REQUEST_MARK_COURSE_AS_POPULAR_FAILED,
  };
}

function requestDisMarkCourseAsPopularSucceded(course) {
  return {
    type: REQUEST_DISMARK_COURSE_AS_POPULAR_SUCCEDED,
    course,
  };
}

function requestDisMarkCourseAsPopularFailed() {
  return {
    type: REQUEST_DISMARK_COURSE_AS_POPULAR_FAILED,
  };
}

function requestGetCoursesSucceded(courses) {
  return {
    type: REQUEST_GET_COURSES_SUCCEDED,
    courses,
  };
}

function requestGetCoursesFailed() {
  return {
    type: REQUEST_GET_COURSES_FAILED,
  };
}

function requestGetCoursesByCategoriesSucceded(courses) {
  return {
    type: REQUEST_GET_COURSES_BY_CATEGORIES_SUCCEDED,
    courses,
  };
}

function requestGetCoursesByCategoriesFailed() {
  return {
    type: REQUEST_GET_COURSES_BY_CATEGORIES_FAILED,
  };
}

function requestGetCourseSucceded(course) {
  return {
    type: REQUEST_GET_COURSE_SUCCEDED,
    course,
  };
}

function requestGetCourseFailed() {
  return {
    type: REQUEST_GET_COURSE_FAILED,
  };
}

function requestSaveCourseSucceded(course) {
  return {
    type: REQUEST_SAVE_COURSE_SUCCEDED,
    course,
  };
}

function requestSaveCourseFailed() {
  return {
    type: REQUEST_SAVE_COURSE_FAILED,
  };
}

function requestReactivateCourseSucceded(course_id) {
  return {
    type: REQUEST_REACTIVATE_COURSE_SUCCEDED,
    course_id,
  };
}

function requestReactivateCourseFailed() {
  return {
    type: REQUEST_REACTIVATE_COURSE_FAILED,
  };
}

function requestUnblockCourse() {
  return {
    type: REQUEST_UNBLOCK_COURSE,
  };
}

function requestUnblockCourseSuccess(course) {
  return {
    type: REQUEST_UNBLOCK_COURSE_SUCCESS,
    course,
  };
}

function requestUnblockCourseFailed() {
  return {
    type: REQUEST_UPDATE_COURSE_FAILED,
  };
}

function requestSendBuyRequest() {
  return {
    type: REQUEST_SEND_BUY_REQUEST,
  };
}

function requestSendBuyRequestSuccess(json) {
  return {
    type: REQUEST_SEND_BUY_REQUEST_SUCCESS,
    params: json
  };
}

function requestSendBuyRequestFailed() {
  return {
    type: REQUEST_SEND_BUY_REQUEST_FAILED,
  };
}

export function handleEditInputChange(event) {
  return {
    type: HANDLE_EDIT_INPUT_CHANGE,
    event,
  };
}

export function coursePriceWay(course) {
  if (course) {
    if (parseInt(course.is_in_offer, 10) === 1) return "is_in_offer";
    else {
      if (
        parseInt(course.is_in_offer, 10) === 2 &&
        parseFloat(course.price) > 0
      )
        return "isPaid";
      else return "isFree";
    }
  }

  return "isPaid";
}

export function courseDateWay(course) {
  if (course) {
    if (parseInt(course.with_date, 10) === 1) return "with_date";
    else return "without_date";
  }
}

export function editCourseDetails(course) {
  return {
    type: EDIT_COURSE_DETAILS,
    course,
  };
}

export function cancelEditCourse() {
  return {
    type: CANCEL_EDIT_COURSE,
  };
}

export function removeCourseFilters() {
  return {
    type: REMOVE_FILTERS,
  };
}

export function setCourse(course) {
  return {
    type: SET_COURSE,
    course,
  };
}

export function handleCourseFilterChange(e) {
  return {
    type: HANDLE_COURSE_FILTER_CHANGE,
    event: e,
  };
}

export function handleNewInputChange(e) {
  return {
    type: HANDLE_NEW_INPUT_CHANGE,
    event: e,
  };
}

export function handleBuyRequestComment(e) {
  return {
    type: HANDLE_BUY_REQUEST_COMMENT,
    event: e,
  };
}

export function cancelBuyRequest() {
  return {
    type: CANCEL_BUY_REQUEST_COMMENT,
  };
}

export function newCourse() {
  return {
    type: NEW_COURSE,
  };
}

export function goBackToCoursesList() {
  return {
    type: GO_BACK_TO_COURSES_LIST,
  };
}

export function cancelSaveCourse() {
  return {
    type: CANCEL_NEW_COURSE,
  };
}

export function viewCourseDetails(course) {
  return {
    type: VIEW_COURSE_DETAILS,
    course,
  };
}

export function getCourses() {
  return function (dispatch, getState) {
    dispatch(requestCourses());
    const user = getState().user.userData;
    return fetch(process.env.REACT_APP_NODE_URL + "/courses", {
      method: "GET",
      mode: "cors",
      credentials: "with-credentials",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: user.token,
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        if (json && json.status !== 500) {
          dispatch(requestGetCoursesSucceded(json.courses));
        } else {
          message(json.message, "error");
          dispatch(requestGetCoursesFailed());
        }
      })
      .catch((errors) => {
        dispatch(requestGetCoursesFailed());
        console.log(errors);
      });
  };
}

export function getCoursesActives() {
  return function (dispatch, getState) {
    dispatch(requestCourses());
    const user = getState().user.userData;
    return fetch(process.env.REACT_APP_NODE_URL + "/courses/actives", {
      method: "GET",
      mode: "cors",
      credentials: "with-credentials",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: user.token,
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        if (json && json.status !== 500) {
          dispatch(requestGetCoursesSucceded(json.courses));
        } else {
          message(json.message, "error");
          dispatch(requestGetCoursesFailed());
        }
      })
      .catch((errors) => {
        dispatch(requestGetCoursesFailed());
        console.log(errors);
      });
  };
}

export function filterByCategory(category_id) {
  return function (dispatch, getState) {
    dispatch(requestCourses());
    const user = getState().user.userData;
    return fetch(
      process.env.REACT_APP_NODE_URL +
        "/courses/categories/" +
        category_id +
        "/filter",
      {
        method: "GET",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token,
        },
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json.courses);
        if (json && json.status !== 500) {
          dispatch(requestGetCoursesSucceded(json.courses));
        } else {
          message(json.message, "error");
          dispatch(requestGetCoursesFailed());
        }
      })
      .catch((errors) => {
        dispatch(requestGetCoursesFailed());
        console.log(errors);
      });
  };
}

export function getCourse(course_id) {
  return function (dispatch, getState) {
    var isFetching = getState().courses.isFetching;

    if (!isFetching) {
      dispatch(requestCourses());
      const user = getState().user.userData;
      return fetch(process.env.REACT_APP_NODE_URL + "/courses/" + course_id, {
        method: "GET",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token,
        },
      })
        .then(
          (response) => {
            if (response.ok) {
              return response.json();
            }
            if (response.status === 422)
              return response.json().then((err) => {
                throw err;
              });
          },

          (error) => console.log("An error occurred.", error)
        )
        .then((json) => {
          if (json && json.status !== 500) {
            if (json.status === 404) {
              message(json.message, "error");
              dispatch(requestGetCourseFailed());
            } else {
              dispatch(requestGetCourseSucceded(json.course));
            }
          } else {
            message(json.message, "error");
            dispatch(requestGetCourseFailed());
          }
        })
        .catch((errors) => {
          dispatch(requestGetCourseFailed());
          console.log(errors);
        });
    }
  };
}

function validateDinamicFields(course) {
  if (course.priceWay === "is_in_offer") {
    if (
      course.price === null ||
      course.price === 0 ||
      String(course.price) === "0"
    ) {
      message("Ingrese el precio base del curso.", "error");
      return false;
    }

    if (
      course.offer_price === null ||
      course.offer_price === 0 ||
      String(course.offer_price) === "0"
    ) {
      message("Ingrese el precio de oferta del curso.", "error");
      return false;
    }

    if (parseFloat(course.price) <= parseFloat(course.offer_price)) {
      message(
        "El precio de oferta no puede superar o ser igual al precio base.",
        "error"
      );
      return false;
    }
  }

  if (course.priceWay === "isPaid") {
    if (
      course.price === null ||
      course.price === 0 ||
      String(course.price) === "0"
    ) {
      message("Ingrese el precio del curso.", "error");
      return false;
    }
  }

  if (course.dateWay === "with_date") {
    if (
      course.begin_date === null ||
      String(course.begin_date) === "" ||
      course.end_date === null ||
      String(course.end_date) === ""
    ) {
      message("Ingrese las fechas indicadas");
      return false;
    }

    if (
      addDayWithoutFormat(course.begin_date) <
        addDayWithoutFormat(dateParse(new Date())) ||
      addDayWithoutFormat(course.begin_date) >
        addDayWithoutFormat(course.end_date)
    ) {
      message("Verifique las fechas ingresadas");
      return false;
    }
  }

  return true;
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    let courseToSend = {
      name: course.name,
      category_id: course.category_id,
      modality_id: course.modality_id,
      duration: parseFloat(course.duration),
      provider: course.provider_id,
      price: course.priceWay !== "isFree" ? course.price : 0,
      is_in_offer: course.priceWay === "is_in_offer" ? "1" : "2",
      offer_price:
        course.priceWay === "is_in_offer" ? course.offer_price : null,
      description: course.description,
      link_media: course.link_media,
      with_date: course.dateWay === "with_date" ? "1" : "2",
      begin_date: course.dateWay === "with_date" ? course.begin_date : null,
      end_date: course.dateWay === "with_date" ? course.end_date : null,
      user_id: getState().user.userData.id,
      is_important: course.is_important || "2",
    };

    console.log(courseToSend);

    console.log(
      addDayWithoutFormat(course.begin_date),
      addDayWithoutFormat(course.end_date)
    );

    if (courseToSend.name !== null && String(courseToSend.name) !== "") {
      if (
        courseToSend.category_id !== null &&
        courseToSend.category_id !== "" &&
        String(courseToSend.category_id) !== "-1"
      ) {
        if (
          courseToSend.modality_id !== null &&
          courseToSend.modality_id !== "" &&
          String(courseToSend.modality_id) !== "-1"
        ) {
          if (
            courseToSend.duration !== 0 &&
            courseToSend.duration !== null &&
            courseToSend.duration !== ""
          ) {
            if (
              courseToSend.provider !== null &&
              String(courseToSend.provider) !== "" &&
              String(courseToSend.provider) !== "-1"
            ) {
              if (
                courseToSend.price !== null &&
                validateDinamicFields(course)
              ) {
                if (
                  (course.image !== undefined &&
                    course.image !== null &&
                    String(course.image) !== "") ||
                  (Object.entries(course.image).length !== 0 &&
                    course.image.constructor !== Object)
                ) {
                  if (
                    courseToSend.link_media !== null &&
                    String(courseToSend.link_media) !== ""
                  ) {
                    if (validateDinamicFields(course)) {
                      let dataWithFile = new FormData();

                      if (course.document_description !== null) {
                        if (course.document_description.error) {
                          message(
                            "El archivo PDF excede el tamaño permitido (10 MB)",
                            "error",
                            0
                          );
                          return;
                        }
                        dataWithFile.append(
                          "document_description",
                          course.document_description
                        );
                      }

                      if (course.image !== null) {
                        if (course.image.error) {
                          message(
                            "La imagen excede el tamaño permitido (2 MB)",
                            "error",
                            0
                          );
                          return;
                        }
                        dataWithFile.append("image", course.image);
                      }

                      dataWithFile.append(
                        "course",
                        JSON.stringify(courseToSend)
                      );

                      let user = getState().user.userData;
                      dispatch(requestCourses());

                      return fetch(
                        process.env.REACT_APP_NODE_URL + "/courses",
                        {
                          method: "POST",
                          mode: "cors",
                          credentials: "with-credentials",
                          headers: {
                            token: user.token,
                          },
                          body: dataWithFile,
                        }
                      )
                        .then(
                          (response) => {
                            if (response.ok) {
                              return response.json();
                            }
                            if (response.status === 422)
                              return response.json().then((err) => {
                                throw err;
                              });
                          },

                          (error) => console.log("An error occurred.", error)
                        )
                        .then((json) => {
                          console.log(json);
                          if (json && json.status !== 500) {
                            dispatch(requestSaveCourseSucceded(json.course));
                            message(json.message, "success");
                          } else {
                            dispatch(requestSaveCourseFailed());
                            if (json !== undefined) {
                              message(json.message, "error");
                            } else {
                              message(
                                "Hubo un error y no se pudo publicar el curso.",
                                "error"
                              );
                            }
                          }
                        })
                        .catch((errors) => {
                          console.log(errors);
                        });
                    }
                  } else {
                    message("Ingrese la url de enlace al curso.");
                  }
                } else {
                  message("Ingrese la imagen del curso.");
                }
              }
            } else {
              message("Ingrese el profesor que imparte el curso", "error");
            }
          } else {
            message("Ingrese la duración del curso", "error");
          }
        } else {
          message("Ingrese la modalidad del curso", "error");
        }
      } else {
        message("Ingrese la categoría del curso", "error");
      }
    } else {
      message("Ingrese el titulo del curso", "error");
    }
  };
}

export function updateCourse(course) {
  return function (dispatch, getState) {
    let courseToSend = {
      name: course.name,
      category_id: course.category_id,
      modality_id: course.modality_id,
      duration: parseFloat(course.duration),
      provider: course.provider_id,
      price: course.priceWay !== "isFree" ? course.price : 0,
      is_in_offer: course.priceWay === "is_in_offer" ? "1" : "2",
      offer_price:
        course.priceWay === "is_in_offer" ? course.offer_price : null,
      description: course.description,
      link_media: course.link_media,
      with_date: course.dateWay === "with_date" ? "1" : "2",
      begin_date: course.dateWay === "with_date" ? course.begin_date : null,
      end_date: course.dateWay === "with_date" ? course.end_date : null,
      user_id: getState().user.userData.id,
      is_important: course.is_important || "2",
    };

    console.log(courseToSend);

    console.log(
      addDayWithoutFormat(course.begin_date),
      addDayWithoutFormat(course.end_date)
    );

    if (courseToSend.name !== null && String(courseToSend.name) !== "") {
      if (
        courseToSend.category_id !== null &&
        courseToSend.category_id !== "" &&
        String(courseToSend.category_id) !== "-1"
      ) {
        if (
          courseToSend.modality_id !== null &&
          courseToSend.modality_id !== "" &&
          String(courseToSend.modality_id) !== "-1"
        ) {
          if (
            courseToSend.duration !== 0 &&
            courseToSend.duration !== null &&
            courseToSend.duration !== ""
          ) {
            if (
              courseToSend.provider !== null &&
              String(courseToSend.provider) !== "" &&
              String(courseToSend.provider) !== "-1"
            ) {
              if (
                courseToSend.price !== null &&
                validateDinamicFields(course)
              ) {
                if (
                  courseToSend.link_media !== null &&
                  String(courseToSend.link_media) !== ""
                ) {
                  if (validateDinamicFields(course)) {
                    let dataWithFile = new FormData();

                    if (course.document_description !== null) {
                      if (course.document_description.error) {
                        message(
                          "El archivo PDF excede el tamaño permitido (10 MB)",
                          "error",
                          0
                        );
                        return;
                      }
                      if (course.document_description.name !== undefined) {
                        dataWithFile.append(
                          "document_description",
                          course.document_description
                        );
                      }
                    }

                    dataWithFile.append("course", JSON.stringify(courseToSend));

                    let user = getState().user.userData;
                    dispatch(requestCourses());

                    return fetch(
                      process.env.REACT_APP_NODE_URL + "/courses/" + course.id,
                      {
                        method: "PUT",
                        mode: "cors",
                        credentials: "with-credentials",
                        headers: {
                          token: user.token,
                        },
                        body: dataWithFile,
                      }
                    )
                      .then(
                        (response) => {
                          if (response.ok) {
                            return response.json();
                          }
                          if (response.status === 422)
                            return response.json().then((err) => {
                              throw err;
                            });
                        },

                        (error) => console.log("An error occurred.", error)
                      )
                      .then((json) => {
                        console.log(json);
                        if (json && json.status !== 500) {
                          dispatch(requestUpdateCourseSucceded(json.course));
                          message(json.message, "success");
                        } else {
                          dispatch(requestUpdateCourseFailed());
                          if (json !== undefined) {
                            message(json.message, "error");
                          } else {
                            message(
                              "Hubo un error y no se pudo publicar el curso.",
                              "error"
                            );
                          }
                        }
                      })
                      .catch((errors) => {
                        console.log(errors);
                      });
                  }
                } else {
                  message("Ingrese la url de enlace al curso.");
                }
              }
            } else {
              message("Ingrese el profesor que imparte el curso", "error");
            }
          } else {
            message("Ingrese la duración del curso", "error");
          }
        } else {
          message("Ingrese la modalidad del curso", "error");
        }
      } else {
        message("Ingrese la categoría del curso", "error");
      }
    } else {
      message("Ingrese el titulo del curso", "error");
    }
  };
}

export function getCoursesByCategories() {
  return function (dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestCourses());

    return fetch(
      process.env.REACT_APP_NODE_URL + "/courses/categories/filter",
      {
        method: "GET",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token,
        },
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        if (json && json.status !== 500) {
          dispatch(requestGetCoursesByCategoriesSucceded(json.courses));
        } else {
          message(json.message, "error");
          dispatch(requestGetCoursesByCategoriesFailed());
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function getCoursesByModality(modality_id) {
  return function (dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestCourses());

    return fetch(
      process.env.REACT_APP_NODE_URL +
        `/courses/modality/${modality_id}/filter`,
      {
        method: "GET",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token,
        },
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        if (json && json.status !== 500) {
          console.log(json);
          dispatch(requestGetCoursesSucceded(json.courses));
        } else {
          message(json.message, "error");
          dispatch(requestGetCoursesFailed());
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function filterCourses() {
  return function (dispatch, getState) {
    let user = getState().user.userData;
    const category_id = getState().courses.filters.category_id;
    const modality_id = getState().courses.filters.modality_id;
    const name = getState().courses.filters.name;

    var final_url = process.env.REACT_APP_NODE_URL + "/courses/filter?";

    var query = "";

    if (category_id && parseInt(category_id, 10) !== -1) {
      query += `category_id=${category_id}`;
    }

    if (modality_id) {
      if (query !== "") {
        query += "&";
      }
      query += `modality_id=${modality_id}`;
    }

    if (name) {
      if (query !== "") {
        query += "&";
      }
      query += `name=${name}`;
    }

    final_url += query;

    dispatch(requestCourses());

    return fetch(final_url, {
      method: "GET",
      mode: "cors",
      credentials: "with-credentials",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: user.token,
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        if (json && json.status !== 500) {
          console.log(json.courses);
          dispatch(requestGetCoursesSucceded(json.courses));
        } else {
          message(json.message, "error");
          dispatch(requestGetCoursesFailed());
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function downloadPdf(file_name) {
  return function (dispatch) {
    return fetch(
      process.env.REACT_APP_NODE_URL +
        "/uploads/courses/pdfs/" +
        file_name +
        "/download",
      {
        method: "GET",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json);
        if (json && json.status !== 500) {
        } else {
          message(json.message, "error");
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function getFile(file_name) {
  return function (dispatch) {
    return fetch(
      process.env.REACT_APP_NODE_URL +
        "/uploads/courses/pdfs/" +
        file_name +
        "/download",
      {
        method: "GET",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/pdf",
        },
      }
    )
      .then(
        (response) => {
          console.log(response);
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json);
        if (json && json.status !== 500) {
          if (json.status !== 404) {
            dispatch(fileFound(false));
          }
          dispatch(fileFound(false));
        } else {
          dispatch(fileFound(false));
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function markAsPopular(course) {
  return function (dispatch, getState) {
    let user = getState().user.userData;

    dispatch(requestCourses());
    return fetch(
      process.env.REACT_APP_NODE_URL +
        "/courses/" +
        course.id +
        "/markAsPopular",
      {
        method: "PUT",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token,
        },
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json);
        if (json && json.status !== 500) {
          message(json.message, "success", 0);
          dispatch(requestMarkCourseAsPopularSucceded(course));
        } else {
          message(json.message, "error", 0);
          dispatch(requestMarkCourseAsPopularFailed());
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function dismarkAsPopular(course) {
  return function (dispatch, getState) {
    let user = getState().user.userData;

    dispatch(requestCourses());
    return fetch(
      process.env.REACT_APP_NODE_URL +
        "/courses/" +
        course.id +
        "/dismarkAsPopular",
      {
        method: "PUT",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token,
        },
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json);
        if (json && json.status !== 500) {
          message(json.message, "success", 0);
          dispatch(requestDisMarkCourseAsPopularSucceded(course));
        } else {
          message(json.message, "error", 0);
          dispatch(requestDisMarkCourseAsPopularFailed());
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function deleteCourse(course) {
  return function (dispatch, getState) {
    let user = getState().user.userData;

    dispatch(requestCourses());
    return fetch(process.env.REACT_APP_NODE_URL + "/courses/" + course.id, {
      method: "DELETE",
      mode: "cors",
      credentials: "with-credentials",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: user.token,
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json);
        if (json && json.status !== 500) {
          message(json.message, "success", 0);
          dispatch(requestDeleteCourseSucceded(course));
        } else {
          message(json.message, "error", 0);
          dispatch(requestDeleteCourseFailed());
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function reactivateCourse(course_id) {
  return function (dispatch, getState) {
    let user = getState().user.userData;

    dispatch(requestCourses());
    return fetch(
      process.env.REACT_APP_NODE_URL + "/courses/" + course_id + "/reactivate",
      {
        method: "PUT",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token,
        },
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json);
        if (json && json.status !== 500) {
          message(json.message, "success", 0);
          dispatch(requestReactivateCourseSucceded(course_id));
        } else {
          message(json.message, "error", 0);
          dispatch(requestReactivateCourseFailed());
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function uploadCourseImage(course, event) {
  return function (dispatch, getState) {
    let allowed_extensions = ["jpg", "jpeg", "png", "gif"];
    let file = event.target.files[0];
    let short_name = file.name.split(".");
    let extension = short_name[short_name.length - 1];
    const MB = 1000000;

    if (file) {
      if (allowed_extensions.indexOf(extension) >= 0) {
        const dataWithFile = new FormData();
        dataWithFile.append("image", file);
        let user = getState().user.userData;

        if (event.target.files[0] && event.target.files[0].size / MB < 2) {
          dispatch(requestCourses());

          return fetch(
            process.env.REACT_APP_NODE_URL + "/courses/" + course.id,
            {
              method: "PATCH",
              mode: "cors",
              credentials: "with-credentials",
              headers: {
                token: user.token,
              },
              body: dataWithFile,
            }
          )
            .then(
              (response) => {
                if (response.ok) {
                  return response.json();
                }
                if (response.status === 422)
                  return response.json().then((err) => {
                    throw err;
                  });
              },

              (error) => console.log("An error occurred.", error)
            )
            .then((json) => {
              console.log(json);
              if (json && json.status !== 500) {
                dispatch(requestUploadCourseImageSucceded(course, json.image));
                message(json.message, "success", 0);
              } else {
                dispatch(requestUploadCourseImageFailed());
                message(json.message, "error");
              }
            })
            .catch((errors) => {
              console.log(errors);
            });
        } else {
          message("El archivo excede el tamaño permitido (2 MB)", "error", 0);
        }
      } else {
        message(
          "Formato de archivo no válido, las extensiones permitidas son " +
            allowed_extensions.join(", "),
          "error",
          0
        );
      }
    } else {
      message("No se ha seleccionado ninguna imágen", "error", 0);
    }
  };
}

export function sendBuyRequest(user, course) {
  console.log(user, course);

  const body = {
    email: user.email,
    phone: user.user_profile.phone,
    adress: user.user_profile.adress,
    comment: course.buy_comment,
  };

  return function (dispatch, getState) {
    dispatch(requestSendBuyRequest());

    let token = getState().user.userData.token;
    
    return fetch(
      process.env.REACT_APP_NODE_URL +
        "/courses/" +
        course.id +
        "/sendBuyRequest",
      {
        method: "GET",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          token: token,
        }
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json)
        if (json && json.status !== 500) {
          dispatch(requestSendBuyRequestSuccess(json));
          history.push({
            pathname: '/web-pay-redirect',
          })
        } else {

          if (Array.isArray(json.errors)) {
            json.errors.map((err) => {
              message(err.msg, "error", 0);
            });
          } else {
            message(json.message, "error", 0);
          }

          dispatch(requestSendBuyRequestFailed());

        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function unBlockCourse(tokenParam) {
  let body = {
    token: tokenParam,
  };

  return function (dispatch, getState) {
    let token = getState().user.userData.token;

    dispatch(requestUnblockCourse());

    return fetch(
      process.env.REACT_APP_NODE_URL + "/courses/user/courseUnblock",
      {
        method: "POST",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: token,
        },
        body: JSON.stringify(body),
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then((err) => {
              throw err;
            });
        },

        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log(json);
        if (json && json.status !== 500) {
          dispatch(requestUnblockCourseSuccess(json.course));
        } else {
          document.getElementById("goBack").click();
          message(json.message, "error", 0);
          dispatch(requestUnblockCourseFailed());
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}
