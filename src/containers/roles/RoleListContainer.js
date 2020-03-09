import { connect } from "react-redux";
import RoleList from "../../components/admin/roles/RoleList";
import * as roleActions from "../../actions/roles";

const mapStateRoleListToProps = state => {
  return {
    roles: state.roles.roles,
    newRole: state.roles.role,
    roleToDelete: state.roles.roleToDelete,
    isAddingNew: state.roles.isAddingNew
  };
};

const mapDispatchRoleListToProps = (dispatch) => {
    
    dispatch(roleActions.fetchRoles());
    return {
        onNewRole: () => {
          dispatch(roleActions.newRole())
        },
        onCancelNewRole: () => {
          dispatch(roleActions.cancelNewRole());
        },
        onSaveRole: (role) => {
          dispatch(roleActions.fetchSaveRole(role))
        },
        onHandleNewRoleInputChange: (e) => {
          dispatch(roleActions.handleNewInputChange(e));
        },
        onCancelEditRole: (role) => {
          dispatch(roleActions.cancelEditRole(role));
        },
        onUpdateRole: (role) => {
          dispatch(roleActions.fetchUpdateRole(role))
        },
        onEditRole: (role) => {
          dispatch(roleActions.editRole(role));
        },
        onHandleEditRoleInputChange: (role, e) => {
          dispatch(roleActions.handleEditInputChange(role, e));
        },
        onDeleteRole: (role) => {
          dispatch(roleActions.fetchDeleteRole(role))
        },
        onSelectRoleToDelete: (role) => {
          dispatch(roleActions.deleteRole(role));
        },
        onCancelDeleteRole: () => {
          dispatch(roleActions.cancelDeleteRole());
        },
        onReactivateRole: (role) => {
          dispatch(roleActions.fetchReactivateRole(role))
        }
    };
};

const RoleListContainer = connect(
  mapStateRoleListToProps,
  mapDispatchRoleListToProps
)(RoleList);

export default RoleListContainer;
