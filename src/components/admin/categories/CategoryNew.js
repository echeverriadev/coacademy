import React, { Component } from "react";

class CategoryNew extends Component {
  render() {

    const { onCancelNewCategory, onSaveCategory, onHandleNewCategoryInputChange, category } = this.props;

    return (
      <tr>
        <td>
          <input
            className="form-control"
            placeholder="nombre"
            defaultValue={category.name}
            type="text"
            name="name"
            onChange={onHandleNewCategoryInputChange}
          />
        </td>
        <td>
          <input
            className="form-control"
            placeholder="description"
            defaultValue={category.description}
            type="text"
            name="description"
            onChange={onHandleNewCategoryInputChange}
          />
        </td>
        <td>Activo</td>
        <td>
          <button
            className="btn btn-success btn-sm text-white"
            data-toggle="tooltip"
            title="Guardar"
            data-original-title="Guardar"
            style={{ marginRight: 4 }}
            onClick={() => onSaveCategory(category)}
          >
            <i className="fa fa-check"></i>
          </button>
          <button
            className="btn btn-warning btn-sm text-white"
            data-toggle="tooltip"
            title="Cancelar"
            data-original-title="Cancelar"
            onClick={() => onCancelNewCategory()}
          >
            <i className="fa fa-close"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default CategoryNew;
