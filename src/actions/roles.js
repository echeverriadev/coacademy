import fetch from 'cross-fetch'
import message from "../components/utils/message";

//SIMPLE CONSTANTS
export const NEW_ROLE = 'NEW_ROLE';
export const CANCEL_NEW_ROLE = 'CANCEL_NEW_ROLE';
export const HANDLE_NEW_ROLE_INPUT_CHANGE = 'HANDLE_NEW_ROLE_INPUT_CHANGE'
export const HANDLE_EDIT_ROLE_INPUT_CHANGE = "HANDLE_EDIT_ROLE_INPUT_CHANGE";
export const EDIT_ROLE = 'EDIT_ROLE'
export const CANCEL_EDIT_ROLE = 'CANCEL_EDIT_ROLE'
export const DELETE_ROLE = 'DELETE_ROLE';
export const CANCEL_DELETE_ROLE = 'CANCEL_DELETE_ROLE';

//REQUEST CONSTANTS
export const REQUEST_ROLES = 'REQUEST_ROLES';
export const REQUEST_ROLES_SUCCEDED = 'REQUEST_ROLES_SUCCEDED';
export const REQUEST_ROLES_FAILED = 'REQUEST_ROLES_FAILED';
export const REQUEST_SAVE_ROLE_SUCCEDED = 'REQUEST_SAVE_ROLE_SUCCEDED'
export const REQUEST_SAVE_ROLE_FAILED = 'REQUEST_SAVE_ROLE_FAILED'
export const REQUEST_UPDATE_ROLE_SUCCEDED = 'REQUEST_UPDATE_ROLE_SUCCEDED'
export const REQUEST_UPDATE_ROLE_FAILED = 'REQUEST_UPDATE_ROLE_FAILED'
export const REQUEST_DELETE_ROLE_SUCCEDED = 'REQUEST_DELETE_ROLE_SUCCEDED'
export const REQUEST_DELETE_ROLE_FAILED = 'REQUEST_DELETE_ROLE_FAILED'
export const REQUEST_REACTIVATE_ROLE_SUCCEDED = 'REQUEST_REACTIVATE_ROLE_SUCCEDED'
export const REQUEST_REACTIVATE_ROLE_FAILED = 'REQUEST_REACTIVATE_ROLE_FAILED'

//SIMPLE ACTIONS

export function handleNewInputChange(event){
    return {
        type: HANDLE_NEW_ROLE_INPUT_CHANGE,
        event
    }
}

export function handleEditInputChange(role, event) {
  return {
    type: HANDLE_EDIT_ROLE_INPUT_CHANGE,
    event,
    role
  };
}

export function editRole(role){
  return {
    type: EDIT_ROLE,
    role
  }
}

export function cancelEditRole(role){
  return {
    type: CANCEL_EDIT_ROLE,
    role
  }
}

export function deleteRole(role) {
  return {
    type: DELETE_ROLE,
    role
  };
}

export function cancelDeleteRole() {
  return {
    type: CANCEL_DELETE_ROLE
  };
}

//REQUEST ACTIONS

function requestRoles(){
    return {
        type: REQUEST_ROLES
    }
}

export function newRole() {
  return {
    type: NEW_ROLE
  };
}

export function cancelNewRole() {
  return {
    type: CANCEL_NEW_ROLE
  };
}

function requestRolesSucceded(roles){
    return {
        type: REQUEST_ROLES_SUCCEDED,
        roles
    }
}

function requestRolesFailed(){
    return {
        type: REQUEST_ROLES_FAILED
    }
}

function requestSaveRoleSucceded(role) {
  return {
    type: REQUEST_SAVE_ROLE_SUCCEDED,
    role
  };
}

function requestSaveRoleFailed() {
  return {
    type: REQUEST_SAVE_ROLE_FAILED
  };
}

function requestUpdateRoleSucceded(role) {
  return {
    type: REQUEST_UPDATE_ROLE_SUCCEDED,
    role
  };
}

function requestUpdateRoleFailed() {
  return {
    type: REQUEST_UPDATE_ROLE_FAILED
  };
}

function requestDeleteRoleSucceded(role) {
  return {
    type: REQUEST_DELETE_ROLE_SUCCEDED,
    role
  };
}

function requestDeleteRoleFailed() {
  return {
    type: REQUEST_DELETE_ROLE_FAILED
  };
}

function requestReactivateRoleSucceded(role){
  return {
    type: REQUEST_REACTIVATE_ROLE_SUCCEDED,
    role
  }
}

function requestReactivateRoleFailed(){
  return {
    type: REQUEST_REACTIVATE_ROLE_FAILED
  };
}

export function fetchRoles(){

    return function(dispatch, getState){
        let user = getState().user.userData;
        dispatch(requestRoles());
        fetch(process.env.REACT_APP_NODE_URL + "/roles", {
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
              console.log("SUCCESS")
              dispatch(requestRolesSucceded(json.roles));
            } else {
              dispatch(requestRolesFailed());
              message(json.message, 'error');
            }
          })
          .catch(errors => {
            console.log(errors);
          });;
    }

}

export function fetchSaveRole(role) {

  return function(dispatch, getState) {
    if (
      role.name === "" ||
      role.name === undefined ||
      role.name === null ||
      role.description === "" ||
      role.description === undefined ||
      role.description === null 
    ){
      message('El nombre y la descripción son necesarios', 'error')
      return;
    }else{
        let user = getState().user.userData;
        dispatch(requestRoles());
        fetch(process.env.REACT_APP_NODE_URL + "/roles", {
          method: "POST",
          mode: "cors",
          credentials: "with-credentials",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: user.token
          },
          body: JSON.stringify(role)
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
              dispatch(requestSaveRoleSucceded(json.role));
              message(json.message, 'success', 200)
            } else {
              dispatch(requestSaveRoleFailed());
              message(json.message, 'error');
            }
          })
          .catch(errors => {
            console.log(errors);
          });
      };
  }
}

export function fetchUpdateRole(roleToSend) {
  return function(dispatch, getState) {
    var role = {
      name: roleToSend.name,
      description: roleToSend.description
    }
    if (
      role.name === "" ||
      role.name === undefined ||
      role.name === null ||
      role.description === "" ||
      role.description === undefined ||
      role.description === null
    ) {
      message("El nombre y la descripción son necesarios", "error");
      return;
    } else {
      let user = getState().user.userData;
      dispatch(requestRoles());
      fetch(process.env.REACT_APP_NODE_URL + "/roles/" + roleToSend.id, {
        method: "PUT",
        mode: "cors",
        credentials: "with-credentials",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: user.token
        },
        body: JSON.stringify(role)
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
            dispatch(requestUpdateRoleSucceded(json.role));
            message(json.message, 'success', 200)
          } else {
            dispatch(requestUpdateRoleFailed());
            message(json.message, 'error');
          }
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  };
}

export function fetchDeleteRole(role) {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestRoles());
    fetch(process.env.REACT_APP_NODE_URL + "/roles/" + role.id, {
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
          dispatch(requestDeleteRoleSucceded(role));
          message(json.message, 'success', 200)
        } else {
          dispatch(requestDeleteRoleFailed());
          message(json.message, 'error');
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}

export function fetchReactivateRole(role) {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestRoles());
    fetch(
      process.env.REACT_APP_NODE_URL + "/roles/" + role.id + "/reactivate",
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
          dispatch(requestReactivateRoleSucceded(role));
          message(json.message, 'success', 200)
        } else {
          dispatch(requestReactivateRoleFailed());
          message(json.message, 'error');
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}