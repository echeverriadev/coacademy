import React, { Component } from "react";

class ModalityRow extends Component {
  render() {
    const {
      modality,
      onEditModality,
      onReactivateModality,
      onSelectModalityToDelete
    } = this.props;

    return (
      <tr>
        <td>{modality.name}</td>
        <td>{modality.description}</td>
        <td>{modality.statusAsString}</td>
        <td>
          <button
            className="btn btn-warning btn-sm text-white"
            data-toggle="tooltip"
            data-original-title="Edit"
            style={{ marginRight: 10 }}
            onClick={() => onEditModality(modality)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          {parseInt(modality.status, 10) === 1 ? (
            <button
              className="btn btn-danger btn-sm text-white"
              data-toggle="modal"
              data-target="#exampleModal"
              data-original-title="Delete"
              onClick={() => onSelectModalityToDelete(modality)}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm text-white"
              data-original-title="Reactivar"
              title="Reactivar"
              onClick={() => onReactivateModality(modality)}
            >
              <i className="fa fa-eye"></i>
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default ModalityRow;
