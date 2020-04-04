import React, { Component } from 'react';
import { Link } from"react-router-dom";

import CoursesRecently from "./sections/coursesRecently";
import CoursesList from "./sections/coursesList";

declare var $:any;

class Landing extends Component{

    UNSAFE_componentWillMount() {
        this.props.changeMenu('INDEX');
        var body = $('body');
        body.removeClass('sidebar-gone active');
        body.addClass('sidebar-gone');
    }

  
    render(){

      const {onNotifyLogin, onSendBuyRequest, userHasNoInscribe, courses, providers, students, coursesByCategories, modalities, categories, onSeeCourseDetails, thereAreCourseImportant} = this.props;

        return (
          <div className="landing-cont">
            <CoursesRecently onNotifyLogin={onNotifyLogin} courses={courses} onSeeCourseDetails={onSeeCourseDetails} thereAreCourseImportant={thereAreCourseImportant}/>
            <section>
              <div
                className="about-1 cover-image sptb bg-background-color"
                data-image-src="assets/banners/banner5.jpg"
              >
                <div className="content-text mb-0 text-white info">
                  <div className="container">
                    <div className="row text-center">
                      <div className="col-lg-3 col-md-6">
                        <div className="counter-status md-mb-0">
                          <div className="counter-icon">
                            <i className="fa fa-book"></i>
                          </div>
                          <h5>Total Cursos</h5>
                          {console.log(courses.length)}
                          <h2 className="counter mb-0">{courses.length}</h2>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="counter-status status-1 md-mb-0">
                          <div className="counter-icon text-warning">
                            <i className="typcn typcn-mortar-board"></i>
                          </div>
                          <h5>Total Alumnos</h5>
                          <h2 className="counter mb-0">{(students && students.length)? students.length : 0 }</h2>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="counter-status status md-mb-0">
                          <div className="counter-icon text-primary">
                            <i className="fa fa-tags"></i>
                          </div>
                          <h5>Total Categorias</h5>
                          <h2 className="counter mb-0">{categories.length}</h2>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="counter-status status">
                          <div className="counter-icon text-success">
                            <i className="typcn typcn-group-outline"></i>
                          </div>
                          <h5>Total Tutores</h5>
                          <h2 className="counter mb-0">{(providers && providers.length)? providers.length : 0}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="sptb">
              <CoursesList onNotifyLogin={onNotifyLogin} onSeeCourseDetails={onSeeCourseDetails} coursesByCategories={coursesByCategories} courses={courses} modalities={modalities} />
            </section>

            <section>
              <div
                className="cover-image sptb bg-background-color text-white"
                data-image-src="assets/images/banners/banner3.jpg"
              >
                <div className="content-text mb-0">
                  <div className="container">
                    <div className="section-title center-block text-center">
                      <h2>¿Como funciona Colaboral Courses?</h2>
                      <span className="sectiontitle-design">
                        <span className="icons"></span>
                      </span>
                      <p className="text-white-50">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="widgets-cards mb-5">
                              <div className="d-flex">
                                <div className="widgets-cards-icons">
                                  <div className="wrp counter-icon1 mr-5">
                                    <i className="fa fa-clock-o"></i>
                                  </div>
                                </div>
                                <div className="widgets-cards-data">
                                  <div className="text-wrapper">
                                    <h4>
                                      <a href="/" className="text-white fs-25">
                                        Disponibilidad 24x7:
                                      </a>
                                    </h4>
                                    <p className="text-white mt-2 mb-0">
                                      Accede a cientos de cursos en cualquier
                                      horario, aprovechando la tecnología y una
                                      metodología de excelencia
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="widgets-cards mb-5">
                              <div className="d-flex">
                                <div className="widgets-cards-icons">
                                  <div className="wrp counter-icon1 mr-5">
                                    <i className="fa fa-user-o"></i>
                                  </div>
                                </div>
                                <div className="widgets-cards-data">
                                  <div className="text-wrapper">
                                    <h4>
                                      <a href="/" className="text-white fs-25">
                                        Tutorías:
                                      </a>
                                    </h4>
                                    <p className="text-white mt-2 mb-0">
                                      Cada curso contará con un tutor que
                                      facilitará tu aprendizaje y responderá a
                                      tus consultas
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="widgets-cards">
                              <div className="d-flex">
                                <div className="widgets-cards-icons">
                                  <div className="wrp counter-icon1 mr-5">
                                    <i className="fe fe-book-open"></i>
                                  </div>
                                </div>
                                <div className="widgets-cards-data">
                                  <div className="text-wrapper">
                                    <h4>
                                      <a href="/" className="text-white fs-25">
                                        Recursos:
                                      </a>
                                    </h4>
                                    <p className="text-white mt-2 mb-0">
                                      Además podrás acceder a cientos de
                                      información complementaria que permitirá
                                      abordar los programas con mayor
                                      Profundidad
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mrt-sm-2">
                        <div className="clients-img ">
                          <img
                            src="assets/images/colaboral-courses/s1.jpg"
                            alt="img"
                            className="bg-white br-3 p-1"
                          />
                          <img
                            src="assets/images/colaboral-courses/s2.jpg"
                            alt="img"
                            className="bg-white br-3 p-1"
                          />
                          <img
                            src="assets/images/colaboral-courses/s3.jpg"
                            alt="img"
                            className="bg-white br-3 p-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="sptb">
              <div className="container">
                <div className="section-title center-block text-center">
                  <h2>Download</h2>
                  <span className="sectiontitle-design">
                    <span className="icons"></span>
                  </span>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center text-wrap">
                      <div className="btn-list">
                        <Link to="/" className="btn btn-primary btn-lg mb-sm-0">
                          <i className="fa fa-apple fa-1x mr-2"></i> App Store
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-secondary btn-lg mb-sm-0"
                        >
                          <i className="fa fa-android fa-1x mr-2"></i> Google
                          Play
                        </Link>
                        <Link to="/" className="btn btn-info btn-lg mb-0">
                          <i className="fa fa-windows fa-1x mr-2"></i> Windows
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );}
}



export default Landing;