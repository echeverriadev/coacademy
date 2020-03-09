import { connect } from "react-redux";
import CategoriesList from "../../components/admin/categories/CategoriesList"; 
import * as categoryAction from "../../actions/categories";

const mapStateCategoryListToProps = state => {
  return {
    categories: state.categories.categories,
    newCategory: state.categories.category,
    categoryToDelete: state.categories.categoryToDelete,
    isAddingNew: state.categories.isAddingNew
  };
};

const mapDispatchCategoryListToProps = (dispatch) => {
    
    dispatch(categoryAction.fetchCategories());
    return {
        onNewCategory: () => {
          dispatch(categoryAction.newCategory())
        },
        onCancelNewCategory: () => {
          dispatch(categoryAction.cancelNewCategory());
        },
        onSaveCategory: (category) => {
          dispatch(categoryAction.fetchSaveCategory(category))
        },
        onHandleNewCategoryInputChange: (e) => {
          dispatch(categoryAction.handleNewInputChange(e));
        },
        onCancelEditCategory: (category) => {
          dispatch(categoryAction.cancelEditCategory(category));
        },
        onUpdateCategory: (category) => {
          dispatch(categoryAction.fetchUpdateCategory(category))
        },
        onEditCategory: (category) => {
          dispatch(categoryAction.editCategory(category));
        },
        onHandleEditCategoryInputChange: (category, e) => {
          dispatch(categoryAction.handleEditInputChange(category, e));
        },
        onDeleteCategory: (category) => {
          dispatch(categoryAction.fetchDeleteCategory(category))
        },
        onSelectCategoryToDelete: (category) => {
          dispatch(categoryAction.deleteCategory(category));
        },
        onCancelDeleteCategory: () => {
          dispatch(categoryAction.cancelDeleteCategory());
        },
        onReactivateCategory: (category) => {
          dispatch(categoryAction.fetchReactivateCategory(category))
        }
    };
};

const CategoriesListContainer = connect(
  mapStateCategoryListToProps,
  mapDispatchCategoryListToProps
)(CategoriesList);

export default CategoriesListContainer;
