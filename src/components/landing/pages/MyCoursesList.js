import React from "react";
import { Link } from "react-router-dom";
import Menu from "../partials/_menu";
import Footer from "../partials/_footer";
import {getFullDateNoHours} from '../../utils/dateParse'

declare var $:any;

class MyCoursesList extends React.Component {
    
  UNSAFE_componentWillMount() {
      var body = $('body');
      body.removeClass('sidebar-gone active');
      body.addClass('sidebar-gone')
  }

  render() {

    const {myCourses, isFetching, onSeeCourseDetails} = this.props;

    return (
      <div>
        <div className="bg-white border-bottom">
          <div className="container">
            <div className="page-header">
              <h4 className="page-title">Mis lista de cursos</h4>
            </div>
          </div>
        </div>

        <section className="sptb">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-12">
                
                <div className=" mb-lg-0">
                  <div className="">
                    <div className="item2-gl ">
                      <div className=" mb-0">
                        <div className="">
                            {
                              (myCourses && myCourses.length > 0)?
                                <div className="p-5 bg-white item2-gl-nav d-flex">
                                  <h6 className="mb-0 mt-2">Te has inscrito en {myCourses.length} cursos</h6>
                                  <ul className="nav item2-gl-menu ml-auto">
                                    <li className=""><a href="#tab-11" className="active show" data-toggle="tab" title="List style"><i className="fa fa-list"></i></a></li>
                                    <li><a href="#tab-12" data-toggle="tab" className="" title="Grid"><i className="fa fa-th"></i></a></li>
                                  </ul>
                                </div>
                              :
                                <div className="p-5 bg-white item2-gl-nav d-flex">
                                  <h6 className="mb-0 mt-2">No te has inscrito en ningún curso por ahora</h6>
                                </div>
                            }
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane active" id="tab-11">
                        {
                          (myCourses && myCourses.length > 0)&&
                            myCourses.map((course) => (
                              <Link className="card overflow-hidden" to={"/courseDetails/"+course.id}>
                                <div className="ribbon ribbon-top-left text-danger">
                                  {
                                    (!course.price || parseInt(course.price, 10) === 0)?
                                        <span className="bg-danger">Gratis</span>
                                    :
                                    (course.offer_price || parseInt(course.is_in_offer, 10) === 1)&&
                                        <span className="bg-warning">En oferta</span>
                                  }
                                </div>
                                <div className="d-md-flex">
                                  <div className="item-card9-img">
                                    <div className="item-card9-imgs">
                                      <Link to={"/courseDetails/"+course.id} onClick={() => {onSeeCourseDetails(course)}}></Link>
                                      <img src={process.env.REACT_APP_NODE_URL + '/uploads/courses/images/' + course.image} alt="img" className="cover-image" style={{height:210}}/>
                                    </div>
                                    
                                    <div className="item-overly-trans">
                                    <Link to={"/courseDetails/"+course.id} onClick={() => {onSeeCourseDetails(course) }} className="bg-primary">{course.modality.name}</Link>
                                    </div>
                                  </div>
                                  <div className="card border-0 mb-0">
                                    <div className="card-body ">
                                      <div className="item-card9">
                                        <Link to={"/courseDetails/"+course.id} onClick={() => {onSeeCourseDetails(course) }} className="text-dark"><h3 className="font-weight-semibold mt-1">{course.name}</h3></Link>
                                        <div className="mt-2 mb-2">
                                          <Link to={"/courseDetails/"+course.id} onClick={() => {onSeeCourseDetails(course) }} className="mr-4"><span className="text-muted fs-13"><i className="fa fa-tag mr-1"></i> {course.category.name}</span></Link>
                                          <Link to={"/courseDetails/"+course.id} onClick={() => {onSeeCourseDetails(course) }} className="mr-4"><span className="text-muted fs-13"><i className="fa fa-user-o text-muted mr-1"></i> {course.provider.name}</span></Link>
                                          {
                                            (course && parseInt(course.with_date, 10) === 1)&&
                                              <Link to={"/courseDetails/"+course.id} onClick={() => {onSeeCourseDetails(course) }} className="mr-4"><span className="text-muted fs-13"><i className="fa fa-clock-o text-muted mr-1"></i> {getFullDateNoHours(course.begin_date)}</span></Link>
                                          }
                                        </div>
                                        <p className="mb-0 leading-tight">{course.description}</p>
                                      </div>
                                    </div>
                                    <div className="card-footer pt-4 pb-4">
                                      <div className="item-card9-footer d-flex">
                                        <div className="item-card9-cost">
                                          {
                                            (course.price !== 0 && parseInt(course.is_in_offer) === 2)?
                                              <h4 className="text-dark font-weight-semibold mb-0 mt-0">${course.price}</h4>
                                            :
                                            (parseInt(course.is_in_offer, 10) === 1)&&
                                              <label style={{ float: "right" }}><span className="text-dark font-weight-semibold h4">{course.offer_price}$</span>
                                                <span className="text-muted h5 font-weight-normal ml-1"><span className="strike-text">{course.price}$</span></span>
                                              </label>
                                          }
                                        </div>
                                        <div className="ml-auto">
                                          <div className="rating-stars block">
                                            <input type="number" readonly="readonly" className="rating-value star" name="rating-stars-value"  value="3"/>
                                            <div className="rating-stars-container">
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
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))
                        }
                        </div>
                        <div className="tab-pane" id="tab-12">
                          <div className="row">
                          {
                            (myCourses && myCourses.length > 0)&&
                              myCourses.map((course) => ( 
                                <div key={course.id} className="col-lg-6 col-md-12 col-xl-4">
                                  <div className="card overflow-hidden">
                                    <div className="ribbon ribbon-top-left text-danger">
                                      {
                                        (!course.price || parseInt(course.price, 10) === 0)?
                                            <span className="bg-danger">Gratis</span>
                                        :
                                        (course.offer_price || parseInt(course.is_in_offer, 10) === 1)&&
                                            <span className="bg-warning">En oferta</span>
                                      }
                                    </div>
                                    <div className="item-card9-img">
                                      <div className="item-card9-imgs">
                                        <Link to={"/courseDetails/"+course.id} onClick={() => onSeeCourseDetails(course)}></Link>
                                        <img src={process.env.REACT_APP_NODE_URL + '/uploads/courses/images/' + course.image} alt="img" className="cover-image"/>
                                      </div>
                                      <div className="item-overly-trans">
                                        <Link to={"/courseDetails/"+course.id} className="bg-blue" onClick={() => onSeeCourseDetails(course)}>{course.modality.name}</Link>
                                      </div>
                                    </div>
                                    <div className="card-body">
                                      <div className="item-card9">
                                        <span className="item-card-badge"><i className="fa fa-tag mr-1"></i> {course.category.name}</span>
                                        <Link to={"/courseDetails/"+course.id} className="text-dark mt-2" onClick={() => onSeeCourseDetails(course)}><h3 className="font-weight-semibold mt-1 mb-3">{course.name}</h3></Link>
                                        <div className="item-card9-desc mb-2">
                                          <span className="mr-4"><span className="text-muted"><i className="fa fa-user-o text-muted mr-1"></i>{course.provider.name}</span></span>
                                          <span className="mr-4"><span className="text-muted"><i className="fa fa-clock-o text-muted mr-1"></i>{getFullDateNoHours(course.begin_date)}</span></span>
                                        </div>
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
                                    <div className="card-footer">
                                      <div className="item-card9-footer d-flex">
                                        <div className="item-card9-cost">
                                          <h4 className="text-dark font-weight-semibold mb-0 mt-0">${course.price}</h4>
                                        </div>
                                        <div className="ml-auto">
                                          <div className="rating-stars block">
                                            <input type="number" readonly="readonly" className="rating-value star" name="rating-stars-value"  value="3"/>
                                            <div className="rating-stars-container">
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
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="input-group">
                      <input type="text" className="form-control br-tl-3 br-bl-3" placeholder="Buscar curso"/>
                      <div className="input-group-append ">
                        <button type="button" className="btn btn-primary br-tr-3 br-br-3">
                          Buscar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*
                  <div className="card mb-0">
                    <div className="card-header">
                      <h3 className="card-title">Categorias</h3>
                    </div>
                    <div className="card-body">
                      <div className="" id="container">
                        <div className="filter-product-checkboxs">
                          {
                            (categories && categories.length > 0)&&
                              categories.map((category, index) => (
                                <label className="custom-control custom-checkbox mb-3" onClick={() => onFilterByCategory(category.id)}>
                                  <input type="checkbox" className="custom-control-input" name="checkbox1" value="option1"/>
                                  <span className="custom-control-label">
                                    <span className="text-dark">{category.name}<span className="label label-secondary float-right">{myCoursesByCategories[index].myCourses.length}</span></span>
                                  </span>
                                </label>
                              ))
                          }
                        </div>
                      </div>
                    </div>
                    <div className="card-header border-top">
                      <h3 className="card-title">Modalidades</h3>
                    </div>
                    <div className="card-body">
                      <div className="filter-product-checkboxs">
                      {
                        (modalities && modalities.length > 0)&&
                          modalities.map((modality) => (
                            <label className="custom-control custom-checkbox mb-2">
                              <input type="checkbox" className="custom-control-input" name="checkbox1" value="option1"/>
                              <span className="custom-control-label">
                              {modality.name}
                              </span>
                            </label>
                          ))
                      }
                      </div>
                    </div>
                    
                    <div className="card-footer">
                      <a href="/" className="btn btn-primary btn-block">Aplicar filtros</a>
                    </div>
                  </div>

                */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default MyCoursesList;
