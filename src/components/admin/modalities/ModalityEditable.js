import React, { Component } from 'react';

class ModalityEditable extends Component {
    render() {
      const {
        modality,
        onCancelEditModality,
        onHandleEditModalityInputChange,
        onUpdateModality
      } = this.props;
        return (
          <tr>
            <td>
              <input
                className="form-control"
                placeholder="nombre"
                defaultValue={modality.name}
                type="text"
                name="name"
                onChange={(e) => onHandleEditModalityInputChange(modality, e)}
              />
            </td>
            <td>
              <input
                className="form-control"
                placeholder="description"
                defaultValue={modality.description}
                type="text"
                name="description"
                onChange={(e) => onHandleEditModalityInputChange(modality, e)}
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
                onClick={() => onUpdateModality(modality)}
              >
                <i className="fa fa-check"></i>
              </button>
              <button
                className="btn btn-danger btn-sm text-white"
                data-toggle="tooltip"
                title="Cancelar"
                data-original-title="Cancelar"
                onClick={() => onCancelEditModality(modality)}
              >
                <i className="fa fa-close"></i>
              </button>
            </td>
          </tr>
        );
    }
}

ModalityEditable.propTypes = {

};

export default ModalityEditable;