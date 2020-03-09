import * as roleActions from "../actions/roles";

const initialState = {
  isFetching: false,
  roles: [],
  role: {},
  roleToDelete: {},
  isAddingNew: false
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case roleActions.REQUEST_ROLES:
      return Object.assign({}, state, {
        isFetching: true
      });

    case roleActions.REQUEST_ROLES_SUCCEDED:
      return Object.assign({}, state, {
        roles: action.roles,
        isFetching: false
      });

    case roleActions.REQUEST_ROLES_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case roleActions.NEW_ROLE:
      return Object.assign({}, state, {
        isAddingNew: true,
        role: {
          id: null,
          name: "",
          description: ""
        }
      });

    case roleActions.CANCEL_NEW_ROLE:
      return Object.assign({}, state, {
        isAddingNew: false,
        role: {}
      });

    case roleActions.HANDLE_NEW_ROLE_INPUT_CHANGE:
      return Object.assign({}, state, {
        role: Object.assign({}, state.role, {
          [action.event.target.name]: action.event.target.value
        })
      });

    case roleActions.HANDLE_EDIT_ROLE_INPUT_CHANGE:
      return Object.assign({}, state, {
        roles: state.roles.map(role => {
          if (parseInt(role.id, 10) === parseInt(action.role.id, 10)) {
            return Object.assign({}, role, {
              [action.event.target.name]: action.event.target.value
            });
          }
          return role;
        })
      });

    case roleActions.REQUEST_SAVE_ROLE_SUCCEDED:
      return Object.assign({}, state, {
        isAddingNew: false,
        isFetching: false,
        role: {},
        roles: [...state.roles, action.role]
      });

    case roleActions.REQUEST_SAVE_ROLE_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case roleActions.EDIT_ROLE:
      return Object.assign({}, state, {
        roles: state.roles.map(role => {
          if (parseInt(role.id, 10) === parseInt(action.role.id, 10)) {
            return Object.assign({}, role, {
              isEditing: true,
              original: role
            });
          }
          return role;
        })
      });

    case roleActions.CANCEL_EDIT_ROLE:
      return Object.assign({}, state, {
        roles: state.roles.map(role => {
          if (parseInt(role.id, 10) === parseInt(action.role.id, 10)) {
            return Object.assign({}, role.original, {
              isEditing: false,
              original: null
            });
          }
          return role;
        })
      });

    case roleActions.REQUEST_UPDATE_ROLE_SUCCEDED:
      return Object.assign({}, state, {
        roles: state.roles.map(role => {
          if (parseInt(role.id, 10) === parseInt(action.role.id, 10)) {
            return Object.assign({}, action.role, {
              isEditing: false,
              original: null
            });
          }
          return role;
        }),
        isFetching: false
      });

    case roleActions.REQUEST_UPDATE_ROLE_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case roleActions.DELETE_ROLE:
      return Object.assign({}, state, {
        roleToDelete: action.role
      });

    case roleActions.CANCEL_DELETE_ROLE:
      return Object.assign({}, state, {
        roleToDelete: {}
      });

    case roleActions.REQUEST_DELETE_ROLE_SUCCEDED:
      return Object.assign({}, state, {
        roleToDelete: {},
        roles: state.roles.map(role => {
          if (parseInt(role.id, 10) === parseInt(action.role.id, 10)) {
            return Object.assign({}, action.role, {
              status: 2,
              statusAsString: "Inactivo"
            });
          }
          return role;
        }),
        isFetching: false
      });

    case roleActions.REQUEST_DELETE_ROLE_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case roleActions.REQUEST_REACTIVATE_ROLE_SUCCEDED:
      return Object.assign({}, state, {
        roleToDelete: {},
        roles: state.roles.map(role => {
          if (parseInt(role.id, 10) === parseInt(action.role.id, 10)) {
            return Object.assign({}, action.role, {
              status: 1,
              statusAsString: "Activo"
            });
          }
          return role;
        }),
        isFetching: false
      });

    case roleActions.REQUEST_REACTIVATE_ROLE_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
};

export default rolesReducer;
