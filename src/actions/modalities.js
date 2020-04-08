import fetch from "cross-fetch";
import message from "../components/utils/message";

//SIMPLE CONSTANTS
export const NEW_MODALITY = "NEW_MODALITY";
export const CANCEL_NEW_MODALITY = "CANCEL_NEW_MODALITY";
export const HANDLE_NEW_MODALITY_INPUT_CHANGE =
  "HANDLE_NEW_MODALITY_INPUT_CHANGE";
export const HANDLE_EDIT_MODALITY_INPUT_CHANGE =
  "HANDLE_EDIT_MODALITY_INPUT_CHANGE";
export const EDIT_MODALITY = "EDIT_MODALITY";
export const CANCEL_EDIT_MODALITY = "CANCEL_EDIT_MODALITY";
export const DELETE_MODALITY = "DELETE_MODALITY";
export const CANCEL_DELETE_MODALITY = "CANCEL_DELETE_MODALITY";

//REQUEST CONSTANTS
export const REQUEST_MODALITIES = "REQUEST_MODALITIES";
export const REQUEST_MODALITIES_SUCCEDED = "REQUEST_MODALITIES_SUCCEDED";
export const REQUEST_MODALITIES_FAILED = "REQUEST_MODALITIES_FAILED";
export const REQUEST_SAVE_MODALITY_SUCCEDED = "REQUEST_SAVE_MODALITY_SUCCEDED";
export const REQUEST_SAVE_MODALITY_FAILED = "REQUEST_SAVE_MODALITY_FAILED";
export const REQUEST_UPDATE_MODALITY_SUCCEDED =
  "REQUEST_UPDATE_MODALITY_SUCCEDED";
export const REQUEST_UPDATE_MODALITY_FAILED = "REQUEST_UPDATE_MODALITY_FAILED";
export const REQUEST_DELETE_MODALITY_SUCCEDED =
  "REQUEST_DELETE_MODALITY_SUCCEDED";
export const REQUEST_DELETE_MODALITY_FAILED = "REQUEST_DELETE_MODALITY_FAILED";
export const REQUEST_REACTIVATE_MODALITY_SUCCEDED =
  "REQUEST_REACTIVATE_MODALITY_SUCCEDED";
export const REQUEST_REACTIVATE_MODALITY_FAILED =
  "REQUEST_REACTIVATE_MODALITY_FAILED";

//SIMPLE ACTIONS

export function handleNewInputChange(event) {
  return {
    type: HANDLE_NEW_MODALITY_INPUT_CHANGE,
    event,
  };
}

export function handleEditInputChange(modality, event) {
  return {
    type: HANDLE_EDIT_MODALITY_INPUT_CHANGE,
    event,
    modality,
  };
}

export function editModality(modality) {
  return {
    type: EDIT_MODALITY,
    modality,
  };
}

export function cancelEditModality(modality) {
  return {
    type: CANCEL_EDIT_MODALITY,
    modality,
  };
}

export function deleteModality(modality) {
  return {
    type: DELETE_MODALITY,
    modality,
  };
}

export function cancelDeleteModality() {
  return {
    type: CANCEL_DELETE_MODALITY,
  };
}

//REQUEST ACTIONS

function requestModalities() {
  return {
    type: REQUEST_MODALITIES,
  };
}

export function newModality() {
  return {
    type: NEW_MODALITY,
  };
}

export function cancelNewModality() {
  return {
    type: CANCEL_NEW_MODALITY,
  };
}

function requestModalitiesSucceded(modalities) {
  return {
    type: REQUEST_MODALITIES_SUCCEDED,
    modalities,
  };
}

function requestModalitiesFailed() {
  return {
    type: REQUEST_MODALITIES_FAILED,
  };
}

function requestSaveModalitySucceded(modality) {
  return {
    type: REQUEST_SAVE_MODALITY_SUCCEDED,
    modality,
  };
}

function requestSaveModalityFailed() {
  return {
    type: REQUEST_SAVE_MODALITY_FAILED,
  };
}

function requestUpdateModalitySucceded(modality) {
  return {
    type: REQUEST_UPDATE_MODALITY_SUCCEDED,
    modality,
  };
}

function requestUpdateModalityFailed() {
  return {
    type: REQUEST_UPDATE_MODALITY_FAILED,
  };
}

function requestDeleteModalitySucceded(modality) {
  return {
    type: REQUEST_DELETE_MODALITY_SUCCEDED,
    modality,
  };
}

function requestDeleteModalityFailed() {
  return {
    type: REQUEST_DELETE_MODALITY_FAILED,
  };
}

function requestReactivateModalitySucceded(modality) {
  return {
    type: REQUEST_REACTIVATE_MODALITY_SUCCEDED,
    modality,
  };
}

function requestReactivateModalityFailed() {
  return {
    type: REQUEST_REACTIVATE_MODALITY_FAILED,
  };
}

export function fetchModalities() {
  return function (dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestModalities());
    fetch(process.env.REACT_APP_NODE_URL + "/modalities", {
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
        console.log(json);
        if (json && json.status !== 500) {
          dispatch(requestModalitiesSucceded(json.modalities));
        } else {
          dispatch(requestModalitiesFailed());
          message(json.message, "error");
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function fetchModalitiesActives() {
  return function (dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestModalities());
    fetch(process.env.REACT_APP_NODE_URL + "/modalities/actives", {
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
          dispatch(requestModalitiesSucceded(json.modalities));
        } else {
          dispatch(requestModalitiesFailed());
          message(json.message, "error");
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function fetchSaveModality(modality) {
  return function (dispatch, getState) {
    if (
      modality.name === "" ||
      modality.name === undefined ||
      modality.name === null ||
      modality.description === "" ||
      modality.description === undefined ||
      modality.description === null
    ) {
      message("El nombre y la descripción son necesarios", "error");
      return;
    } else {
      let user = getState().user.userData;
      dispatch(requestModalities());
      fetch(process.env.REACT_APP_NODE_URL + "/modalities", {
        method: "POST",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token,
        },
        body: JSON.stringify(modality),
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
            dispatch(requestSaveModalitySucceded(json.modality));
            message(json.message, "success", 200);
          } else {
            dispatch(requestSaveModalityFailed());
            message(json.message, "error");
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
  };
}

export function fetchUpdateModality(modalityToSend) {
  return function (dispatch, getState) {
    var modality = {
      name: modalityToSend.name,
      description: modalityToSend.description,
    };
    if (
      modality.name === "" ||
      modality.name === undefined ||
      modality.name === null ||
      modality.description === "" ||
      modality.description === undefined ||
      modality.description === null
    ) {
      message("El nombre y la descripción son necesarios", "error");
      return;
    } else {
      let user = getState().user.userData;
      dispatch(requestModalities());
      fetch(
        process.env.REACT_APP_NODE_URL + "/modalities/" + modalityToSend.id,
        {
          method: "PUT",
          mode: "cors",
          credentials: "with-credentials",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: user.token,
          },
          body: JSON.stringify(modality),
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
            dispatch(requestUpdateModalitySucceded(json.modality));
            message(json.message, "success", 200);
          } else {
            dispatch(requestUpdateModalityFailed());
            message(json.message, "error");
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
  };
}

export function fetchDeleteModality(modality) {
  return function (dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestModalities());
    fetch(process.env.REACT_APP_NODE_URL + "/modalities/" + modality.id, {
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
          dispatch(requestDeleteModalitySucceded(modality));
          message(json.message, "success", 200);
        } else {
          dispatch(requestDeleteModalityFailed());
          message(json.message, "error");
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}

export function fetchReactivateModality(modality) {
  return function (dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestModalities());
    fetch(
      process.env.REACT_APP_NODE_URL +
        "/modalities/" +
        modality.id +
        "/reactivate",
      {
        method: "POST",
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
          dispatch(requestReactivateModalitySucceded(modality));
          message(json.message, "success", 200);
        } else {
          dispatch(requestReactivateModalityFailed());
          message(json.message, "error");
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
}
