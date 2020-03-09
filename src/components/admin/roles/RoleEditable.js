import React, { Component } from 'react';

class RoleEditable extends Component {
    render() {
      const {
        role,
        onCancelEditRole,
        onHandleEditRoleInputChange,
        onUpdateRole
      } = this.props;
        return (
          <tr>
            <td>
              <input
                className="form-control"
                placeholder="nombre"
                defaultValue={role.name}
                type="text"
                name="name"
                onChange={(e) => onHandleEditRoleInputChange(role, e)}
              />
            </td>
            <td>
              <input
                className="form-control"
                placeholder="description"
                defaultValue={role.description}
                type="text"
                name="description"
                onChange={(e) => onHandleEditRoleInputChange(role, e)}
              />
            </td>
            <td>Activo</td>
            <td>
              <button
                className="btn btn-success btn-sm text-white"
                data-toggle="tooltip"
                title="Guardar"
                data-original-title="Guardar"
                style={{ marginRight: 10 }}
                onClick={() => onUpdateRole(role)}
              >
                <i className="fa fa-check"></i>
              </button>
              <button
                className="btn btn-danger btn-sm text-white"
                data-toggle="tooltip"
                title="Cancelar"
                data-original-title="Cancelar"
                onClick={() => onCancelEditRole(role)}
              >
                <i className="fa fa-close"></i>
              </button>
            </td>
          </tr>
        );
    }
}

RoleEditable.propTypes = {

};

export default RoleEditable;