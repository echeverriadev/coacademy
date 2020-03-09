import { connect } from "react-redux";
import ModalityList from "../../components/admin/modalities/ModalitiesList";
import * as modalityActions from "../../actions/modalities";

const mapStateModalityListToProps = state => {
  return {
    modalities: state.modalities.modalities,
    newModality: state.modalities.modality,
    modalityToDelete: state.modalities.modalityToDelete,
    isAddingNew: state.modalities.isAddingNew
  };
};

const mapDispatchModalityListToProps = (dispatch) => {
    
    dispatch(modalityActions.fetchModalities());
    return {
        onNewModality: () => {
          dispatch(modalityActions.newModality())
        },
        onCancelNewModality: () => {
          dispatch(modalityActions.cancelNewModality());
        },
        onSaveModality: (modality) => {
          dispatch(modalityActions.fetchSaveModality(modality))
        },
        onHandleNewModalityInputChange: (e) => {
          dispatch(modalityActions.handleNewInputChange(e));
        },
        onCancelEditModality: (modality) => {
          dispatch(modalityActions.cancelEditModality(modality));
        },
        onUpdateModality: (modality) => {
          dispatch(modalityActions.fetchUpdateModality(modality))
        },
        onEditModality: (modality) => {
          dispatch(modalityActions.editModality(modality));
        },
        onHandleEditModalityInputChange: (modality, e) => {
          dispatch(modalityActions.handleEditInputChange(modality, e));
        },
        onDeleteModality: (modality) => {
          dispatch(modalityActions.fetchDeleteModality(modality))
        },
        onSelectModalityToDelete: (modality) => {
          dispatch(modalityActions.deleteModality(modality));
        },
        onCancelDeleteModality: () => {
          dispatch(modalityActions.cancelDeleteModality());
        },
        onReactivateModality: (modality) => {
          dispatch(modalityActions.fetchReactivateModality(modality))
        }
    };
};

const ModalityListContainer = connect(
  mapStateModalityListToProps,
  mapDispatchModalityListToProps
)(ModalityList);

export default ModalityListContainer;
