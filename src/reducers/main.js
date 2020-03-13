import * as mainActions from '../actions/main'

const initialState = {
  isFetching: false,
  userLogged: false,
  countries: [],
  regions: [],
  cities: [],
  userData: {
    currentUrl: '/',
    email: '',
    password: '',
    new_password: '',
    confirm_password: '',
    user_profile: {
      name: "",
      phone: "",
      sex: "",
      lastname: "",
      adress: "",
      description: "",
      country: "",
      region: "",
      city: ""
    },
    myCourses: []
  },
  kindOfMenu: 'INDEX'
}

const mainReducer = (state = initialState, action) => {

  switch(action.type) {

    case mainActions.REQUEST_MAIN:
    return Object.assign({}, state, {
      isFetching: true
    });

    case mainActions.HANDLE_LOGIN_INPUT_CHANGE:
    return Object.assign({}, state, {
      userData: Object.assign({}, state.userData,{
        [action.event.target.name]: action.event.target.value
      })
    });

    case mainActions.LOGOUT_USER:
    return Object.assign({}, state, {
      userData: {
        email: "",
        password: null
      },
      userLogged: false,
      isFetching: false
    });

    case mainActions.REQUEST_LOGIN_SUCCEDED:
    return Object.assign({}, state, {
      userData: Object.assign({}, action.user,{
        password: '',
        new_password: '',
        new_confirm_password: '',
        user_profile: Object.assign({}, action.user.user_profile, {
          original: action.user.user_profile
        }),
        token: action.token
      }),
      userLogged: true,
      isFetching: false
    });

    case mainActions.REQUEST_LOGIN_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    });

    case mainActions.HANDLE_REGISTER_INPUT_CHANGE:
    if(action.event.target.name !== "email" && action.event.target.name !== "password" && action.event.target.name !== "confirm_password"){
      return Object.assign({}, state, {
        userData: Object.assign({}, state.userData,{
          user_profile: Object.assign({}, state.userData.user_profile ,{
            [action.event.target.name]: action.event.target.value
          })
        })
      });
    }else{
      return Object.assign({}, state, {
        userData: Object.assign({}, state.userData,{
          [action.event.target.name]: action.event.target.value
        })
      });
    }
    
    case mainActions.REQUEST_REGISTER_SUCCEDED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case mainActions.REQUEST_REGISTER_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case mainActions.CHANGE_MENU: 
    return Object.assign({}, state, {
      kindOfMenu: action.kindOfMenu
    })

    case mainActions.CANCEL_EDIT_PROFILE:
    return Object.assign({}, state, {
      userData: Object.assign({}, state.userData,{
        user_profile: Object.assign({}, state.userData.user_profile.original, {
          original: state.userData.user_profile.original
        }) 
      })
    })    

    case mainActions.HANDLE_EDIT_PROFILE_CHANGE:
    return Object.assign({}, state, {
      userData: Object.assign({}, state.userData,{
        user_profile: Object.assign({}, state.userData.user_profile, {
          [action.event.target.name]: action.event.target.value
        })
      })
    })

    case mainActions.REQUEST_UPDATE_PROFILE_SUCCEDED:
    return Object.assign({}, state, {
      isFetching: false,
      userData: Object.assign({}, state.userData, {
        user_profile: Object.assign({}, action.user.user_profile, {
          original: action.user.user_profile
        })
      })
    })

    case mainActions.REQUEST_UPDATE_PROFILE_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case mainActions.HANDLE_CHANGE_PASSWORD_CHANGE:
    return Object.assign({}, state, {
      userData: Object.assign({}, state.userData, {
        [action.event.target.name]: action.event.target.value
      })
    })

    case mainActions.CANCEL_CHANGE_PASSWORD: 
    return Object.assign({}, state, {
      userData: Object.assign({}, state.userData, {
        password: '',
        new_password: '',
        new_confirm_password: '',
      })
    })
    
    case mainActions.REQUEST_CHANGE_PASSWORD_SUCCEDED:
    return Object.assign({}, state, {
      isFetching: false,
      userData: Object.assign({}, state.userData,{
        password: '',
        new_password: '',
        new_confirm_password: ''
      })
    })

    case mainActions.REQUEST_CHANGE_PASSWORD_FAILED:
    return Object.assign({}, state, {
      isFetching: false
    })

    case mainActions.HANDLE_RECOVER_PASSWORD_EMAIL_CHANGE:
    return Object.assign({}, state, {
      userData: Object.assign({}, state.userData, {
        email: action.event.target.value
      })
    })

/*
    case mainActions.CHANGE_URL:
    return Object.assign({}, state,{
      userData: Object.assign({}, state.userData, {
        currentUrl: action.url
      })
    })

    case mainActions.REQUEST_UPDATE_PROFILE:
    return Object.assign({}, state, {
      isFetching: true
    })

    case mainActions.REQUEST_CHANGE_PASSWORD:
    return Object.assign({}, state, {
      isFetching: true
    })

*/

    case mainActions.REQUEST_UPLOAD_PROFILE_IMAGE_SUCCEDED:
    return Object.assign({}, state, {
      userData: Object.assign({}, state.userData, {
        user_profile: Object.assign({}, state.userData.user_profile,{
          picture_url: action.image,
          original: Object.assign({}, state.userData.user_profile.original, {
            image: action.image
          })
        })
      })
    })

    case mainActions.REQUEST_MY_COURSES_SUCCEDED:
      return Object.assign({}, state, {
        isFetching: false,
        userData: Object.assign({}, state.userData, {
          myCourses: action.courses
        })
      })

    case mainActions.REQUEST_MY_COURSES_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      })

    case mainActions.REQUEST_REGION_COUNTRY_SUCCEDED:
      return Object.assign({}, state,{
        regions: action.regions
      }) 
    
    case mainActions.REQUEST_COUNTRIES_SUCCEDED:
      return Object.assign({}, state,{
        countries: action.countries
      }) 
    
    case mainActions.REQUEST_CITIES_REGION_SUCCEDED:
      return Object.assign({}, state, {
        cities: action.cities
      })

    case mainActions.REQUEST_CLEAR_CITIES_SUCCEDED:
      return Object.assign({}, state, {
        cities: []
      })

    default:
      return state;
  }
}

export default mainReducer