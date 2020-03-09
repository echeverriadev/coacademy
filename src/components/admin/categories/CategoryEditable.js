import React, { Component } from 'react';

class CategoryEditable extends Component {
    render() {
      const {
        category,
        onCancelEditCategory,
        onHandleEditCategoryInputChange,
        onUpdateCategory
      } = this.props;
        return (
          <tr>
            <td>
              <input
                className="form-control"
                placeholder="nombre"
                defaultValue={category.name}
                type="text"
                name="name"
                onChange={(e) => onHandleEditCategoryInputChange(category, e)}
              />
            </td>
            <td>
              <input
                className="form-control"
                placeholder="description"
                defaultValue={category.description}
                type="text"
                name="description"
                onChange={(e) => onHandleEditCategoryInputChange(category, e)}
              />
            </td>
            <td>Activo</td>
            <td>
              <button
                className="btn btn-success btn-sm text-white"
                data-toggle="tooltip"
                title="Guardar"
                data-original-title="Guardar"
                style={{ marginRight: 5 }}
                onClick={() => onUpdateCategory(category)}
              >
                <i className="fa fa-check"></i>
              </button>
              <button
                className="btn btn-danger btn-sm text-white"
                data-toggle="tooltip"
                title="Cancelar"
                data-original-title="Cancelar"
                onClick={() => onCancelEditCategory(category)}
              >
                <i className="fa fa-close"></i>
              </button>
            </td>
          </tr>
        );
    }
}

CategoryEditable.propTypes = {

};

export default CategoryEditable;