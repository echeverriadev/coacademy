import React from 'react'
import HeadTable from './Header';
import RoleRow from './RoleRow';
import RoleEditable from "./RoleEditable";
import RoleNew from "./RoleNew";
import ModalDelete from '../utils/DeleteModal'

class RoleList extends React.Component {

    render(){

      const {
        roles,
        newRole,
        isAddingNew,
        onNewRole,
        onCancelNewRole,
        onSaveRole,
        onCancelEditRole,
        onUpdateRole,
        onEditRole,
        onCancelDeleteRole,
        onDeleteRole,
        onSelectRoleToDelete,
        roleToDelete,
        onReactivateRole,
        onHandleNewRoleInputChange,
        onHandleEditRoleInputChange
      } = this.props;

        return (
          <div className="card mb-0">
            <div className="card-header">
              <h3 className="card-title">Lista de roles de usuario</h3>
            </div>
            <div className="card-body">
              <table
                id="examplee"
                className="table table-striped table-bordered"
              >
                <HeadTable />
                <tbody>
                  {roles && roles.length > 0 ? (
                    roles.map(role =>
                      role.isEditing ? (
                        <RoleEditable
                          key={role.id}
                          role={role}
                          onCancelEditRole={onCancelEditRole}
                          onUpdateRole={onUpdateRole}
                          onHandleEditRoleInputChange={
                            onHandleEditRoleInputChange
                          }
                        />
                      ) : (
                        <RoleRow
                          key={role.id}
                          role={role}
                          onEditRole={onEditRole}
                          onDeleteRole={onDeleteRole}
                          onSelectRoleToDelete={onSelectRoleToDelete}
                          onReactivateRole={onReactivateRole}
                        />
                      )
                    )
                  ) : (
                    <td colSpan="4">No existen roles registrados</td>
                  )}
                  {!isAddingNew ? (
                    <tr>
                      <td colSpan="4">
                        <button
                          className="btn btn-info"
                          onClick={() => onNewRole()}
                        >
                          Agregar nuevo rol
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <RoleNew
                      role={newRole}
                      onCancelNewRole={onCancelNewRole}
                      onSaveRole={onSaveRole}
                      onHandleNewRoleInputChange={onHandleNewRoleInputChange}
                    />
                  )}
                </tbody>
              </table>
              <ModalDelete
                entity={roleToDelete}
                onCancelDeleteEntity={onCancelDeleteRole}
                onDeleteEntity={onDeleteRole}
              />
            </div>
          </div>
        );
    }

}

export default RoleList;