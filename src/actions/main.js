import fetch from 'cross-fetch'
import message from '../components/utils/message'
import history from '../history'
import csc from 'country-state-city'

declare var $:any;

export const LOGOUT_USER = 'LOGOUT_USER'
export const HANDLE_LOGIN_INPUT_CHANGE = 'HANDLE_LOGIN_INPUT_CHANGE'
export const HANDLE_REGISTER_INPUT_CHANGE = 'HANDLE_REGISTER_INPUT_CHANGE'
export const CHANGE_MENU = 'CHANGE_MENU'
export const HANDLE_EDIT_PROFILE_CHANGE = 'HANDLE_EDIT_PROFILE_CHANGE'
export const CANCEL_EDIT_PROFILE = 'CANCEL_EDIT_PROFILE'
export const HANDLE_CHANGE_PASSWORD_CHANGE = 'HANDLE_CHANGE_PASSWORD_CHANGE'
export const CANCEL_CHANGE_PASSWORD = 'CANCEL_CHANGE_PASSWORD'
export const HANDLE_RECOVER_PASSWORD_EMAIL_CHANGE = 'HANDLE_RECOVER_PASSWORD_EMAIL_CHANGE'

export const REQUEST_MAIN = 'REQUEST_MAIN'
export const REQUEST_LOGIN_SUCCEDED = 'REQUEST_LOGIN_SUCCEDED'
export const REQUEST_LOGIN_FAILED = 'REQUEST_LOGIN_FAILED'
export const REQUEST_REGISTER_SUCCEDED = 'REQUEST_REGISTER_SUCCEDED'
export const REQUEST_REGISTER_FAILED = 'REQUEST_REGISTER_FAILED'
export const REQUEST_UPLOAD_PROFILE_IMAGE_SUCCEDED = 'REQUEST_UPLOAD_PROFILE_IMAGE_SUCCEDED'
export const REQUEST_UPLOAD_PROFILE_IMAGE_FAILED = 'REQUEST_UPLOAD_PROFILE_IMAGE_FAILED'
export const REQUEST_UPDATE_PROFILE_SUCCEDED = 'REQUEST_UPDATE_PROFILE_SUCCEDED'
export const REQUEST_UPDATE_PROFILE_FAILED = 'REQUEST_UPDATE_PROFILE_FAILED'
export const REQUEST_CHANGE_PASSWORD_SUCCEDED = 'REQUEST_CHANGE_PASSWORD_SUCCEDED'
export const REQUEST_CHANGE_PASSWORD_FAILED = 'REQUEST_CHANGE_PASSWORD_FAILED'
export const REQUEST_RECOVER_PASSWORD_SUCCEDED = 'REQUEST_RECOVER_PASSWORD_SUCCEDED'
export const REQUEST_RECOVER_PASSWORD_FAILED = 'REQUEST_RECOVER_PASSWORD_FAILED'

export const REQUEST_MY_COURSES_SUCCEDED = 'REQUEST_MY_COURSES_SUCCEDED'
export const REQUEST_MY_COURSES_FAILED = 'REQUEST_MY_COURSES_FAILED'

export const REQUEST_COUNTRIES_SUCCEDED = 'REQUEST_COUNTRIES_SUCCEDED'
export const REQUEST_REGION_COUNTRY_SUCCEDED = 'REQUEST_REGION_COUNTRY_SUCCEDED'
export const REQUEST_CITIES_REGION_SUCCEDED = 'REQUEST_CITIES_REGION_SUCCEDED'
export const REQUEST_CLEAR_CITIES_SUCCEDED = 'REQUEST_CLEAR_CITIES_SUCCEDED'

function requestMain(){
	return {
		type: REQUEST_MAIN
	}
}

function requestCountriesSucceded(response){
  return {
    type: REQUEST_COUNTRIES_SUCCEDED,
    countries: response
  }
}

function requestRegionCountriesSucceded(response){
  return {
    type: REQUEST_REGION_COUNTRY_SUCCEDED,
    regions: response
  }
}

function requestCitiesRegionSucceded(response){
  return {
    type: REQUEST_CITIES_REGION_SUCCEDED,
    cities: response
  }
}

function requestEraseCities(){

  return {
    type: REQUEST_CLEAR_CITIES_SUCCEDED
  }

}

function requestRecoverPasswordSucceded(){
  return {
    type: REQUEST_RECOVER_PASSWORD_SUCCEDED
  }
}

function requestRecoverPasswordFailed(){
  return {
    type: REQUEST_RECOVER_PASSWORD_FAILED
  }
}

function requestChangePasswordSucceded(){
  return {
    type: REQUEST_CHANGE_PASSWORD_SUCCEDED
  }
}

function requestChangePasswordFailed(){
  return {
    type: REQUEST_CHANGE_PASSWORD_FAILED
  }
}

function requestUpdateProfileSucceded(user){
  return {
    type: REQUEST_UPDATE_PROFILE_SUCCEDED,
    user
  }
}

function requestUpdateProfileFailed(){
  return {
    type: REQUEST_UPDATE_PROFILE_FAILED
  }
}

function requestLoginSucceded(user, token){
	return {
		type: REQUEST_LOGIN_SUCCEDED,
		user,
		token
	}
}

function requestLoginFailed(){
	return {
		type: REQUEST_LOGIN_FAILED	
	}
}

function requestRegisterSucceded(user){
  return {
    type: REQUEST_REGISTER_SUCCEDED,
    user
  }
}

function requestRegisterFailed(){
  return {
    type: REQUEST_REGISTER_FAILED
  }
}

function requestMyCoursesSucceded(courses){
 return {
  type: REQUEST_MY_COURSES_SUCCEDED,
  courses
 } 
}

function requestMyCoursesFailed(){
 return {
  type: REQUEST_MY_COURSES_FAILED,
 } 
}

export function cancelChangePassword(){
  return {
    type: CANCEL_CHANGE_PASSWORD
  }
}

export function handleRecoverPasswordEmailChange(e){

  return {
    type: HANDLE_RECOVER_PASSWORD_EMAIL_CHANGE,
    event: e
  }

}

export function changePasswordInputChange(e){
  return {
    type: HANDLE_CHANGE_PASSWORD_CHANGE,
    event: e
  }
}

export function editProfileInputChange(e){
  return {
    type: HANDLE_EDIT_PROFILE_CHANGE,
    event: e
  }
}

export function cancelEditProfile(){
  return {
    type: CANCEL_EDIT_PROFILE
  }
}

export function changeMenu(kindOfMenu = 'INDEX'){
  return {
    type: CHANGE_MENU,
    kindOfMenu
  }
}

export function requestUploadImageSucceded(image){
  return {
    type: REQUEST_UPLOAD_PROFILE_IMAGE_SUCCEDED,
    image
  }
}

function requestUploadImageFailed(){
  return {
    type: REQUEST_UPLOAD_PROFILE_IMAGE_FAILED
  }
}


export function loginInputChange(e){

	return {
		type: HANDLE_LOGIN_INPUT_CHANGE,
		event: e
	}
}

export function registerInputChange(e){
  return {
    type: HANDLE_REGISTER_INPUT_CHANGE,
    event: e
  }
}

function logoutUser(){
	return {
		type: LOGOUT_USER
	}
}

export function logout(){
  return (dispatch) => {
    dispatch(logoutUser())
    dispatch(changeMenu('INDEX'))
  }
}

export function fetchLogin(user) {
  let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return function(dispatch) {
    if (user.email !== null && String(user.email) !== "") {
      if (reg.test(user.email) !== false) {
        if (user.password != null && String(user.password) !== "") {
          dispatch(requestMain());

          return fetch(process.env.REACT_APP_NODE_URL + "/login", {
            method: "POST",
            mode: "cors",
            credentials: "with-credentials",
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user)
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
                setTimeout(function() {
                  dispatch(requestLoginSucceded(json.user, json.token));
                  dispatch(changeMenu('INDEX'))
                  dispatch(getCoursesByUser())
                }, 500);
              } else {
                message(json.message, 'error');
                dispatch(requestLoginFailed());
              }
            })
            .catch(errors => {
              alert(errors);
              console.log(errors);
            });
        } else {
          message("Ingrese contraseña", 'error', 200);
        }
      } else {
        message("Ingrese un email válido", 'error', 200);
      }
    } else {
      message("Ingrese un email", 'error', 200);
    }
  };
}

function validateOrigin(user){
  console.log(user.user_profile)
  var result = true;
  if(!user.user_profile || !user.user_profile.country || String(user.user_profile.country) === "" || String(user.user_profile.country) === "-1")
    result = false;
  if(!user.user_profile || !user.user_profile.region || String(user.user_profile.region) === "" || String(user.user_profile.region) === "-1")
    result = false;
  if(!user.user_profile || !user.user_profile.city || String(user.user_profile.city) === "" || String(user.user_profile.city) === "-1")
    result = false;

  return result;
}

function validateUserWorks(user){
  var result = true;
  if(!user.user_profile || !user.user_profile.charge || String(user.user_profile.charge) === "")
    result = false;
  if(!user.user_profile || !user.user_profile.area || String(user.user_profile.area) === "")
    result = false;
  if(!user.user_profile || !user.user_profile.company || String(user.user_profile.company) === "")
    result = false;

  return result;
}


export function fetchRegister(user) {
  let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  console.log(validateOrigin(user))

  return function(dispatch) {
    if (user.email !== null && String(user.email) !== "") {
      if (reg.test(user.email) !== false) {
        if (user.password != null && String(user.password) !== "") {
          if (user.confirm_password != null && String(user.confirm_password) !== "") {
            if(String(user.password) === String(user.confirm_password)){
              if(user.user_profile && user.user_profile.name !== null && String(user.user_profile.name) !== ""){
                if(user.user_profile && user.user_profile.phone !== null && String(user.user_profile.phone) !== ""){
                  if(user.user_profile && user.user_profile.sex !== undefined && user.user_profile.sex !== null && String(user.user_profile.sex) !== "" && String(user.user_profile.sex) !== "-1"){
                    if(validateOrigin(user)){
                      if(validateUserWorks(user)){
                        const country = csc.getCountryById(user.user_profile.country);
                        const region = csc.getStateById(user.user_profile.region);
                        const city = csc.getCityById(user.user_profile.city);
                        
                        user.user_profile.description = `Trabajó en ${user.user_profile.company} en el área ${user.user_profile.area} como ${user.user_profile.charge}` 
                        user.user_profile.adress = `${city.name}, ${region.name} - ${country.name}`;
  
                        dispatch(requestMain());
    
                        return fetch(process.env.REACT_APP_NODE_URL + "/register", {
                          method: "POST",
                          mode: "cors",
                          credentials: "with-credentials",
                          headers: {
                            "Content-Type": "application/json; charset=utf-8"
                          },
                          body: JSON.stringify(user)
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
                            dispatch(requestRegisterSucceded());
                            message("Se ha registrado el usuario con éxito", 'success');
                            $('#home-tab').click();
                          } else {
                            dispatch(requestRegisterFailed());
                            message(json.message, 'error', 200);
                          }
                        })
                        .catch(errors => {
                          console.log(errors);
                        });
                      }else{
                        message('Ingresa tu información laboral.')
                      }

                    }else{
                      message('Ingrese tus datos de ubicación', 'error', 0);
                    }
                  }else{
                    message('Ingrese el genero', 'error', 0)
                  }
                }else{
                  message('Ingrese un número de teléfono', 'error', 0)
                }
              }else{
                message('Ingrese el nombre', 'error', 0)
              }
            }else{
              message('La contraseña debe ser igual a la de confirmación ', 'error', 200)
            }
          }else{
            message('Ingrese la contraseña de confirmación', 'error', 200)
          }
        } else {
          message("Ingrese contraseña", 'error', 200);
        }
      } else {
        message("Ingrese un e-mail válido", 'error', 200);
      }
    } else {
      message("Ingrese un e-mail", 'error', 200);
    }
  };
}

export function getCoursesByUser(){
  
  return function(dispatch, getState) {
    let user = getState().user.userData
    dispatch(requestMain())
     
      return fetch(process.env.REACT_APP_NODE_URL+"/courses/byUser/" + user.id ,{
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
          dispatch(requestMyCoursesSucceded(json.courses)) 
        }else{
          message(json.message, 'error')
          dispatch(requestMyCoursesFailed())
        }
      }
      )
      .catch((errors) => {
        console.log(errors);
      });     
  }
}

export function uploadProfileImage(user, event) {
  console.log(user, event)
  return function(dispatch, getState){
    let user = getState().user.userData
    let allowed_extensions = ['jpg', 'jpeg', 'png', 'gif'];
    let file = event.target.files[0];
    let short_name = file.name.split('.')
    let extension = short_name[short_name.length -1]

    if(file){
      if(allowed_extensions.indexOf(extension) >= 0){
        const dataWithFile = new FormData()
        dataWithFile.append('image', file) 
        dispatch(requestMain())
        return fetch(process.env.REACT_APP_NODE_URL+"/users/"+user.id,{
            method: "POST",
            mode: "cors",
            credentials: "with-credentials",
            headers: { 
              "token": user.token
            },
            body: dataWithFile,
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
              dispatch(requestUploadImageSucceded(json.image))
              message(json.message, 'success', 0)
            }else{
              dispatch(requestUploadImageFailed())
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

export function updateProfile(user){
  
  let userToSend = {
    name: user.user_profile.name || "",
    last_name: user.user_profile.lastname || "",
    twitter: user.user_profile.twitter || "",
    instagram: user.user_profile.instagram || "",
    facebook: user.user_profile.facebook || "",
    linkedin: user.user_profile.linkedin || "",
    phone: user.user_profile.phone || "",
    adress: user.user_profile.adress || "",
    description: user.user_profile.description || ""
  }

  return function(dispatch, getState) {
    let user = getState().user.userData

    if(userToSend.phone !== "" && userToSend.phone !== null && userToSend.phone !== undefined){
      dispatch(requestMain())
       
        return fetch(process.env.REACT_APP_NODE_URL+"/users/"+user.id,{
            method: "PUT",
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
            if (json && json.status !== 500) {
              message(json.message, 'success', 0)
              dispatch(requestUpdateProfileSucceded(json.user)) 
            }else{
              message(json.message, 'error')
              dispatch(requestUpdateProfileFailed())
            }
          }
        )
        .catch((errors) => {
          message(errors, 'error', 0)
          console.log(errors);
        });     
    }else{
      message('Introduzca el telefono', 'error', 0);
    }
  }
}

export function changePassword(user) {

  const userToSend = {
    email: user.email,
    password: user.password,
    new_password: user.new_password,
    confirm_password: user.new_confirm_password
  }

  return function (dispatch, getState) {
    let user_state = getState().user.userData

    if(userToSend.password !== "" && userToSend.password !== null && userToSend.password !== undefined){
      if(userToSend.new_password !== "" && userToSend.new_password !== null && userToSend.new_password !== undefined){
        if(userToSend.confirm_password !== "" && userToSend.confirm_password !== null && userToSend.confirm_password !== undefined){
          if(userToSend.new_password === userToSend.confirm_password){

            dispatch(requestMain())
       
            return fetch(process.env.REACT_APP_NODE_URL+"/changePassword",{
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
                  dispatch(requestChangePasswordSucceded()) 
                }else{
                  message(json.message, 'error')
                  dispatch(requestChangePasswordFailed())
                }
              }
            )
            .catch((errors) => {
              console.log(errors);
            });     

          }else{
            message('La nueva contraseña y la de confirmación deben ser iguales', 'error', 0)
          }
        }else{
          message('Ingrese la confirmación de la nueva contraseña', 'error', 0)
        }
      }else{
        message('Ingrese la nueva contraseña', 'error', 0)
      }
    }else{
      message('Introduzca la contraseña', 'error', 0);
    }
  }
}

export function recoverPassword(email){

  let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  
  return function(dispatch, getState){

    if(email && email !== null && email !== undefined && String(email) !== ""){
      if(reg.test(email) !== false){

        let dataToSend = {
          email: email
        }
        dispatch(requestMain())
        return fetch(process.env.REACT_APP_NODE_URL+"/recoverPassword",{
            method: "POST",
            mode: "cors",
            credentials: "with-credentials",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(dataToSend)
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
              if(json.status === 200){
                message(json.message, 'success', 0)
                dispatch(requestRecoverPasswordSucceded()) 
              }else{
                message(json.message, 'error')
                dispatch(requestRegisterFailed())  
              }
            }else{
              message(json.message, 'error')
              dispatch(requestRegisterFailed())
            }
          }
        )
        .catch((errors) => {
          console.log(errors);
          dispatch(requestRegisterFailed())
        });
      }else{
        message('Ingrese un email válido.', 'error', 0)
      }
    }
    else{
      message('Ingrese un email', 'error', 0)
    }
  }

}

export function _getCountriesApi(){
  return function(dispatch){
    dispatch(requestCountriesSucceded(csc.getAllCountries()));
  }
}


export function _getRegionCountryApi(country_id){
  console.log(csc.getStatesOfCountry(country_id), country_id)
  return function(dispatch){
    dispatch(requestRegionCountriesSucceded(csc.getStatesOfCountry(country_id)))
  }
}

export function _getCitiesRegionApi(region_id){
  console.log(csc.getCitiesOfState(region_id), region_id)
  return function(dispatch){
    dispatch(requestCitiesRegionSucceded(csc.getCitiesOfState(region_id)))
  }
}

export function _eraseCities(){

  return function(dispatch){
    dispatch(requestEraseCities());
  }

}