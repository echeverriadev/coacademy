import fetch from "cross-fetch";
import message from '../components/utils/message'

//SIMPLE CONSTANTS
export const NEW_CATEGORY = "NEW_CATEGORY";
export const CANCEL_NEW_CATEGORY = "CANCEL_NEW_CATEGORY";
export const HANDLE_NEW_CATEGORY_INPUT_CHANGE = "HANDLE_NEW_CATEGORY_INPUT_CHANGE";
export const HANDLE_EDIT_CATEGORY_INPUT_CHANGE = "HANDLE_EDIT_CATEGORY_INPUT_CHANGE";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const CANCEL_EDIT_CATEGORY = "CANCEL_EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const CANCEL_DELETE_CATEGORY = "CANCEL_DELETE_CATEGORY";

//REQUEST CONSTANTS
export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const REQUEST_CATEGORIES_SUCCEDED = "REQUEST_CATEGORIES_SUCCEDED";
export const REQUEST_CATEGORIES_FAILED = "REQUEST_CATEGORIES_FAILED";
export const REQUEST_SAVE_CATEGORY_SUCCEDED = "REQUEST_SAVE_CATEGORY_SUCCEDED";
export const REQUEST_SAVE_CATEGORY_FAILED = "REQUEST_SAVE_CATEGORY_FAILED";
export const REQUEST_UPDATE_CATEGORY_SUCCEDED = "REQUEST_UPDATE_CATEGORY_SUCCEDED";
export const REQUEST_UPDATE_CATEGORY_FAILED = "REQUEST_UPDATE_CATEGORY_FAILED";
export const REQUEST_DELETE_CATEGORY_SUCCEDED = "REQUEST_DELETE_CATEGORY_SUCCEDED";
export const REQUEST_DELETE_CATEGORY_FAILED = "REQUEST_DELETE_CATEGORY_FAILED";
export const REQUEST_REACTIVATE_CATEGORY_SUCCEDED = "REQUEST_REACTIVATE_CATEGORY_SUCCEDED";
export const REQUEST_REACTIVATE_CATEGORY_FAILED = "REQUEST_REACTIVATE_CATEGORY_FAILED";

//SIMPLE ACTIONS

export function handleNewInputChange(event) {
  return {
    type: HANDLE_NEW_CATEGORY_INPUT_CHANGE,
    event
  };
}

export function handleEditInputChange(category, event) {
  return {
    type: HANDLE_EDIT_CATEGORY_INPUT_CHANGE,
    event,
    category
  };
}

export function editCategory(category) {
  return {
    type: EDIT_CATEGORY,
    category
  };
}

export function cancelEditCategory(category) {
  return {
    type: CANCEL_EDIT_CATEGORY,
    category
  };
}

export function deleteCategory(category) {
  return {
    type: DELETE_CATEGORY,
    category
  };
}

export function cancelDeleteCategory() {
  return {
    type: CANCEL_DELETE_CATEGORY
  };
}

//REQUEST ACTIONS

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  };
}

export function newCategory() {
  return {
    type: NEW_CATEGORY
  };
}

export function cancelNewCategory() {
  return {
    type: CANCEL_NEW_CATEGORY
  };
}

function requestCategoriesSucceded(categories) {
  return {
    type: REQUEST_CATEGORIES_SUCCEDED,
    categories
  };
}

function requestCategoriesFailed() {
  return {
    type: REQUEST_CATEGORIES_FAILED
  };
}

function requestSaveCategorySucceded(category) {
  return {
    type: REQUEST_SAVE_CATEGORY_SUCCEDED,
    category
  };
}

function requestSaveCategoryFailed() {
  return {
    type: REQUEST_SAVE_CATEGORY_FAILED
  };
}

function requestUpdateCategorySucceded(category) {
  return {
    type: REQUEST_UPDATE_CATEGORY_SUCCEDED,
    category
  };
}

function requestUpdateCategoryFailed() {
  return {
    type: REQUEST_UPDATE_CATEGORY_FAILED
  };
}

function requestDeleteCategorySucceded(category) {
  return {
    type: REQUEST_DELETE_CATEGORY_SUCCEDED,
    category
  };
}

function requestDeleteCategoryFailed() {
  return {
    type: REQUEST_DELETE_CATEGORY_FAILED
  };
}

function requestReactivateCategorySucceded(category) {
  return {
    type: REQUEST_REACTIVATE_CATEGORY_SUCCEDED,
    category
  };
}

function requestReactivateCategoryFailed() {
  return {
    type: REQUEST_REACTIVATE_CATEGORY_FAILED
  };
}

export function fetchActiveCategories() {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestCategories());
    fetch(process.env.REACT_APP_NODE_URL + "/categories/actives", {
      method: "GET",
      mode: "cors",
      credentials: "with-credentials",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: user.token
      }
    })
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then(err => {
              throw err;
            });
        },
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        if (json && json.status !== 500) {
          dispatch(requestCategoriesSucceded(json.categories));
        } else {
          dispatch(requestCategoriesFailed());
          message(json.message, 'error');
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}

export function fetchCategories() {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestCategories());
    fetch(process.env.REACT_APP_NODE_URL + "/categories", {
      method: "GET",
      mode: "cors",
      credentials: "with-credentials",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: user.token
      }
    })
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then(err => {
              throw err;
            });
        },
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        if (json && json.status !== 500) {
          dispatch(requestCategoriesSucceded(json.categories));
        } else {
          dispatch(requestCategoriesFailed());
          message(json.message, 'error');
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}

export function fetchCategoriesActives() {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestCategories());
    fetch(process.env.REACT_APP_NODE_URL + "/categories/actives", {
      method: "GET",
      mode: "cors",
      credentials: "with-credentials",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: user.token
      }
    })
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then(err => {
              throw err;
            });
        },
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        if (json && json.status !== 500) {
          dispatch(requestCategoriesSucceded(json.categories));
        } else {
          dispatch(requestCategoriesFailed());
          message(json.message, 'error');
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}

export function fetchSaveCategory(category) {
  return function(dispatch, getState) {
    if (
      category.name === "" ||
      category.name === undefined ||
      category.name === null ||
      category.description === "" ||
      category.description === undefined ||
      category.description === null
    ) {
      message("El nombre y la descripción son necesarios", "error");
      return;
    } else {
      let user = getState().user.userData;
      dispatch(requestCategories());
      fetch(process.env.REACT_APP_NODE_URL + "/categories", {
        method: "POST",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token
        },
        body: JSON.stringify(category)
      })
        .then(
          response => {
            if (response.ok) {
              return response.json();
            }
            if (response.status === 422)
              return response.json().then(err => {
                throw err;
              });
          },
          error => console.log("An error occurred.", error)
        )
        .then(json => {
          if (json && json.status !== 500) {
            dispatch(requestSaveCategorySucceded(json.category));
            message(json.message, 'success', 200);
          } else {
            dispatch(requestSaveCategoryFailed());
            message(json.message, 'error');
          }
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  };
}

export function fetchUpdateCategory(categoryToSend) {
  return function(dispatch, getState) {
    var category = {
      name: categoryToSend.name,
      description: categoryToSend.description
    };
    if (
      category.name === "" ||
      category.name === undefined ||
      category.name === null ||
      category.description === "" ||
      category.description === undefined ||
      category.description === null
    ) {
      message("El nombre y la descripción son necesarios", "error");
      return;
    } else {
      let user = getState().user.userData;
      dispatch(requestCategories());
      fetch(process.env.REACT_APP_NODE_URL + "/categories/" + categoryToSend.id, {
        method: "PUT",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token
        },
        body: JSON.stringify(category)
      })
        .then(
          response => {
            if (response.ok) {
              return response.json();
            }
            if (response.status === 422)
              return response.json().then(err => {
                throw err;
              });
          },
          error => console.log("An error occurred.", error)
        )
        .then(json => {
          if (json && json.status !== 500) {
            dispatch(requestUpdateCategorySucceded(json.category));
            message(json.message, 'success', 200);
          } else {
            dispatch(requestUpdateCategoryFailed());
            message(json.message, 'error');
          }
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  };
}

export function fetchDeleteCategory(category) {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestCategories());
    fetch(process.env.REACT_APP_NODE_URL + "/categories/" + category.id, {
      method: "DELETE",
      mode: "cors",
      credentials: "with-credentials",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        token: user.token
      }
    })
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then(err => {
              throw err;
            });
        },
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        console.log(json);
        if (json && json.status !== 500) {
          dispatch(requestDeleteCategorySucceded(category));
          message(json.message, 'success', 200)
        } else {
          dispatch(requestDeleteCategoryFailed());
          message(json.message, 'error');
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}

export function fetchReactivateCategory(category) {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestCategories());
    fetch(
      process.env.REACT_APP_NODE_URL + "/categories/" + category.id + "/reactivate",
      {
        method: "POST",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token
        }
      }
    )
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          if (response.status === 422)
            return response.json().then(err => {
              throw err;
            });
        },
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        console.log(json);
        if (json && json.status !== 500) {
          dispatch(requestReactivateCategorySucceded(category));
          message(json.message, 'success', 200);
        } else {
          dispatch(requestReactivateCategoryFailed());
          message(json.message, 'error');
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}
