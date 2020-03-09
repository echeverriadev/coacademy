import React, { Component } from "react";

class ModalityNew extends Component {
  render() {

    const { onCancelNewModality, onSaveModality, onHandleNewModalityInputChange, modality } = this.props;

    return (
      <tr>
        <td>
          <input
            className="form-control"
            placeholder="nombre"
            defaultValue={modality.name}
            type="text"
            name="name"
            onChange={onHandleNewModalityInputChange}
          />
        </td>
        <td>
          <input
            className="form-control"
            placeholder="description"
            defaultValue={modality.description}
            type="text"
            name="description"
            onChange={onHandleNewModalityInputChange}
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
            onClick={() => onSaveModality(modality)}
          >
            <i className="fa fa-check"></i>
          </button>
          <button
            className="btn btn-warning btn-sm text-white"
            data-toggle="tooltip"
            title="Cancelar"
            data-original-title="Cancelar"
            onClick={() => onCancelNewModality()}
          >
            <i className="fa fa-close"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default ModalityNew;
