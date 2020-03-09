import React from 'react'
import HeadTable from './Header';
import CategoryRow from './CategoryRow';
import CategoryEditable from "./CategoryEditable";
import CategoryNew from "./CategoryNew";
import ModalDelete from '../utils/DeleteModal'

class CategoryList extends React.Component {

    render(){

      const {
        categories,
        newCategory,
        isAddingNew,
        onNewCategory,
        onCancelNewCategory,
        onSaveCategory,
        onCancelEditCategory,
        onUpdateCategory,
        onEditCategory,
        onCancelDeleteCategory,
        onDeleteCategory,
        onSelectCategoryToDelete,
        categoryToDelete,
        onReactivateCategory,
        onHandleNewCategoryInputChange,
        onHandleEditCategoryInputChange
      } = this.props;

        return (
          <div className="card mb-0">
            <div className="card-header">
              <h3 className="card-title">Lista de categorias de cursos</h3>
            </div>
            <div className="card-body">
              <table
                id="examplee"
                className="table table-striped table-bordered"
              >
                <HeadTable />
                <tbody>
                  {categories && categories.length > 0 ? (
                    categories.map(category =>
                      category.isEditing ? (
                        <CategoryEditable
                          key={category.id}
                          category={category}
                          onCancelEditCategory={onCancelEditCategory}
                          onUpdateCategory={onUpdateCategory}
                          onHandleEditCategoryInputChange={
                            onHandleEditCategoryInputChange
                          }
                        />
                      ) : (
                        <CategoryRow
                          key={category.id}
                          category={category}
                          onEditCategory={onEditCategory}
                          onDeleteCategory={onDeleteCategory}
                          onSelectCategoryToDelete={onSelectCategoryToDelete}
                          onReactivateCategory={onReactivateCategory}
                        />
                      )
                    )
                  ) : (
                    <td colSpan="4">No existen categorias registradas</td>
                  )}
                  {!isAddingNew ? (
                    <tr>
                      <td colSpan="4">
                        <button
                          className="btn btn-info"
                          onClick={() => onNewCategory()}
                        >
                          Agregar nueva categoría
                        </button>
                      </td>
                    </tr>
                  ) : (
                    <CategoryNew
                      category={newCategory}
                      onCancelNewCategory={onCancelNewCategory}
                      onSaveCategory={onSaveCategory}
                      onHandleNewCategoryInputChange={onHandleNewCategoryInputChange}
                    />
                  )}
                </tbody>
              </table>
              <div>
                <span>
                  <small>
                    <strong>Nota importante:</strong> recuerde que todas las acciones que realice sobre las categorías afectará a los cursos. En caso de 
                    eliminar una categoría, el curso con dicha categoría no estará dispoble hasta tanto se reactive nuevamente.
                  </small>
                </span>
              </div>
              <ModalDelete
                entity={categoryToDelete}
                onCancelDeleteEntity={onCancelDeleteCategory}
                onDeleteEntity={onDeleteCategory}
              />
            </div>
          </div>
        );
    }

}

export default CategoryList;