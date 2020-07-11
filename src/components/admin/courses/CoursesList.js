import React from "react";
import CourseRow from "./CourseRow";
import CourseListHeader from "./CourseListHeader";
import ModalDelete from "../utils/DeleteModal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./style.css";

declare var $: any;

class CoursesList extends React.Component {
  componentDidMount() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "assets/js/dataTables/custom-reload-table.js";

    $("body").append(script);
  }

  render() {
    const {
      isFetching,
      courses,
      course,
      onSetCourse,
      onCancelDeleteCourse,
      onDeleteCourse,
      onViewDetails,
      onNewCourse,
      markAsPopular,
      dismarkAsPopular,
      onEditCourseClick
    } = this.props;

    return (
      <div className="card mb-0">
        <div className="card-header">
          <h3 className="card-title">Lista de Cursos</h3>
        </div>
        <div className="card-body">
          {isFetching && (
            <div className="loader-style">
              <div className="text-loader">
                <label>Cargando Cursos</label>
              </div>
              <Loader
                className="img-loader"
                type="CradleLoader"
                color="#6c8e52"
                height={100}
                width={100}
                timeout={0} //3 secs
              />
            </div>
          )}
          <div className="table-responsive border-top ">
            <table
              style={{ width: "100%", marginBottom: 10 }}
              className="data-table-user table table-striped table-bordered table-hover mb-0 text-nowrap"
            >
              <thead>
                <CourseListHeader />
              </thead>
              <tbody>
                {courses && courses.length > 0 ? (
                  courses.map((course) => (
                    <CourseRow
                      key={course.id}
                      course={course}
                      onViewDetails={onViewDetails}
                      markAsPopular={markAsPopular}
                      dismarkAsPopular={dismarkAsPopular}
                      onSetCourse={onSetCourse}
                      onEditCourseClick={onEditCourseClick}
                    />
                  ))
                ) : (
                  <tr>
                    <th title="Marca de destacado">
                      <i
                        style={{ fontSize: 25, color: "orange" }}
                        className="fa fa-map-marker"
                      ></i>
                    </th>
                    <th>Detalles</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Estado del curso</th>
                    <th>Duración</th>
                    <th>Acciones</th>
                  </tr>
                )}
                <tr>
                  <td colSpan={6}>
                    <button
                      className="btn btn-info"
                      onClick={() => onNewCourse()}
                    >
                      {" "}
                      Agregar un nuevo curso{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ModalDelete
          entity={course}
          onCancelDeleteEntity={onCancelDeleteCourse}
          onDeleteEntity={onDeleteCourse}
        />
      </div>
    );
  }
}

export default CoursesList;
