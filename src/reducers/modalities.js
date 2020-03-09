import * as modalityActions from "../actions/modalities";

const initialState = {
  isFetching: false,
  modalities: [],
  modality: {},
  modalityToDelete: {},
  isAddingNew: false
};

const modalitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalityActions.REQUEST_MODALITIES:
      return Object.assign({}, state, {
        isFetching: true
      });

    case modalityActions.REQUEST_MODALITIES_SUCCEDED:
      return Object.assign({}, state, {
        modalities: action.modalities,
        isFetching: false
      });

    case modalityActions.REQUEST_MODALITIES_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case modalityActions.NEW_MODALITY:
      return Object.assign({}, state, {
        isAddingNew: true,
        modality: {
          id: null,
          name: "",
          description: ""
        }
      });

    case modalityActions.CANCEL_NEW_MODALITY:
      return Object.assign({}, state, {
        isAddingNew: false,
        modality: {}
      });

    case modalityActions.HANDLE_NEW_MODALITY_INPUT_CHANGE:
      return Object.assign({}, state, {
        modality: Object.assign({}, state.modality, {
          [action.event.target.name]: action.event.target.value
        })
      });

    case modalityActions.HANDLE_EDIT_MODALITY_INPUT_CHANGE:
      return Object.assign({}, state, {
        modalities: state.modalities.map(modality => {
          if (parseInt(modality.id, 10) === parseInt(action.modality.id, 10)) {
            return Object.assign({}, modality, {
              [action.event.target.name]: action.event.target.value
            });
          }
          return modality;
        })
      });

    case modalityActions.REQUEST_SAVE_MODALITY_SUCCEDED:
      return Object.assign({}, state, {
        isAddingNew: false,
        isFetching: false,
        modality: {},
        modalities: [...state.modalities, action.modality]
      });

    case modalityActions.REQUEST_SAVE_MODALITY_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case modalityActions.EDIT_MODALITY:
      return Object.assign({}, state, {
        modalities: state.modalities.map(modality => {
          if (parseInt(modality.id, 10) === parseInt(action.modality.id, 10)) {
            return Object.assign({}, modality, {
              isEditing: true,
              original: modality
            });
          }
          return modality;
        })
      });

    case modalityActions.CANCEL_EDIT_MODALITY:
      return Object.assign({}, state, {
        modalities: state.modalities.map(modality => {
          if (parseInt(modality.id, 10) === parseInt(action.modality.id, 10)) {
            return Object.assign({}, modality.original, {
              isEditing: false,
              original: null
            });
          }
          return modality;
        })
      });

    case modalityActions.REQUEST_UPDATE_MODALITY_SUCCEDED:
      return Object.assign({}, state, {
        modalities: state.modalities.map(modality => {
          if (parseInt(modality.id, 10) === parseInt(action.modality.id, 10)) {
            return Object.assign({}, action.modality, {
              isEditing: false,
              original: null
            });
          }
          return modality;
        }),
        isFetching: false
      });

    case modalityActions.REQUEST_UPDATE_MODALITY_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case modalityActions.DELETE_MODALITY:
      return Object.assign({}, state, {
        modalityToDelete: action.modality
      });

    case modalityActions.CANCEL_DELETE_MODALITY:
      return Object.assign({}, state, {
        modalityToDelete: {}
      });

    case modalityActions.REQUEST_DELETE_MODALITY_SUCCEDED:
      return Object.assign({}, state, {
        modalityToDelete: {},
        modalities: state.modalities.map(modality => {
          if (parseInt(modality.id, 10) === parseInt(action.modality.id, 10)) {
            return Object.assign({}, action.modality, {
              status: 2,
              statusAsString: "Inactivo"
            });
          }
          return modality;
        }),
        isFetching: false
      });

    case modalityActions.REQUEST_DELETE_MODALITY_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case modalityActions.REQUEST_REACTIVATE_MODALITY_SUCCEDED:
      return Object.assign({}, state, {
        modalityToDelete: {},
        modalities: state.modalities.map(modality => {
          if (parseInt(modality.id, 10) === parseInt(action.modality.id, 10)) {
            return Object.assign({}, action.modality, {
              status: 1,
              statusAsString: "Activo"
            });
          }
          return modality;
        }),
        isFetching: false
      });

    case modalityActions.REQUEST_REACTIVATE_MODALITY_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
};

export default modalitiesReducer;
