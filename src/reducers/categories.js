import * as categoryActions from "../actions/categories";

const initialState = {
  isFetching: false,
  categories: [],
  category: {},
  categoryToDelete: {},
  isAddingNew: false
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryActions.REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true
      });

    case categoryActions.REQUEST_CATEGORIES_SUCCEDED:
      return Object.assign({}, state, {
        categories: action.categories,
        isFetching: false
      });

    case categoryActions.REQUEST_CATEGORIES_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case categoryActions.NEW_CATEGORY:
      return Object.assign({}, state, {
        isAddingNew: true,
        category: {
          id: null,
          name: "",
          description: ""
        }
      });

    case categoryActions.CANCEL_NEW_CATEGORY:
      return Object.assign({}, state, {
        isAddingNew: false,
        category: {}
      });

    case categoryActions.HANDLE_NEW_CATEGORY_INPUT_CHANGE:
      return Object.assign({}, state, {
        category: Object.assign({}, state.category, {
          [action.event.target.name]: action.event.target.value
        })
      });

    case categoryActions.HANDLE_EDIT_CATEGORY_INPUT_CHANGE:
      return Object.assign({}, state, {
        categories: state.categories.map(category => {
          if (parseInt(category.id, 10) === parseInt(action.category.id, 10)) {
            return Object.assign({}, category, {
              [action.event.target.name]: action.event.target.value
            });
          }
          return category;
        })
      });

    case categoryActions.REQUEST_SAVE_CATEGORY_SUCCEDED:
      return Object.assign({}, state, {
        isAddingNew: false,
        isFetching: false,
        category: {},
        categories: [...state.categories, action.category]
      });

    case categoryActions.REQUEST_SAVE_CATEGORY_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case categoryActions.EDIT_CATEGORY:
      return Object.assign({}, state, {
        categories: state.categories.map(category => {
          if (parseInt(category.id, 10) === parseInt(action.category.id, 10)) {
            return Object.assign({}, category, {
              isEditing: true,
              original: category
            });
          }
          return category;
        })
      });

    case categoryActions.CANCEL_EDIT_CATEGORY:
      return Object.assign({}, state, {
        categories: state.categories.map(category => {
          if (parseInt(category.id, 10) === parseInt(action.category.id, 10)) {
            return Object.assign({}, category.original, {
              isEditing: false,
              original: null
            });
          }
          return category;
        })
      });

    case categoryActions.REQUEST_UPDATE_CATEGORY_SUCCEDED:
      return Object.assign({}, state, {
        categories: state.categories.map(category => {
          if (parseInt(category.id, 10) === parseInt(action.category.id, 10)) {
            return Object.assign({}, action.category, {
              isEditing: false,
              original: null
            });
          }
          return category;
        }),
        isFetching: false
      });

    case categoryActions.REQUEST_UPDATE_CATEGORY_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case categoryActions.DELETE_CATEGORY:
      return Object.assign({}, state, {
        categoryToDelete: action.category
      });

    case categoryActions.CANCEL_DELETE_CATEGORY:
      return Object.assign({}, state, {
        categoryToDelete: {}
      });

    case categoryActions.REQUEST_DELETE_CATEGORY_SUCCEDED:
      return Object.assign({}, state, {
        categoryToDelete: {},
        categories: state.categories.map(category => {
          if (parseInt(category.id, 10) === parseInt(action.category.id, 10)) {
            return Object.assign({}, action.category, {
              status: 2,
              statusAsString: "Inactivo"
            });
          }
          return category;
        }),
        isFetching: false
      });

    case categoryActions.REQUEST_DELETE_CATEGORY_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    case categoryActions.REQUEST_REACTIVATE_CATEGORY_SUCCEDED:
      return Object.assign({}, state, {
        categoryToDelete: {},
        categories: state.categories.map(category => {
          if (parseInt(category.id, 10) === parseInt(action.category.id, 10)) {
            return Object.assign({}, action.category, {
              status: 1,
              statusAsString: "Activo"
            });
          }
          return category;
        }),
        isFetching: false
      });

    case categoryActions.REQUEST_REACTIVATE_CATEGORY_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
};

export default categoriesReducer;