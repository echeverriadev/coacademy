import React from 'react';

import { Link } from 'react-router-dom';

import CoursesList from '../sections/coursesList';

class UserDashboardPage extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.changeMenu('INDEX');
  }

  render() {
    const {
      user,
      onNotifyLogin,
      onSendBuyRequest,
      userHasNoInscribe,
      userCourses,
      userLogged,
      courses,
      modalities,
      coursesByCategories,
      onSeeCourseDetails,
    } = this.props;

    return (
      <div className='landing-cont'>
        <section className='sptb'>
          <CoursesList
            onSeeCourseDetails={onSeeCourseDetails}
            coursesByCategories={coursesByCategories}
            courses={courses}
            modalities={modalities}
            userLogged={userLogged}
            userCourses={userCourses}
            user={user}
            userHasNoInscribe={userHasNoInscribe}
            onSendBuyRequest={onSendBuyRequest}
            onNotifyLogin={onNotifyLogin}
          />
        </section>

        <section>
          <div
            className='cover-image sptb bg-background-color text-white'
            data-image-src='assets/images/banners/banner3.jpg'
          >
            <div className='content-text mb-0'>
              <div className='container'>
                <div className='section-title center-block text-center'>
                  <h2>¿Como funciona Coacademy?</h2>
                  <span className='sectiontitle-design'>
                    <span className='icons'></span>
                  </span>
                  <p className='text-white-50'>
                    Suscribite a coacademy y conoce más.
                  </p>
                </div>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='widgets-cards mb-5'>
                          <div className='d-flex'>
                            <div className='widgets-cards-icons'>
                              <div className='wrp counter-icon1 mr-5'>
                                <i className='fa fa-clock-o'></i>
                              </div>
                            </div>
                            <div className='widgets-cards-data'>
                              <div className='text-wrapper'>
                                <h4>
                                  <a href='/' className='text-white fs-25'>
                                    Disponibilidad 24x7:
                                  </a>
                                </h4>
                                <p className='text-white mt-2 mb-0'>
                                  Accede a cientos de cursos en cualquier
                                  horario, aprovechando la tecnología y una
                                  metodología de excelencia
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='widgets-cards mb-5'>
                          <div className='d-flex'>
                            <div className='widgets-cards-icons'>
                              <div className='wrp counter-icon1 mr-5'>
                                <i className='fa fa-user-o'></i>
                              </div>
                            </div>
                            <div className='widgets-cards-data'>
                              <div className='text-wrapper'>
                                <h4>
                                  <a href='/' className='text-white fs-25'>
                                    Tutorías:
                                  </a>
                                </h4>
                                <p className='text-white mt-2 mb-0'>
                                  Cada curso contará con un tutor que facilitará
                                  tu aprendizaje y responderá a tus consultas
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='widgets-cards'>
                          <div className='d-flex'>
                            <div className='widgets-cards-icons'>
                              <div className='wrp counter-icon1 mr-5'>
                                <i className='fe fe-book-open'></i>
                              </div>
                            </div>
                            <div className='widgets-cards-data'>
                              <div className='text-wrapper'>
                                <h4>
                                  <a href='/' className='text-white fs-25'>
                                    Recursos:
                                  </a>
                                </h4>
                                <p className='text-white mt-2 mb-0'>
                                  Además podrás acceder a cientos de información
                                  complementaria que permitirá abordar los
                                  programas con mayor Profundidad
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 mrt-sm-2'>
                    <div className='clients-img '>
                      <img
                        src='assets/images/colaboral-courses/s1.jpg'
                        alt='img'
                        className='bg-white br-3 p-1'
                      />
                      <img
                        src='assets/images/colaboral-courses/s2.jpg'
                        alt='img'
                        className='bg-white br-3 p-1'
                      />
                      <img
                        src='assets/images/colaboral-courses/s3.jpg'
                        alt='img'
                        className='bg-white br-3 p-1'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='sptb'>
          <div className='container'>
            <div className='section-title center-block text-center'>
              <h2>Ofertas laborales</h2>

              <p>
                Puedes conocer además las ofertas laborales que disponemos para
                tí en
              </p>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div className='text-center text-wrap'>
                  <div className='btn-list'>
                    <Link
                      to='https://colaboral.com'
                      className='btn btn-primary btn-lg mb-sm-0'
                    >
                      www.colaboral.com
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
