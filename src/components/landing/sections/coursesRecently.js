import React from "react";
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css'
declare var $: any;

class coursesRecently extends React.Component {

  render() {
    const { courses, onSeeCourseDetails, thereAreCourseImportant, onNotifyLogin} = this.props;

    const responsive = {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      900: {
        items: 3,
        nav: true
      },
      1300: {
        items: 4,
        nav: true
      }
    }

    return (
      <div>
        <section className="sptb ">
          <div className="container">
            <div className="section-title center-block text-center">
              <h2>Cursos destacados</h2>
              <span className="sectiontitle-design">
                <span className="icons"></span>
              </span>
              <p>Inscribete y/o descarga los mejores cursos</p>
            </div>
            <OwlCarousel 
              loop = {true}
              rewind = {false}
              margin = {25}
              animateIn = {"fadeInDowm"}
              animateOut = {"fadeOutDown"}
              autoplay = {false}
              autoplayTimeout = {5000} 
              autoplayHoverPause = {true}
              dots = {false}
              nav = {true}
              responsiveClass = {true}
              responsive = {responsive}
              
            >
              {
                (courses && courses.length > 0 && thereAreCourseImportant(courses).length > 0)? 
                  thereAreCourseImportant(courses).map(course => (
                    <div key={course.id} className="item">
                      <div className="card mb-0">
                        <div className="ribbon ribbon-top-left text-danger">
                          {
                            (!course.price || parseInt(course.price, 10) === 0)?
                                <span className="bg-danger">Gratis</span>
                            :
                            (course.offer_price || parseInt(course.is_in_offer, 10) === 1)&&
                                <span className="bg-warning">En oferta</span>
                          }
                        </div>
                        <div className="item-card2-img">
                          <Link onClick={() => onSeeCourseDetails(course)} to={"/courseDetails/"+course.id}></Link>
                          <img
                            src={
                              process.env.REACT_APP_NODE_URL +
                              "/uploads/courses/images/" +
                              course.image
                            }
                            alt="img"
                            className="img-height cover-image"
                          />
                          <div className="item-tag">
                            {
                              ((course.price || parseInt(course.price, 10) !== 0) && parseInt(course.is_in_offer) === 2)?
                                <h4 className="mb-0">${course.price}</h4>
                              :
                              (course.offer_price || parseInt(course.is_in_offer, 10) === 1)&&
                                <div className="price-custom"><span className="mb-0 text-white font-weight-semibold h4">{course.offer_price}$</span>
                                  <span className="mb-0 text-dark h5 font-weight-normal ml-1"><span class="strike-text">{course.price}$</span></span>
                                </div>
                            }
                          </div>
                          <div className="item-overly-trans">
                            <div className="rating-stars d-flex">
                              <span className="text-white mr-1 pl-1">5.0</span>
                              <input
                                type="number"
                                readOnly={true}
                                className="rating-value star"
                                name="rating-stars-value"
                                value="5"
                              />
                              <div className="rating-stars-container">
                                <div className="rating-star sm is--active">
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="rating-star sm is--active">
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="rating-star sm is--active">
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="rating-star sm">
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="rating-star sm">
                                  <i className="fa fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body2">
                          <div className="item-card2">
                            <div className="item-card2-desc">
                              <div className="item-card2-text mb-3">
                                <Link
                                  to={"/courseDetails/"+course.id}
                                  className="text-dark"
                                >
                                  <h4 className="mb-2">{course.name}</h4>
                                </Link>
                              </div>
                              <ul className="mb-0">
                                <li>
                                  <i className="icon icon-event  mr-1"></i> 5
                                  hours
                                </li>
                                <li>
                                  <Link to={"/courseDetails/"+course.id} className="icons">
                                    <i className="icon icon-user mr-1"></i>
                                    {course.provider.name}
                                  </Link>
                                </li>
                              </ul>
                              {course.description.length > 80 ? (
                                <p className="">
                                  {course.description.substring(0, 80)}
                                   <Link onClick={() => onSeeCourseDetails(course)} to={"/courseDetails/"+course.id}> ... ver más</Link>                                  
                                </p>
                              ) : (
                                <p className="">{course.description}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-4 pl-5">
                          <span className="mr-4 float-right">
                            <span className="font-weight-bold">
                              <i className="fa fa-clock-o"></i> Modalidad: {"  "}
                            </span>
                            {course.modality.name}
                          </span>
                        </div>
                        <div className="card-footer">
                          <div className="item-card2-footer">
                            <div className="flipthis-wrapper">
                              <Link to="/" className="btn btn-primary mb-3 mb-xl-0" onClick={() => onNotifyLogin()} style={{marginLeft: 33}}>
                                <i className="fe fe-credit-card mr-1"></i>Comprar Curso
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : 
                ""
              }
            </OwlCarousel>
            {
              (!courses || thereAreCourseImportant(courses).length === 0 )&&
                <div>
                  <p>No existen cursos destacados por los momentos.</p>
                </div>
            }
          </div>
        </section>
      </div>
    );
  }
}

export default coursesRecently;
