import React, { Component } from "react";

class CategoryRow extends Component {
  render() {
    const {
      category,
      onEditCategory,
      onReactivateCategory,
      onSelectCategoryToDelete
    } = this.props;

    return (
      <tr>
        <td>{category.name}</td>
        <td>{category.description}</td>
        <td>{category.statusAsString}</td>
        <td>
          <button
            className="btn btn-warning btn-sm text-white"
            data-toggle="tooltip"
            data-original-title="Edit"
            style={{ marginRight: 4 }}
            onClick={() => onEditCategory(category)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          {parseInt(category.status, 10) === 1 ? (
            <button
              className="btn btn-danger btn-sm text-white"
              data-toggle="modal"
              data-target="#exampleModal"
              data-original-title="Delete"
              onClick={() => onSelectCategoryToDelete(category)}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm text-white"
              data-original-title="Reactivar"
              title="Reactivar"
              onClick={() => onReactivateCategory(category)}
            >
              <i className="fa fa-eye"></i>
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default CategoryRow;
