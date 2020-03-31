import React from 'react';
import {Link} from 'react-router-dom'
import history from '../../history'
import message from '../utils/message'
import {getFullDateNoHours} from '../utils/dateParse'
import { 
	FacebookShareButton, 
	FacebookIcon, 
	WhatsappShareButton,
	WhatsappIcon,
	TwitterShareButton,
	TwitterIcon
} from 'react-share'

import BuyCourseModalContainer from '../../containers/courses/BuyCourseModalContainer';

declare var $:any;

class CourseDetails extends React.Component {

	UNSAFE_componentWillMount(){		
		this.props.onSetMenu('MY_COURSE')
	}

	componentDidMount(){
		$('#container').showmore({
			closedHeight: 0,
			buttonTextMore: 'Ver contacto',
			buttonTextLess: 'Esconder',
			buttonCssClass: 'showmore-button',
			animationSpeed: 0.5
		})
	}


	render(){

		const {userLogged, course, userHasNoInscribe, userCourses, courses, onDownLoadFile, onNotifyLogin, isFetching, onSendBuyRequest, user} = this.props;

		return(
			<div>
			{
				(course && course.name)&&
					<div>
						<div className="bg-white border-bottom">
							<div className="container">
								<div className="page-header">
									<h4 className="page-title">Detalle del curso</h4>
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><strong><Link to="/">Inicio</Link></strong></li>
										<li className="breadcrumb-item"><strong><Link to="/courses">Cursos disponibles</Link></strong></li>
										<li className="breadcrumb-item active" aria-current="page">Detalle del curso</li>
									</ol>
								</div>
							</div>
						</div>

						<section className="sptb">
							<div className="container">
								<div className="row">
									<div className="col-xl-8 col-lg-8 col-md-12">
										<div className="card overflow-hidden">
											{/*<div className="ribbon ribbon-top-right text-danger"><span className="bg-danger">BestSeller</span></div>*/}
											<div className="card-body">
												<div className="item-det mb-4">
													<div className="text-dark">
					                  <h3 className="font-weight-semibold">
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
													<div className=" d-flex">
														<ul className="d-flex mb-0">

															<li className="mr-5"><a href="/" className="icons"><i className="icon icon-calendar text-muted mr-1"></i> {course.duration + ' Hours'}</a></li>
															<li className="mr-5"><a href="/" className="icons"><i className="icon icon-people text-muted mr-1"></i> 765 Enrolled</a></li>
														</ul>
														<div className="rating-stars d-flex mr-5">
															<input type="number" readOnly={true} className="rating-value star" name="rating-stars-value" id="rating-stars-value" value="4" />
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
															</div> 4.0
														</div>
													</div>
												</div>
												<div className="product-slider">
													<ul className="list-unstyled video-list-thumbs">
														<li className="mb-0">
															<Link to={"/courseDetails/"+course.id}  className="class-video p-0">
																<div className="arrow-ribbon bg-primary">{course.category.name}</div>
																<img src={process.env.REACT_APP_NODE_URL + '/uploads/courses/images/' + course.image} alt="img" style={{width: '100%'}} className="img-responsive br-3" />
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-header">
												<h3 className="card-title">Descripción</h3>
											</div>
											<div className="card-body">
												<div className="mb-4 description">
													<p>{course.description}</p>
													{
														(userCourses && userHasNoInscribe(userCourses, course) || parseInt(course.price, 10) === 0)&&	
															<p><strong>Link de descarga: </strong><a href={course.link_media} target="_blank">{course.link_media}</a></p>
													}
													{
														(course.document_description)&&	
															<a download target="_blank" href={process.env.REACT_APP_NODE_URL+"/uploads/courses/pdfs/"+ course.document_description + "/download"} className="btn btn-warning icons" ><i className="icon icon-printer  mr-1"></i> Descargar documento</a>
													}
												</div>
												<h4 className="mb-4 font-weight-bold">Información general</h4>
												{
													(course && parseInt(course.with_date,10) === 1)?
														<div className="row">
															<div className="col-xl-6 col-md-12">
																<ul className="list-unstyled widget-spec mb-0">
																	<li className="">
																		<i className="fa fa-calendar-check-o text-muted w-5"></i>{getFullDateNoHours(course.begin_date)}
																	</li>
																	<li className="">
																		<i className="fa fa-calendar-times-o text-muted w-5"></i>{getFullDateNoHours(course.end_date)}
																	</li>
																</ul>
															</div>
															<div className="col-xl-6 col-md-12">
																<ul className="list-unstyled widget-spec mb-0">
																	<li className="">
																		<i className="fa fa-clock-o  text-muted w-5"></i> {course.modality.name}
																	</li>
																	{
																		(course.document_description)&&
																			<li className="">
																				<i className="fa fa-file-pdf-o  text-muted w-5"></i> Descripción disponible en PDF
																			</li>
																	}
																</ul>
															</div>
														</div>
													:
														<div className="row">
															<div className="col-xl-12 col-md-12">
																<ul className="list-unstyled widget-spec mb-0">
																	<li className="">
																		<i className="fa fa-clock-o  text-muted w-5"></i> {course.modality.name}
																	</li>
																	{
																		(course.document_description)&&
																			<li className="">
																				<i className="fa fa-file-pdf-o  text-muted w-5"></i> Descripción disponible en PDF
																			</li>
																	}
																</ul>
															</div>
														</div>
												}
											</div>
											<div className="card-footer">
												<div className="icons">
													<div className="row"> 
														{
															(course.price !== 0 && userLogged && userCourses && !userHasNoInscribe(userCourses, course))?
																<Link to="/courseDetails" className="btn btn-primary mb-3 mb-xl-0" onClick={ () => onSendBuyRequest(user, course) } style={{marginRight: 20}}><i className="fe fe-credit-card mr-1"></i>Comprar Curso</Link>
															:
															(course.price !== 0 && !userLogged)&&
																<Link to="/courseDetails" onClick={() => onNotifyLogin()} className="btn btn-primary mb-3 mb-xl-0" style={{marginRight: 20}}><i className="fe fe-credit-card mr-1"></i>Comprar Curso</Link>
														}
														<div className="mb-3 mb-xl-0"> 
															<FacebookShareButton
															url={'https://colab-course-web.herokuapp.com/courseDetails/' + course.id}
															quote={course.name}
														>
															<FacebookIcon
															size={32}
															round />
														</FacebookShareButton>
																</div>
																<div className="mb-3 mb-xl-0">
														<WhatsappShareButton
															url={'https://colab-course-web.herokuapp.com/courseDetails/' + course.id}
															quote={course.name}
														>
															<WhatsappIcon
															size={32}
															round />
														</WhatsappShareButton>
														

														</div>
														<div className="mb-3 mb-xl-0">
															<TwitterShareButton
																url={'https://colab-course-web.herokuapp.com/courseDetails/' + course.id}
																quote={course.name}
															>
																<TwitterIcon
																size={32}
																round />
															</TwitterShareButton>
														</div>
													</div>
												</div>
											</div>
										</div>

										{/*<div className="card mb-lg-0">
																			<div className="card-header">
																				<h3 className="card-title">Deja un comentario del curso</h3>
																			</div>
																			<div className="card-body">
																				<div>
																					<div className="form-group">
																						<input type="text" className="form-control" id="name1" placeholder="Tu nombre" />
																					</div>
																					<div className="form-group">
																						<input type="email" className="form-control" id="email" placeholder="Tu Email" />
																					</div>
																					<div className="form-group">
																						<textarea className="form-control" name="example-textarea-input" rows="6" placeholder="Tu comentario" />
																					</div>
																					<a href="/" className="btn btn-primary">Enviar</a>
																				</div>
																			</div>
																		</div>*/}
									</div>
									<div className="col-xl-4 col-lg-4 col-md-12">
										<div className="card mb-0">
											<div className="card-header">
												<h3 className="card-title">Instructor del Curso</h3>
											</div>
											<div className="card-body  item-user">
												<div className="profile-pic mb-0">
													<img src="../assets/images/users/female/25.jpg" className="brround avatar-xxl" alt="user" />
													<div >
														<span className="text-dark"><h4 className="mt-3 mb-1 font-weight-semibold">{(course.provider && course.provider.name )? course.provider.name : course.provider.email}</h4></span>
													</div>
												</div>
											</div>
											<div class="card-body">
												<h4 className="mb-4">Biografía</h4>
												<div>
													<span>{course.provider.description}</span>
												</div>	
												<hr></hr>
												<div class="" id="container">
													<div class="filter-product-checkboxs">
														<label class="custom-control mb-3">
															<span class="">
																	<span class="text-dark"><strong>Correo: </strong>{course.provider.email}</span>
															</span>
														</label>
														<label class="custom-control mb-3">
															<span class="">
																<span class="text-dark"><strong>Teléfono: </strong>{course.provider.phone}</span>
															</span>
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="card mb-0">
											<div className="card-header">
												<h3 className="card-title">Cursos relacionados</h3>
											</div>
											<div className="card-body pb-5">
												<ul className="vertical-scroll">
													{
														(courses && courses.slice(0,5).length > 0)&&
															courses.slice(0,5).map((course_mapped) => (
																(course_mapped.id !== course.id)&&
																	<Link to={"/courseDetails/" + course_mapped.id} className="btn-link">
																		<li className="news-item">
																			<table>
																				<tr>
																					<td><img src={process.env.REACT_APP_NODE_URL + '/uploads/courses/images/' + course_mapped.image} alt="img" className="w-8 border mr-2"/></td>
																					<td className="pl-3"><h4 className="mb-1 font-weight-semibold">{course_mapped.name}</h4><Link to={"/courseDetails/" + course_mapped.id} className="btn-link">Ver detalles</Link><span className="float-right font-weight-bold">{course_mapped.price}</span></td>
																				</tr>
																			</table>
																		</li>
																	</Link>
															))
													}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

					</div>
			}
			<BuyCourseModalContainer />
			</div>
		);
	}
}

export default CourseDetails