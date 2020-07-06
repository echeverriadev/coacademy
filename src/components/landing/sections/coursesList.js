import React from "react";
import "./style.css";
import { getFullDateNoHours } from "../../utils/dateParse";
import { Link } from "react-router-dom";

class coursesList extends React.Component {
  render() {
    const {
      user,
      onNotifyLogin,
      userLogged,
      userCourses,
      onSendBuyRequest,
      userHasNoInscribe,
      courses,
      coursesByCategories,
      onSeeCourseDetails,
    } = this.props;

    return (
      <div>
        {courses && courses.length > 0 ? (
          <div className="container">
            <div className="section-title center-block text-center">
              <h2>Cursos disponibles</h2>
              <span className="sectiontitle-design">
                <span className="icons"></span>
              </span>
              <p>Tenemos una gran variedad de cursos disponibles parDa ti</p>
            </div>
            <div className="panel panel-primary">
              <div className="">
                <div className="tabs-menu ">
                  <ul className="nav panel-tabs eductaional-tabs mb-6">
                    <li className="">
                      <a href="#tab1" className="active show" data-toggle="tab">
                        Todos
                      </a>
                    </li>
                    {coursesByCategories && coursesByCategories.length > 0
                      ? coursesByCategories.map((category, index) =>
                          category.courses.length > 0 ? (
                            <li key={category.id}>
                              <a
                                key={category.id}
                                href={`#tab${category.id + 1}`}
                                data-toggle="tab"
                                className=""
                              >
                                {category.name}
                              </a>
                            </li>
                          ) : (
                            ""
                          )
                        )
                      : ""}
                  </ul>
                </div>
              </div>
              <div className="panel-body">
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab1">
                    <div className="row">
                      {courses && courses.length > 0
                        ? courses.map((course) => (
                            <div key={course.id} className="col-xl-4 col-md-4">
                              <div className="card overflow-hidden">
                                <div className="ribbon ribbon-top-left text-danger">
                                  {!course.price ||
                                  parseInt(course.price, 10) === 0 ? (
                                    <span className="bg-danger">Gratis</span>
                                  ) : (
                                    (course.offer_price ||
                                      parseInt(course.is_in_offer, 10) ===
                                        1) && (
                                      <span className="bg-warning">
                                        En oferta
                                      </span>
                                    )
                                  )}
                                </div>
                                <div className="item-card7-img">
                                  <div className="item-card7-imgs custom-img">
                                    <Link
                                      to={"/courseDetails/" + course.id}
                                      onClick={() => onSeeCourseDetails(course)}
                                    />
                                    <img
                                      src={
                                        process.env.REACT_APP_NODE_URL +
                                        "/uploads/courses/images/" +
                                        course.image
                                      }
                                      alt="img"
                                      className="img-height cover-image"
                                    />
                                  </div>
                                  <div className="item-card7-overlaytext">
                                    <Link
                                      to={"/courseDetails/" + course.id}
                                      className="text-white"
                                    >
                                      {course.category.name}
                                    </Link>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="item-card7-desc area-text">
                                    <div className="item-card7-text">
                                      <Link
                                        to={"/courseDetails/" + course.id}
                                        onClick={() =>
                                          onSeeCourseDetails(course)
                                        }
                                        className="text-dark"
                                      >
                                        <h3 className="font-weight-semibold">
                                          {course.name}
                                        </h3>
                                      </Link>
                                    </div>
                                    <ul className="d-flex mb-2">
                                      <li>
                                        <span className="icons text-muted">
                                          <i className="fa fa-calendar-check-o mr-1"></i>
                                          {getFullDateNoHours(
                                            course.begin_date
                                          )}
                                        </span>
                                      </li>
                                      <li>
                                        <span className="icons text-muted">
                                          <i className="fa fa-calendar-times-o mr-1"></i>
                                          {getFullDateNoHours(course.end_date)}
                                        </span>
                                      </li>
                                    </ul>
                                    {course.description.length > 80 ? (
                                      <p className="mb-0">
                                        {course.description.substring(0, 80)}
                                        <Link
                                          onClick={() =>
                                            onSeeCourseDetails(course)
                                          }
                                          to={"/courseDetails/" + course.id}
                                        >
                                          {" "}
                                          ... ver más
                                        </Link>
                                      </p>
                                    ) : (
                                      <p className="mb-0">
                                        {course.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="card-body p-4 pl-5">
                                  <a className="mr-4" href="/">
                                    {" "}
                                    <span className="font-weight-bold">
                                      Duration :
                                    </span>{" "}
                                    <span className="text-muted">
                                      {course.duration} Hours
                                    </span>
                                  </a>
                                  <a className="mr-4 float-right" href="/">
                                    <span className="font-weight-bold">
                                      Modality:
                                    </span>
                                    <span className="text-muted">
                                      {" "}
                                      {course.modality.name}{" "}
                                    </span>
                                  </a>
                                </div>
                                <div className="card-body">
                                  <Link
                                    to={"/courseDetails/" + course.id}
                                    onClick={() => onSeeCourseDetails(course)}
                                    className="btn btn-primary btn-block"
                                  >
                                    Ver detalles
                                  </Link>
                                </div>
                                <div className="card-body">
                                  {course.price !== 0 &&
                                  userLogged &&
                                  user &&
                                  userCourses &&
                                  !userHasNoInscribe(userCourses, course) ? (
                                    <Link
                                      to="/"
                                      className="btn btn-primary btn-block"
                                      onClick={() =>
                                        onSendBuyRequest(user, course)
                                      }
                                      style={{ marginRight: 20 }}
                                    >
                                      <i className="fe fe-credit-card mr-1"></i>
                                      Comprar Curso
                                    </Link>
                                  ) : (
                                    course.price !== 0 &&
                                    !userLogged && (
                                      <Link
                                        to="/"
                                        onClick={() => onNotifyLogin()}
                                        className="btn btn-primary btn-block"
                                        style={{ marginRight: 20 }}
                                      >
                                        <i className="fe fe-credit-card mr-1"></i>
                                        Comprar Curso
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                  {coursesByCategories && coursesByCategories.length > 0
                    ? coursesByCategories.map((category, index) => (
                        <div
                          key={category.id}
                          className="tab-pane"
                          id={`tab${category.id + 1}`}
                        >
                          <div className="row">
                            {category.courses && category.courses.length > 0
                              ? category.courses.map((course) => (
                                  <div
                                    key={course.id}
                                    className="col-xl-4 col-md-6"
                                  >
                                    <div className="card overflow-hidden">
                                      <div className="ribbon ribbon-top-left text-danger">
                                        {!course.price ||
                                        parseInt(course.price, 10) === 0 ? (
                                          <span className="bg-danger">
                                            Gratis
                                          </span>
                                        ) : (
                                          (course.offer_price ||
                                            parseInt(course.is_in_offer, 10) ===
                                              1) && (
                                            <span className="bg-warning">
                                              En oferta
                                            </span>
                                          )
                                        )}
                                      </div>
                                      <div className="item-card7-img">
                                        <div className="item-card7-imgs custom-img">
                                          <Link
                                            to={"/courseDetails/" + course.id}
                                            onClick={() =>
                                              onSeeCourseDetails(course)
                                            }
                                          >
                                            {" "}
                                          </Link>
                                          <img
                                            src={
                                              process.env.REACT_APP_NODE_URL +
                                              "/uploads/courses/images/" +
                                              course.image
                                            }
                                            alt="img"
                                            className="img-height cover-image"
                                          />
                                        </div>
                                        <div className="item-card7-overlaytext">
                                          <Link
                                            to="/courseDetails"
                                            onClick={() =>
                                              onSeeCourseDetails(course)
                                            }
                                            className="text-white"
                                          >
                                            {course.category.name}
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="card-body">
                                        <div className="item-card7-desc">
                                          <div className="item-card7-text">
                                            <Link
                                              to={"/courseDetails/" + course.id}
                                              onClick={() =>
                                                onSeeCourseDetails(course)
                                              }
                                              className="text-dark"
                                            >
                                              <h3 className="font-weight-semibold">
                                                {course.name}
                                              </h3>
                                            </Link>
                                          </div>
                                          <ul className="d-flex mb-2">
                                            <li className="">
                                              <a
                                                href="/"
                                                className="icons text-muted"
                                              >
                                                <i className="icon icon-location-pin  mr-1"></i>{" "}
                                                USA
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/"
                                                className="icons text-muted"
                                              >
                                                <i className="icon icon-event  mr-1"></i>
                                                1 min ago
                                              </a>
                                            </li>
                                            <li className="">
                                              <a
                                                href="/"
                                                className="icons text-muted"
                                              >
                                                <i className="icon icon-phone  mr-1"></i>{" "}
                                                14 675 65
                                              </a>
                                            </li>
                                          </ul>
                                          <p className="mb-0">
                                            Nemo enim ipsam voluptatem voluptas
                                            sit aspernatur ratione voluptatem
                                            sequi nesciunt..
                                          </p>
                                        </div>
                                      </div>
                                      <div className="card-body p-4 pl-5">
                                        <a className="mr-4" href="/">
                                          {" "}
                                          <span className="font-weight-bold">
                                            Duration :
                                          </span>{" "}
                                          <span className="text-muted">
                                            6 Months
                                          </span>
                                        </a>
                                        <a
                                          className="mr-4 float-right"
                                          href="/"
                                        >
                                          <span className="font-weight-bold">
                                            Daily :
                                          </span>
                                          <span className="text-muted">
                                            {" "}
                                            2 Hours{" "}
                                          </span>
                                        </a>
                                      </div>
                                      <div className="card-body">
                                        <Link
                                          to={"/courseDetails/" + course.id}
                                          onClick={() =>
                                            onSeeCourseDetails(course)
                                          }
                                          className="btn btn-primary btn-block"
                                        >
                                          Join Free
                                        </Link>
                                      </div>
                                      <div className="card-body">
                                        {course.price !== 0 &&
                                        userLogged &&
                                        user &&
                                        userCourses &&
                                        !userHasNoInscribe(
                                          userCourses,
                                          course
                                        ) ? (
                                          <Link
                                            to="/"
                                            className="btn btn-primary btn-block"
                                            onClick={() =>
                                              onSendBuyRequest(user, course)
                                            }
                                            style={{ marginRight: 20 }}
                                          >
                                            <i className="fe fe-credit-card mr-1"></i>
                                            Comprar Curso
                                          </Link>
                                        ) : (
                                          course.price !== 0 &&
                                          !userLogged && (
                                            <Link
                                              to="/"
                                              onClick={() => onNotifyLogin()}
                                              className="btn btn-primary btn-block"
                                              style={{ marginRight: 20 }}
                                            >
                                              <i className="fe fe-credit-card mr-1"></i>
                                              Comprar Curso
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))
                              : ""}
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="section-title center-block text-center">
              <h2>Cursos disponibles</h2>
              <span className="sectiontitle-design">
                <span className="icons"></span>
              </span>
              <p>En estos momentos no hay cursos disponibles.</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default coursesList;
