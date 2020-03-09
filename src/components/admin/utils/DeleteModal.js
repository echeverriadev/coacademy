import React, { Component } from 'react';

class DeleteModal extends Component {

  render() {
    const { entity, onCancelDeleteEntity, onDeleteEntity } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ¿Desea Inhabilitar a la entidad {entity.name}?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => onCancelDeleteEntity()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Esto modificará el estado a inactivo, puede reactivarlo en
              la opción del menú.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => onCancelDeleteEntity()}
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => onDeleteEntity(entity)}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;