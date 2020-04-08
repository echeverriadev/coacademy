import React from "react";
import { getFullDateNoHours } from "../../utils/dateParse";
import "./style.css";

class CourseRow extends React.Component {
  render() {
    const {
      course,
      onViewDetails,
      markAsPopular,
      dismarkAsPopular,
      onSetCourse,
      onEditCourseClick,
    } = this.props;

    return (
      <tr>
        <td
          title={
            parseInt(course.is_important, 10) === 1
              ? "Desmarcar como destacado"
              : "Marcar como destacado"
          }
        >
          <input
            id={`heart-${course.id}`}
            type="checkbox"
            name="is_important"
            disabled={parseInt(course.status, 10) === 2}
            onClick={() => {
              parseInt(course.is_important, 10) === 1
                ? dismarkAsPopular(course)
                : markAsPopular(course);
            }}
            defaultChecked={parseInt(course.is_important, 10) === 1}
          />
          <label for={`heart-${course.id}`}>❤</label>

          {/* <label className="custom-control custom-checkbox" htmlF or="heart">
            <input 
              type="checkbox"
              id="heart"
              className="custom-control-input" 
              name="is_important"
              disabled={parseInt(course.status, 10) === 2}
              onClick={() => {(parseInt(course.is_important, 10) === 1)? dismarkAsPopular(course) : markAsPopular(course)}} 
              defaultChecked={parseInt(course.is_important, 10) === 1} 
            />
            ❤
            <span className="custom-control-label"></span>
          </label> */}
        </td>
        <td>
          <div className="media mt-0 mb-0">
            <div className="card-aside-img">
              <img
                src={
                  process.env.REACT_APP_NODE_URL +
                  "/uploads/courses/images/" +
                  course.image
                }
                alt="img"
              />
            </div>
            <div className="media-body">
              <div className="card-item-desc ml-4 p-0 mt-2">
                <a
                  href={course.link_media}
                  target="blank"
                  className="text-dark"
                >
                  <h4 className="font-weight-semibold">{course.name}</h4>
                </a>
                <span href="/">
                  <i className="fa fa-clock-o mr-1"></i>{" "}
                  {getFullDateNoHours(course.begin_date)}
                </span>
                <br />
                <br />
                <span href="/">
                  <i className="fa fa-clock-o mr-1"></i>{" "}
                  {getFullDateNoHours(course.end_date)}
                </span>
                <br />
                <br />
                <span>
                  <i className="fa fa-tag mr-1"></i>
                  {course.modality.name}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td>{course.category.name}</td>
        <td className="font-weight-semibold fs-16">
          {course.price !== 0 && parseInt(course.is_in_offer) === 2 ? (
            <label>{course.price} $</label>
          ) : parseInt(course.is_in_offer, 10) === 1 ? (
            <label>
              <span className="text-dark font-weight-semibold h4">
                {course.offer_price}$
              </span>
              <span className="text-muted h5 font-weight-normal ml-1">
                <span className="strike-text">{course.price}$</span>
              </span>
            </label>
          ) : (
            <label>Gratis</label>
          )}
        </td>
        <td>
          <span
            className={
              parseInt(course.status, 10) === 1
                ? "badge badge-warning"
                : "badge badge-danger"
            }
          >
            {course.statusAsString}
          </span>
        </td>
        <td>
          <span className="badge badge-info">{course.duration + " Horas"}</span>
        </td>
        <td>
          <button
            className="btn btn-info btn-sm text-white"
            data-toggle="tooltip"
            data-original-title="View"
            style={{ marginRight: 2 }}
            onClick={() => onViewDetails(course)}
          >
            <i className="fa fa-eye"></i>
          </button>
          <button
            className="btn btn-warning btn-sm text-white"
            data-toggle="tooltip"
            style={{ marginRight: 2 }}
            data-original-title="Edit"
            onClick={() => onEditCourseClick(course)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger btn-sm text-white"
            data-toggle="modal"
            data-target="#exampleModal"
            title="Inhabilitar"
            disabled={parseInt(course.status) === 2}
            onClick={() => onSetCourse(course)}
          >
            <i className="fa fa-eye-slash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default CourseRow;
