import React from 'react'

import { Link } from"react-router-dom";

import CoursesRecently from "../sections/coursesRecently";
import CoursesList from "../sections/coursesList";

import Header from '../partials/headerLanding';
import Footer from '../partials/_footer'


class UserDashboardPage extends React.Component {

	UNSAFE_componentWillMount(){
		this.props.changeMenu('INDEX')
	}

	render(){

		const {user, onLogout, courses, modalities, coursesByCategories, onSeeCourseDetails} = this.props;

		return(
				<div className="landing-cont">

		      <section className="sptb">
            <CoursesList 
            	onSeeCourseDetails={onSeeCourseDetails} 
            	coursesByCategories={coursesByCategories} 
            	courses={courses} 
            	modalities={modalities} 
            />
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
		);
	}
}

export default UserDashboardPage;