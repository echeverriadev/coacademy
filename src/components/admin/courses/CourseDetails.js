import React from 'react'
import {Link} from 'react-router-dom'
import { getFullDateNoHours } from "../../utils/dateParse";
import ModalDelete from '../utils/DeleteModal';

class CourseDetails extends React.Component {

	render(){

		const { course, onGoBackToListClick, markAsPopular, dismarkAsPopular, onEditCourseClick, onReactivateCourseClick, onCancelDeleteCourseClick,  onDeleteCourseClick} = this.props;

		return (
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12">
          <div className="card overflow-hidden">
            <div className="card-body">
              <div className="item-det mb-4">
                <div className="text-dark">
                  <h3>
                    {course.name}{" "}
                    {
                      (course.price !== 0 && parseInt(course.is_in_offer) === 2)?
                        <label style={{ float: "right" }}>{course.price} $</label>
                      :
                      (parseInt(course.is_in_offer, 10) === 1)&&
                        <label style={{ float: "right" }}><span class="text-dark font-weight-semibold h2">{course.offer_price}$</span>
                          <span class="text-muted h3 font-weight-normal ml-1"><span class="strike-text">{course.price}$</span></span>
                        </label>
                    }
                  </h3>
                </div>
                <div className="text-dark">
                  <ul className="d-flex mb-0">
                    <li className="mr-5">
                      <span className="icons">
                        <i className="icon icon-calendar text-muted mr-1"></i>
                        {course.duration + " hours"}{" "}
                      </span>
                    </li>
                    <li className="mr-5">
                      <span href="#" className="icons">
                        <i className="icon icon-people text-muted mr-1"></i> 765
                        Descargas
                      </span>
                    </li>
                  </ul>
                  <div className="rating-stars d-flex mr-5">
                    <input
                      type="number"
                      readOnly={true}
                      className="rating-value star"
                      name="rating-stars-value"
                      id="rating-stars-value"
                      value="4"
                    />
                    <div className="rating-stars-container mr-2">
                      <div className="rating-star sm">
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="rating-star sm">
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="rating-star sm">
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="rating-star sm">
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="rating-star sm">
                        <i className="fa fa-star"></i>
                      </div>
                    </div>{" "}
                    4.0
                  </div>
                </div>
                <div className="text-dark">
                  <span
                    style={{ marginRight: 5 }}
                    title="Modalidad"
                    className="btn btn-info btn-sm"
                  >
                    {course.modality.name}
                  </span>
                  <span
                    style={{ marginRight: 5 }}
                    title="Categoría"
                    className="btn btn-success btn-sm"
                  >
                    {course.category.name}
                  </span>
                  <span title="Estado" className="btn btn-warning btn-sm">
                    {course.statusAsString}
                  </span>
                </div>
              </div>
              <div className="product-slider">
                <ul className="list-unstyled video-list-thumbs">
                  <li
                    className="mb-0"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src={
                        process.env.REACT_APP_NODE_URL +
                        "/uploads/courses/images/" +
                        course.image
                      }
                      style={{
                        height: "210px",
                        width: "240px"
                      }}
                      alt="img"
                      className="img-responsive br-3"
                    />
                  </li>
                </ul>
              </div>
              <br />
            </div>
          </div>
          <div className="border-0 mb-5">
            <div className="wideget-user-tab wideget-user-tab3">
              <div className="tab-menu-heading">
                <div className="tabs-menu1">
                  <ul className="nav">
                    <li className="">
                      <a href="#tab-1" className="active" data-toggle="tab">
                        Información general
                      </a>
                    </li>
                    {course.document_description && (
                      <li>
                        <a href="#tab-2" data-toggle="tab" className="">
                          Documento descriptivo
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content border-left border-right p-5 bg-white details-tab-content">
              <div className="tab-pane active" id="tab-1">
                <h3 className="card-title mb-3 ">Descripción</h3>
                <div className="mb-0">
                  <p>{course.description ? course.description : "No posee"}</p>
                  <small>
                    <strong> Link de accesso: </strong>
                    <a href={course.link_media} target="blank">
                      {course.link_media}{" "}
                    </a>{" "}
                  </small>
                </div>
                <hr style={{ marginTop: 8 }} />
                {
                  (parseInt(course.with_date, 10) === 1)&&
                  <div className="row">
                    <div className="col-6">
                      <h4 className="mb-3">Fecha de Inicio:</h4>
                      <label htmlFor="">
                        {" "}
                        {getFullDateNoHours(course.begin_date)}
                      </label>
                    </div>
                    <div className="col-6">
                      <h4 className="mb-3">Fecha de Culminación:</h4>
                      <label htmlFor="">
                        {" "}
                        {getFullDateNoHours(course.end_date)}
                      </label>
                    </div>
                  </div>
                }
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="mb-4">
                  <h5 className="font-weight-bold">
                    Descripción del curso (PDF)
                  </h5>
                  {course.document_description && (
                    <div>
                      <iframe
                        title={course.name}
                        className="frame-pdf"
                        src={
                          process.env.REACT_APP_NODE_URL +
                          "/uploads/courses/pdfs/" +
                          course.document_description
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
              <div style={{ marginTop: 50 }}>
                <button
                  className="btn btn-info	"
                  onClick={() => onGoBackToListClick()}
                >
                  {"<<"} Volver
                </button>

                <button
                  style={{marginLeft: 10}}
                  className="btn btn-warning "
                  onClick={() => onEditCourseClick(course)}
                >
                  Modificar
                </button>

                {
                  (course && course.status && parseInt(course.status, 10) === 2)?
                    <button
                      className="btn btn-success"
                      style={{marginLeft: 10}}
                      onClick={() => onReactivateCourseClick(course.id)}
                    >
                      Publicar
                    </button>
                  :
                    <button
                      style={{marginLeft: 10}}
                      data-toggle="modal"
                      data-target="#exampleModal"
                      className="btn btn-danger"
                    >
                      Inhabilitar
                    </button>

                }
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Información del Profesor</h3>
            </div>
            <div className="card-body  item-user">
              <div className="profile-pic mb-0">
                <img
                  src={
                    process.env.REACT_APP_NODE_URL +
                    "/uploads/users/images/" +
                    course.provider.image
                  }
                  className="brround avatar-xxl"
                  alt="user"
                />
                <div>
                  <div className=" item-user-icons mt-4">
                    {(course && course.provider && course.provider.facebook && course.provider.facebook !== "null")&& <a href={`https://www.facebook.com/${course.provider.facebook}`} target="_blank" style={{marginRight: 5}} className="facebook-bg mt-0"><i className="fa fa-facebook"></i></a>}
                    {(course && course.provider && course.provider.twitte && course.provider.twitte !== "null")&& <a href={`https://www.twitter.com/${course.provider.twitter}`} target="_blank" style={{marginRight: 5}} className="twitter-bg"><i className="fa fa-twitter"></i></a>}
                    {(course && course.provider && course.provider.instagram && course.provider.instagram !== "null")&& <a href={`https://www.instagram.com/${course.provider.instagram}`} target="_blank" style={{marginRight: 5}} className="instagram"><i className="fa fa-instagram"></i></a>}
                    {(course && course.provider && course.provider.linkedin && course.provider.linkedin !== "null")&& <a href={`https://www.linkedin.com/in/${course.provider.linkedin}`} target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a>}
                  </div>
                  <a href="userprofile.html" className="text-dark">
                    <h4 className="mt-3 mb-1 font-weight-semibold">
                      {course.provider.name}
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body" style={{textAlign: "justify"}}>
              <h4 className="mb-4">Biografía</h4>
              <div>
                <span>{course.provider.description}</span>
              </div>
              <br/>
            </div>
            {
              /*
                <div className="card-body item-user">
                  <h4 className="mb-4">Información de contacto</h4>
                  <div>
                    <h6>
                      <span className="font-weight-semibold">
                        <i className="fa fa-envelope mr-2 mb-2"></i>
                      </span>
                      <a href="#" className="text-body">
                        {" "}
                        {course.provider.email}
                      </a>
                    </h6>
                    <h6>
                      <span className="font-weight-semibold">
                        <i className="fa fa-phone mr-2  mb-2"></i>
                      </span>
                      <a href="#" className="text-body">
                        {" "}
                        {course.provider.phone}
                      </a>
                    </h6>
                  </div>
                  <div className=" item-user-icons mt-4">
                    {(course.provider.facebook && course.provider.facebook !== "null") && (
                      <a
                        href={course.provider.facebook}
                        className="facebook-bg mt-0"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    )}
                    {(course.provider.twitter && course.provider.twitter !== "null") && (
                      <a href={course.provider.twitter} className="twitter-bg">
                        <i className="fa fa-twitter"></i>
                      </a>
                    )}
                    {(course.provider.instagram && course.provider.instagram !== "null") && (
                      <a href="#" className="instagram-bg">
                        <i className="fa fa-instagram"></i>
                      </a>
                    )}
                  </div>
                </div>

              */
            }
          </div>
        </div>
        <ModalDelete
          entity={course}
          onCancelDeleteEntity={onCancelDeleteCourseClick}
          onDeleteEntity={onDeleteCourseClick}
        />
      </div>
    );
	}

}

export default CourseDetails;