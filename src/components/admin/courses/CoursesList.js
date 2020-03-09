import React from 'react'
import CourseRow from './CourseRow'
import CourseListHeader from './CourseListHeader'
import ModalDelete from '../utils/DeleteModal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './style.css'

class CoursesList extends React.Component {

	render(){

    const {
      isFetching,
      courses,
      course,
      courseLogged,
      onSetCourse,
      onCancelDeleteCourse,
      onDeleteCourse,
      onViewDetails,
      onEditCourseClick,
      onNewCourse,
      markAsPopular,
      dismarkAsPopular
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
          <div className="ads-tabs">
            <div className="tab-content">
              <div
                className="tab-pane active table-responsive border-top userprof-tab"
                id="tab1"
              >
                <table className="table table-bordered table-hover mb-0 text-nowrap">
                  <thead>
                    <CourseListHeader />
                  </thead>
                  <tbody>
                    {courses && courses.length > 0 ? (
                      courses.map(course => (
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
                        <td colSpan={6}> No hay cursos cargados </td>
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