import React from 'react'
import HeadTable from './Header';
import ModalityRow from './ModalityRow';
import ModalityEditable from "./ModalityEditable";
import ModalityNew from "./ModalityNew";
import ModalDelete from '../utils/DeleteModal'

class ModalityList extends React.Component {

    render(){

      const {
        modalities,
        newModality,
        isAddingNew,
        onNewModality,
        onCancelNewModality,
        onSaveModality,
        onCancelEditModality,
        onUpdateModality,
        onEditModality,
        onCancelDeleteModality,
        onDeleteModality,
        onSelectModalityToDelete,
        modalityToDelete,
        onReactivateModality,
        onHandleNewModalityInputChange,
        onHandleEditModalityInputChange
      } = this.props;

        return (
          <div className="card mb-0">
            <div className="card-header">
              <h3 className="card-title">Lista de modalidades de cursos</h3>
            </div>
            <div className="card-body">
              <table
                id="examplee"
                className="table table-striped table-bordered"
              >
                <HeadTable />
                <tbody>
                  {modalities && modalities.length > 0 ? (
                    modalities.map(modality =>
                      modality.isEditing ? (
                        <ModalityEditable
                          key={modality.id}
                          modality={modality}
                          onCancelEditModality={onCancelEditModality}
                          onUpdateModality={onUpdateModality}
                          onHandleEditModalityInputChange={
                            onHandleEditModalityInputChange
                          }
                        />
                      ) : (
                        <ModalityRow
                          key={modality.id}
                          modality={modality}
                          onEditModality={onEditModality}
                          onDeleteModality={onDeleteModality}
                          onSelectModalityToDelete={onSelectModalityToDelete}
                          onReactivateModality={onReactivateModality}
                        />
                      )
                    )
                  ) : (
                    <td colSpan="4">No existen modalidades registradas</td>
                  )}
                  {!isAddingNew ? (
                    <tr>
                      <td colSpan="4">
                        <button
                          className="btn btn-info"
                          onClick={() => onNewModality()}
                        >
                          Agregar nueva modalidad
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <ModalityNew
                      modality={newModality}
                      onCancelNewModality={onCancelNewModality}
                      onSaveModality={onSaveModality}
                      onHandleNewModalityInputChange={onHandleNewModalityInputChange}
                    />
                  )}
                </tbody>
              </table>
              <div>
                <span>
                  <small>
                    <strong>Nota importante:</strong> recuerde que todas las acciones que realice sobre las modalidades afectará a los cursos. En caso de 
                    eliminar una modalidad, el curso con dicha modalidad no estará dispoble hasta tanto se reactive nuevamente.
                  </small>
                </span>
              </div>
              <ModalDelete
                entity={modalityToDelete}
                onCancelDeleteEntity={onCancelDeleteModality}
                onDeleteEntity={onDeleteModality}
              />
            </div>
          </div>
        );
    }

}

export default ModalityList;