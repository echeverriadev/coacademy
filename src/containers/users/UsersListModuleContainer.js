import { connect } from 'react-redux'
import * as usersActions from '../../actions/users'
import * as rolesActions from '../../actions/roles'
import UsersListModule from '../../components/admin/users/UserListModule'

declare var $:any;

const mapStateUsersListModuleToProps = state => {
  return {
  	users: state.users.users,
    user: state.users.user,
    isFetching: state.users.isFetching,
    roles: state.roles.roles,
    view: state.users.view,
    userLogged: state.user.userData
  }
}

const mapDispatchUsersListModuleToProps = (dispatch) => {

	  dispatch(usersActions.getUsers());
    dispatch(rolesActions.fetchRoles());

    return {
      onSetUser: (user) => {
        dispatch(usersActions.setUser(user))
      },
      onCancelDeleteUser: (user) => {
        dispatch(usersActions.cancelDeleteUser(user))
      },
      onDeleteUser: (user) => {
       dispatch(usersActions.deleteUser(user))
      },
      onViewDetails: (user) => {
        dispatch(usersActions.viewUserDetails(user));
      }, 
      onEditUser: (user) => {
        dispatch(usersActions.editUserDetails(user));
      },
      onCancelEditUser: () => {
        dispatch(usersActions.cancelEditUser());
      },
      onGoBackToUsersList: () => {
        dispatch(usersActions.goBackToUsersList());
      },
      onUpdateUser: (user) => {
        dispatch(usersActions.updateUser(user));
      },
      onHandleEditInputChange: (event) => {
        dispatch(usersActions.handleEditInputChange(event));
      },
      onHandleNewInputChange: (event) => {
        dispatch(usersActions.handleNewInputChange(event))
      },
      onSaveUser: (user) => {
        dispatch(usersActions.saveUser(user))
      },
      onCancelSaveUser: () => {
        dispatch(usersActions.cancelSaveUser())
      },
      onNewUser: () => {
        dispatch(usersActions.newUser())
      },
      onReactivateUser: (id) => {
        dispatch(usersActions.reactivateUser(id));
      },
      onUploadImageChange: (user, event) => {
        dispatch(usersActions.uploadUserImage(user, event))
      }
    }
}


const UsersListModuleContainer = connect(
  mapStateUsersListModuleToProps,
  mapDispatchUsersListModuleToProps
)(UsersListModule)

export default UsersListModuleContainer