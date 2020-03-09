import * as usersActions from '../actions/users'

const initialState = {
  isFetching: false,
  users: [],
  providers: [],
  students: [],
  user: {
    isTeacher: false
  },
  view: 'list'
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case usersActions.REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case usersActions.REQUEST_GET_USER_SUCCEDED:
      return Object.assign({}, state, {
        user: action.user,
        isFetching: false,
        view: "userDetails"
      });

    case usersActions.REQUEST_GET_USER_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.REQUEST_GET_USERS_SUCCEDED:
      return Object.assign({}, state, {
        users: action.users,
        isFetching: false
      });

    case usersActions.REQUEST_GET_PROVIDERS_SUCCEDED:
      return Object.assign({}, state, {
        providers: action.users,
        isFetching: false
      });

    case usersActions.REQUEST_GET_PROVIDERS_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.REQUEST_GET_STUDENTS_SUCCEDED:
      return Object.assign({}, state, {
        students: action.users,
        isFetching: false
      });

    case usersActions.REQUEST_GET_STUDENTS_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.REQUEST_GET_USERS_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.SET_USER:
      return Object.assign({}, state, {
        user: action.user
      });

    case usersActions.CANCEL_DELETE_USER:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.VIEW_USER_DETAILS:
      return Object.assign({}, state, {
        user: action.user,
        view: "userDetails"
      });

    case usersActions.EDIT_USER_DETAILS:
      return Object.assign({}, state, {
        user: Object.assign({}, action.user, {
          original: action.user
        }),
        view: "updateUser",
        isFetching: false
      });

    case usersActions.CANCEL_EDIT_USER:
      return Object.assign({}, state, {
        user: Object.assign({}, state.user.original, {
          original: null
        }),
        view: "userDetails"
      });

    case usersActions.GO_BACK_TO_USERS_LIST:
      return Object.assign({}, state, {
        user: {},
        view: "list"
      });

    case usersActions.REQUEST_UPDATE_USER_SUCCEDED:
      return Object.assign({}, state, {
        isFetching: false,
        user: Object.assign({}, action.user, {
          original: action.user
        }),
        users: state.users.map(user => {
          if (parseInt(user.id, 10) === parseInt(action.user.id, 10)) {
            return Object.assign({}, action.user, {
              original: action.user
            });
          }
          return user;
        }),
        view: "userDetails"
      });

    case usersActions.REQUEST_UPDATE_USER_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.HANDLE_EDIT_INPUT_CHANGE:
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          user_profile: Object.assign({}, state.user.user_profile, {
            [action.event.target.name]: action.event.target.value
          })
        })
      });

    case usersActions.HANDLE_NEW_INPUT_CHANGE:
      if(action.event.target.name !== "email" && action.event.target.name !== "password" && action.event.target.name !== "confirm_password") {
        if(action.event.target.name === "role"){
          if(action.event.target.options[action.event.target.options.selectedIndex].text === "Profesor"){
            return Object.assign({}, state, {
              user: Object.assign({}, state.user, {
                isTeacher: true,
                user_profile: Object.assign({}, state.user.user_profile, {
                  [action.event.target.name]: action.event.target.value
                })
              })
            });
          }else{
            return Object.assign({}, state, {
              user: Object.assign({}, state.user, {
                isTeacher: false,
                user_profile: Object.assign({}, state.user.user_profile, {
                  [action.event.target.name]: action.event.target.value
                })
              })
            });  
          }
        }else{
          return Object.assign({}, state, {
            user: Object.assign({}, state.user, {
              user_profile: Object.assign({}, state.user.user_profile, {
                [action.event.target.name]: action.event.target.value
              })
            })
          });
        }
      } else {
        return Object.assign({}, state, {
          user: Object.assign({}, state.user, {
            [action.event.target.name]: action.event.target.value
          })
        });
      }

    case usersActions.CANCEL_NEW_USER:
      return Object.assign({}, state, {
        user: {},
        view: "list"
      });

    case usersActions.REQUEST_SAVE_USER_SUCCEDED:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
        users: [...state.users, action.user],
        view: "userDetails"
      });

    case usersActions.REQUEST_SAVE_USER_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.NEW_USER:
      return Object.assign({}, state, {
        user: {
          email: "",
          password: "",
          confirm_password: "",
          user_profile: {
            role: "",
            phone: "",
            description: "",
            sex: ""
          }
        },
        view: "newUser"
      });

    case usersActions.REQUEST_DELETE_USER_SUCCEDED:
      return Object.assign({}, state, {
        isFetching: false,
        user: Object.assign({}, state.user, {
          user_profile: Object.assign({}, state.user.user_profile, {
            status: "2",
            statusAsString: "Inactivo"
          })
        }),
        users: state.users.map(user => {
          if (parseInt(user.id, 10) === parseInt(action.id, 10)) {
            return Object.assign({}, user, {
              user_profile: Object.assign({}, user.user_profile, {
                status: "2",
                statusAsString: "Inactivo"
              })
            });
          }
          return user;
        }),
        view: "list"
      });

    case usersActions.REQUEST_DELETE_USER_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.REQUEST_REACTIVATE_USER_SUCCEDED:
      return Object.assign({}, state, {
        isFetching: false,
        user: Object.assign({}, state.user, {
          user_profile: Object.assign({}, state.user.user_profile, {
            status: "1",
            statusAsString: "Activo"
          })
        }),
        users: state.users.map(user => {
          if (parseInt(user.id, 10) === parseInt(action.id, 10)) {
            return Object.assign({}, user, {
              user_profile: Object.assign({}, user.user_profile, {
                status: "1",
                statusAsString: "Activo"
              })
            });
          }
          return user;
        }),
        view: "list"
      });

    case usersActions.REQUEST_REACTIVATE_USER_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case usersActions.REQUEST_UPLOAD_USER_IMAGE_SUCCEDED:
      return Object.assign({}, state, {
        isFetching: false,
        user: Object.assign({}, action.user, {
          original: Object.assign({}, action.user, {
            user_profile: Object.assign({}, action.user.user_profile, {
              image: action.image
            })
          }),
          user_profile: Object.assign({}, action.user.user_profile, {
            image: action.image
          })
        }),
        users: state.users.map(user => {
          if (parseInt(user.id, 10) === parseInt(action.user.id, 10)) {
            return Object.assign({}, user, {
              original: Object.assign({}, action.user, {
                user_profile: Object.assign({}, user.user_profile, {
                  image: action.image
                })
              }),
              user_profile: Object.assign({}, user.user_profile, {
                image: action.image
              })
            });
          }
          return user;
        })
      });

    case usersActions.REQUEST_UPLOAD_USER_IMAGE_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}

export default usersReducer