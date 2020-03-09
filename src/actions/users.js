import fetch from 'cross-fetch'
import history from '../history'
import message from '../components/utils/message'
import {requestUploadImageSucceded} from './main'

declare var $:any;

export const SET_USER = 'SET_USER'
export const CANCEL_DELETE_USER = 'CANCEL_DELETE_USER'
export const VIEW_USER_DETAILS = 'VIEW_USER_DETAILS'
export const EDIT_USER_DETAILS = 'EDIT_USER_DETAILS'
export const CANCEL_EDIT_USER = 'CANCEL_EDIT_USER'
export const GO_BACK_TO_USERS_LIST = 'GO_BACK_TO_USERS_LIST'
export const HANDLE_EDIT_INPUT_CHANGE = 'HANDLE_EDIT_INPUT_CHANGE'
export const HANDLE_NEW_INPUT_CHANGE = 'HANDLE_NEW_INPUT_CHANGE'
export const CANCEL_NEW_USER = 'CANCEL_NEW_USER'
export const NEW_USER = 'NEW_USER'

// Actions Requests
export const REQUEST_USERS = 'REQUEST_USERS'
export const REQUEST_GET_USERS_SUCCEDED = 'REQUEST_GET_USERS_SUCCEDED'
export const REQUEST_GET_USERS_FAILED = 'REQUEST_GET_USERS_FAILED'
export const REQUEST_DELETE_USER_SUCCEDED = 'REQUEST_DELETE_USER_SUCCEDED'
export const REQUEST_DELETE_USER_FAILED = 'REQUEST_DELETE_USER_FAILED'
export const REQUEST_UPDATE_USER_SUCCEDED = 'REQUEST_UPDATE_USER_SUCCEDED'
export const REQUEST_UPDATE_USER_FAILED = 'REQUEST_UPDATE_USER_FAILED'
export const REQUEST_SAVE_USER_SUCCEDED = 'REQUEST_SAVE_USER_SUCCEDED'
export const REQUEST_SAVE_USER_FAILED = 'REQUEST_SAVE_USER_FAILED'
export const REQUEST_REACTIVATE_USER_SUCCEDED = 'REQUEST_REACTIVATE_USER_SUCCEDED'
export const REQUEST_REACTIVATE_USER_FAILED = 'REQUEST_REACTIVATE_USER_FAILED'
export const REQUEST_UPLOAD_USER_IMAGE_SUCCEDED = 'REQUEST_UPLOAD_USER_IMAGE_SUCCEDED'
export const REQUEST_UPLOAD_USER_IMAGE_FAILED = 'REQUEST_UPLOAD_USER_IMAGE_FAILED'
export const REQUEST_GET_USER_SUCCEDED = 'REQUEST_GET_USER_SUCCEDED'
export const REQUEST_GET_USER_FAILED = 'REQUEST_GET_USER_FAILED'
export const REQUEST_GET_PROVIDERS_SUCCEDED = 'REQUEST_GET_PROVIDERS_SUCCEDED'
export const REQUEST_GET_PROVIDERS_FAILED = 'REQUEST_GET_PROVIDERS_FAILED'
export const REQUEST_GET_STUDENTS_SUCCEDED = 'REQUEST_GET_STUDENTS_SUCCEDED'
export const REQUEST_GET_STUDENTS_FAILED = 'REQUEST_GET_STUDENTS_FAILED'

function requestUsers(){
	return {
		type: REQUEST_USERS
	}
}

function requestGetProvidersSucceded(users) {
  return {
    type: REQUEST_GET_PROVIDERS_SUCCEDED,
    users
  };
}

function requestGetProvidersFailed() {
  return {
    type: REQUEST_GET_PROVIDERS_FAILED
  };
}

function requestGetStudentsSucceded(users) {
  return {
    type: REQUEST_GET_STUDENTS_SUCCEDED,
    users
  };
}

function requestGetStudentsFailed() {
  return {
    type: REQUEST_GET_STUDENTS_FAILED
  };
}

function requestGetUsersSucceded(users){
	return {
		type: REQUEST_GET_USERS_SUCCEDED,
		users
	}
}

function requestGetUsersFailed(){
	return {
		type: REQUEST_GET_USERS_FAILED
	}
}

function requestGetUserSucceded(user){
	return {
		type: REQUEST_GET_USER_SUCCEDED,
		user
	}
}

function requestGetUserFailed(){
	return {
		type: REQUEST_GET_USER_FAILED
	}
}

function requestUpdateUserSucceded(user){
	return {
		type: REQUEST_UPDATE_USER_SUCCEDED,
		user
	}
}

function requestUpdateUserFailed(){
	return {
		type: REQUEST_UPDATE_USER_FAILED
	}
}

function requestSaveUserSucceded(user){
	return {
		type: REQUEST_SAVE_USER_SUCCEDED,
		user
	}
}

function requestSaveUserFailed(){
	return {
		type: REQUEST_SAVE_USER_FAILED
	}
}

function requestDeleteUserSucceded(id){
	return {
		type: REQUEST_DELETE_USER_SUCCEDED,
		id
	}
}

function requestDeleteUserFailed(){
	return {
		type: REQUEST_DELETE_USER_FAILED
	}
}

function requestReactivateUserSucceded(id){
	return {
		type: REQUEST_REACTIVATE_USER_SUCCEDED,
		id
	}
}

function requestReactivateUserFailed(){
	return {
		type: REQUEST_REACTIVATE_USER_FAILED
	}
}

function requestUploadUserImageSucceded(user, image){
	return{
		type: REQUEST_UPLOAD_USER_IMAGE_SUCCEDED,
		user,
		image
	}
}

function requestUploadUserImageFailed(){
	return {
		type: REQUEST_UPLOAD_USER_IMAGE_FAILED
	}
}

export function cancelDeleteUser(user){
	return {
		type: CANCEL_DELETE_USER,
		user
	}
}

export function setUser(user){
	return {
		type: SET_USER,
		user
	}
}

export function viewUserDetails(user) {
	return {
		type: VIEW_USER_DETAILS,
		user
	}
}

export function editUserDetails(user) {
	return {
		type: EDIT_USER_DETAILS,
		user
	}
}

export function cancelEditUser() {
	return {
		type: CANCEL_EDIT_USER
	}
}

function goBackToList() {
	return {
		type: GO_BACK_TO_USERS_LIST
	}
}

export function goBackToUsersList(){
	return (dispatch) => {
		dispatch(goBackToList())
	}
}

export function handleEditInputChange(event){
	return {
		type: HANDLE_EDIT_INPUT_CHANGE,
		event
	}
}

export function handleNewInputChange(event){
	return {
		type: HANDLE_NEW_INPUT_CHANGE,
		event
	}
}

export function cancelSaveUser(){
	return {
		type: CANCEL_NEW_USER
	}
}

export function newUser(){
	return {
		type: NEW_USER
	}
}

export function getProviders() {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestUsers())

    return fetch(process.env.REACT_APP_NODE_URL + "/users/providers", {
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
          console.log("SUCESSS");
          dispatch(requestGetProvidersSucceded(json.users));
        } else {
          message(json.message, "error");
          dispatch(requestGetProvidersFailed());
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}

export function getStudents() {
  return function(dispatch, getState) {
    let user = getState().user.userData;
    dispatch(requestUsers())

    return fetch(process.env.REACT_APP_NODE_URL + "/users/students", {
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
          console.log("SUCESSS");
          dispatch(requestGetStudentsSucceded(json.users));
        } else {
          message(json.message, "error");
          dispatch(requestGetStudentsFailed());
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
}

function loadTable(){
	var script=document.createElement('script');
    script.type='text/javascript';
    script.src='assets/js/dataTables/custom-reload-table.js';
    
    $("body>div").append(script);
}

export function getUsers(){
	
	return function(dispatch, getState) {
		let user = getState().user.userData
		dispatch(requestUsers())
	   
	    return fetch(process.env.REACT_APP_NODE_URL+"/users",{
	        method: "GET",
	        mode: "cors",
	        credentials: "with-credentials",
			    headers: {
			        "Content-Type": "application/json; charset=utf-8",
			        "token": user.token
			    }
	    })
	    .then(
	      response => {
	  		if (response.ok){
					return response.json()
				}	
				if (response.status === 422)
					return response.json().then(err => { throw err; });
			},

	      error => console.log('An error occurred.', error)
	    )
	    .then(json => {
	    	if (json && json.status !== 500) {
	    		console.log("SUCESSS")
					dispatch(requestGetUsersSucceded(json.users))
					if($('.dataTables_wrapper').length <= 0){
						loadTable();	
					}
	    	}else{
	    		message(json.message, 'error')
					dispatch(requestGetUsersFailed())
	    	}
	    }
	    )
	    .catch((errors) => {
				console.log(errors);
			});		  
	}
}

export function getUser(id){

	return function(dispatch, getState) {
		
		let user = getState().user.userData

		dispatch(requestUsers())
	   
	    return fetch(process.env.REACT_APP_NODE_URL+"/users/"+id,{
	        method: "GET",
	        mode: "cors",
	        credentials: "with-credentials",
			    headers: {
			        "Content-Type": "application/json; charset=utf-8",
			        "token": user.token
			    }
	    })
	    .then(
	      response => {
	  		if (response.ok){
					return response.json()
				}	
				if (response.status === 422)
					return response.json().then(err => { throw err; });
			},

	      error => console.log('An error occurred.', error)
	    )
	    .then(json => {
	    	if (json && json.status !== 500) {
	    		console.log("SUCESSS")
					dispatch(requestGetUserSucceded(json.user))	
	    	}else{
	    		message(json.message, 'error')
					dispatch(requestGetUserFailed())
	    	}
	    }
	    )
	    .catch((errors) => {
				console.log(errors);
			});		  
	}
}

export function updateUser(user){
		
	let userToSend = {
    name: user.user_profile.name || "",
    last_name: user.user_profile.lastname || "",
    twitter: user.user_profile.twitter || "",
    instagram: user.user_profile.instagram || "",
    facebook: user.user_profile.facebook || "",
    linkedin: user.user_profile.linkedin || "",
    phone: user.user_profile.phone || "",
	sex: user.user_profile.sex || "",
	adress: user.user_profile.adress || '',
	description: user.user_profile.description || ''
	}

	console.log(userToSend)

	return function (dispatch, getState) {

		if(userToSend.phone !== "" && userToSend.phone !== null && userToSend.phone !== undefined){
	   	let token = getState().user.userData.token
			dispatch(requestUsers())
		    return fetch(process.env.REACT_APP_NODE_URL+"/users/"+user.id,{
		        method: "PUT",
		        mode: "cors",
		        credentials: "with-credentials",
				    headers: {
				        "Content-Type": "application/json; charset=utf-8",
				        "token": token
				    },
		        body: JSON.stringify(userToSend)
		    })
	      .then(
	        response => {
	    		if (response.ok){
						return response.json()
					}	
					if (response.status === 422)
						return response.json().then(err => { throw err; });
				},

	        error => console.log('An error occurred.', error)
	      )
	      .then(json => {
	      	console.log(json)
		      	if (json && json.status !== 500) {
							message(json.message, 'success', 0)
							dispatch(requestUpdateUserSucceded(json.user))	
		      	}else{
		      		message(json.message, 'error')
							dispatch(requestUpdateUserFailed())
		      	}
		      }
	      )
	      .catch((errors) => {
					console.log(errors);
				});		  
		}else{
			message('Introduzca el telefono', 'error', 0);
		}
	}
}


export function saveUser(user){
	
	let userToSend = {}

	if(user.isTeacher){
		userToSend = {
			email: user.email,
			password: user.password,
			confirm_password: user.confirm_password,
			name: user.user_profile.name,
			last_name: user.user_profile.lastname || "",
			phone: user.user_profile.phone,
			sex: user.user_profile.sex,
			role_id: user.user_profile.role,
			description: user.user_profile.description
		}
	}else{
		userToSend = {
			email: user.email,
			password: user.password,
			confirm_password: user.confirm_password,
			name: user.user_profile.name,
			last_name: user.user_profile.lastname || "",
			phone: user.user_profile.phone,
			sex: user.user_profile.sex,
			role_id: user.user_profile.role,
		}
	}

	console.log(userToSend)

	let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
	
	return function (dispatch, getState) {
		if(userToSend.email !== null && String(userToSend.email) !== ""){
			if(reg.test(userToSend.email) !== false){
				if(userToSend.password != null && String(userToSend.password) !== ""){
					if(userToSend.confirm_password != null && String(userToSend.confirm_password) !== ""){
						if(userToSend.password === userToSend.confirm_password){
							if(userToSend.name != null && String(userToSend.name) !== ""){
								if(userToSend.phone != null && String(userToSend.phone) !== ""){
									if(userToSend.sex !== null && String(userToSend.sex) !== "" && String(userToSend.sex) !== "-1"){
										if(userToSend.role_id !== null && String(userToSend.role_id) !== "" && String(userToSend.role_id) !== "-1"){
											if(user.isTeacher && (userToSend.description === null || String(userToSend.description) === "")){
												message('Ingrese la biografía del profesor', 'error')
											}else{
												let user = getState().user.userData
												dispatch(requestUsers())
										   
										    return fetch(process.env.REACT_APP_NODE_URL+"/users/",{
										        method: "POST",
										        mode: "cors",
										        credentials: "with-credentials",
												    headers: {
												        "Content-Type": "application/json; charset=utf-8",
												        "token": user.token
												    },
										        body: JSON.stringify(userToSend)
										    })
									      .then(
									        response => {
									    		if (response.ok){
														return response.json()
													}	
													if (response.status === 422)
														return response.json().then(err => { throw err; });
												},

									        error => console.log('An error occurred.', error)
									      )
									      .then(json => {
										      	console.log(json)
										      	if (json && json.status !== 500) {
															message(json.message, 'success', 0)
															dispatch(requestSaveUserSucceded(json.user))	
										      	}else{
										      		message(json.message, 'error')
															dispatch(requestUpdateUserFailed())
										      	}
										      }
									      )
									      .catch((errors) => {
													console.log(errors);
												});		  
											}
										}else{
											message('Seleccione un rol', 'error', 0);
										}

									}else{
										message('Ingrese el genero del usuario', 'error')
									}
								}else{
									message('Ingrese el teléfono', 'erorr')
								}
							}else{
								message('Ingrese el nombre.', 'error')
							}
						}else{
							message('La contraseña y la de confirmación deben coincidir', 'error', 0);
						}
					}else{
						message('Ingrese la contraseña de confirmación', 'error', 0);
					}
				}else{
					message('Ingrese la contraseña', 'error', 0);
				}
			}else{
				message('Ingrese un email válido', 'error', 0);
			}
		}else{
			message('Ingrese un email', 'error', 0);
		}
	}
}

export function deleteUser(user_params){
	
	return function (dispatch, getState) {
		let user = getState().user.userData
		dispatch(requestUsers())
	   
	    return fetch(process.env.REACT_APP_NODE_URL+"/users/"+user_params.id,{
	        method: "DELETE",
	        mode: "cors",
	        credentials: "with-credentials",
			    headers: {
			        "Content-Type": "application/json; charset=utf-8",
			        "token": user.token
			    }
	    })
      .then(
        response => {
    		if (response.ok){
					return response.json()
				}	
				if (response.status === 422)
					return response.json().then(err => { throw err; });
			},

        error => console.log('An error occurred.', error)
      )
      .then(json => {
      	if (json && json.status !== 500) {
					dispatch(dispatch(requestDeleteUserSucceded(user_params.id)))	
      		message(json.message, 'success',0)
      	}else{
      		message(json.message, 'error',0)
					dispatch(requestDeleteUserFailed())
      	}
      }
      )
      .catch((errors) => {
				console.log(errors);
			});		  
	}
}

export function reactivateUser(id){
	
	return function (dispatch, getState) {
		let user = getState().user.userData
		dispatch(requestUsers())
	   
	    return fetch(process.env.REACT_APP_NODE_URL+"/users/"+id+"/reactivate",{
	        method: "POST",
	        mode: "cors",
	        credentials: "with-credentials",
			    headers: {
			        "Content-Type": "application/json; charset=utf-8",
			        "token": user.token
			    }
	    })
      .then(
        response => {
    		if (response.ok){
					return response.json()
				}	
				if (response.status === 422)
					return response.json().then(err => { throw err; });
			},

        error => console.log('An error occurred.', error)
      )
      .then(json => {
      	if (json && json.status !== 500) {
					dispatch(dispatch(requestReactivateUserSucceded(id)))	
      		message(json.message, 'success',0)
      	}else{
      		message(json.message, 'error',0)
					dispatch(requestReactivateUserFailed())
      	}
      }
      )
      .catch((errors) => {
				console.log(errors);
			});		  
	}
}

export function uploadUserImage(user, event){

	return function(dispatch, getState){

		let user_logged = getState().user.userData
		let allowed_extensions = ['jpg', 'jpeg', 'png', 'gif'];
		let file = event.target.files[0];
		let short_name = file.name.split('.')
    let extension = short_name[short_name.length -1]

		if(file){
			if(allowed_extensions.indexOf(extension) >= 0){
				const dataWithFile = new FormData()
				dataWithFile.append('image', file) 
				let user = getState().user.userData

				dispatch(requestUsers());

				return fetch(process.env.REACT_APP_NODE_URL+"/users/"+user.id+"/updateProfileImage",{
		        method: "POST",
		        mode: "cors",
		        credentials: "with-credentials",
				    headers: {
				        "Content-Type": "application/json; charset=utf-8",
				        "token": user.token
				    },
		        body: dataWithFile
		    })
	      .then(
	        response => {
	    		if (response.ok){
						return response.json()
					}	
					if (response.status === 422)
						return response.json().then(err => { throw err; });
					},

	        error => console.log('An error occurred.', error)
	      )
	      .then(json => {
	      	console.log(json)
		      	if (json && json.status !== 500) {
							dispatch(requestUploadUserImageSucceded(user, json.image))
							if(parseInt(user.id, 10) === parseInt(user_logged.id, 10)){
								dispatch(requestUploadImageSucceded(json.image))
							}
							message(json.message, 'success', 0)
		      	}else{
							dispatch(requestUploadUserImageFailed())
		      		message(json.message, 'error')
		      	}
		      }
	      )
	      .catch((errors) => {
					console.log(errors);
				});		  
			}else{
				message('Formato de archivo no válido, las extensiones permitidas son ' + allowed_extensions.join(', '), 'error', 0);
			}
		}else{
			message('No se ha seleccionado ninguna imágen', 'error', 0);
		}
	}

}

export function editUser(id){

	console.log(id)

	return function(dispatch, getState){
		
		let user = getState().user.userData;

		dispatch(requestUsers());

		return fetch(`${process.env.REACT_APP_NODE_URL}/users/${id}`, {
				method: "GET",
		    mode: "cors",
		    credentials: "with-credentials",
		    headers: {
		        "Content-Type": "application/json; charset=utf-8",
		        "token": user.token
		    }
		})
		.then(
			response => {
    		if (response.ok){
					return response.json()
				}	
				if (response.status === 422)
					return response.json().then(err => { throw err; });
			},
			error => console.log('An error occurred.', error)
		)
		.then( json => {
				if (json && json.status !== 500) {
					dispatch(editUserDetails(json.user));
      	}else{
					dispatch(requestGetUserFailed())
      		message(json.message, 'error')
      	}
			}
		)
		.catch((errors) => {
			console.log(errors);
		});		 
	}
}