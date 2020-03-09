import React, { Component } from "react";

class RoleNew extends Component {
  render() {

    const { onCancelNewRole, onSaveRole, onHandleNewRoleInputChange, role } = this.props;

    return (
      <tr>
        <td>
          <input
            className="form-control"
            placeholder="nombre"
            defaultValue={role.name}
            type="text"
            name="name"
            onChange={onHandleNewRoleInputChange}
          />
        </td>
        <td>
          <input
            className="form-control"
            placeholder="description"
            defaultValue={role.description}
            type="text"
            name="description"
            onChange={onHandleNewRoleInputChange}
          />
        </td>
        <td>Activo</td>
        <td>
          <button
            className="btn btn-success btn-sm text-white"
            data-toggle="tooltip"
            title="Guardar"
            data-original-title="Guardar"
            style={{ marginRight: 4 }}
            onClick={() => onSaveRole(role)}
          >
            <i className="fa fa-check"></i>
          </button>
          <button
            className="btn btn-warning btn-sm text-white"
            data-toggle="tooltip"
            title="Cancelar"
            data-original-title="Cancelar"
            onClick={() => onCancelNewRole()}
          >
            <i className="fa fa-close"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default RoleNew;
