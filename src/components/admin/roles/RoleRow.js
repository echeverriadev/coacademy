import React, { Component } from 'react';

class RoleRow extends Component {
    render() {
      const {
        role,
        onEditRole,
        onReactivateRole,
        onSelectRoleToDelete
      } = this.props;

        return (
          <tr>
            <td>{role.name}</td>
            <td>{role.description}</td>
            <td>{role.statusAsString}</td>
            <td>
              <button
                className="btn btn-warning btn-sm text-white"
                data-toggle="tooltip"
                data-original-title="Edit"
                style={{ marginRight: 4 }}
                onClick={() => onEditRole(role)}
              >
                <i className="fa fa-pencil"></i>
              </button>
              {parseInt(role.status, 10) === 1 ? (
                <button
                  className="btn btn-danger btn-sm text-white"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-original-title="Delete"
                  onClick={() => onSelectRoleToDelete(role)}
                >
                  <i className="fa fa-trash-o"></i>
                </button>
              ) : (
                <button
                  className="btn btn-success btn-sm text-white"
                  data-original-title="Reactivar"
                  title="Reactivar"
                  onClick={() => onReactivateRole(role)}
                >
                  <i className="fa fa-eye"></i>
                </button>
              )}
            </td>
          </tr>
        );
    }
}

export default RoleRow;