import React from 'react'


class CoursesList extends React.Component {

	render(){

		const {
			onSetCourse,
			onCancelDeleteCourse,
			onDeleteCourse,
			onViewDetails,
			onEditCourseClick,
			onNewCourse
		} = this.props;

		return(

			<div className="card mb-0">
				<div className="card-header">
					<h3 className="card-title">Lista de Cursos</h3>
				</div>
				<div className="card-body">
					<div className="ads-tabs">
						<div className="tabs-menus">
							<ul className="nav panel-tabs">
								<li className=""><a href="/tab1" className="active" data-toggle="tab">All Courses (20)</a></li>
								<li><a href="#tab2" data-toggle="tab">Published (08)</a></li>
								<li><a href="#tab3" data-toggle="tab">Featured (05)</a></li>
								<li><a href="#tab5" data-toggle="tab">Active (03)</a></li>
								<li><a href="#tab6" data-toggle="tab">Expired (01)</a></li>
							</ul>
						</div>
						<div className="tab-content">
							<div className="tab-pane active table-responsive border-top userprof-tab" id="tab1">
								<table className="table table-bordered table-hover mb-0 text-nowrap">
									<thead>
										<tr>
											<th></th>
											<th>Coursed</th>
											<th>Category</th>
											<th>Fees</th>
											<th>Course Status</th>
											<th >Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/9.jpg" alt="img"/>
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">IT Classes</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Feb-21-2018 , 16:54</a>
														</div>
													</div>
												</div>
											</td>
											<td>Programming</td>
											<td className="font-weight-semibold fs-16">$54</td>
											<td>
												<a href="/" className="badge badge-warning">Published</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/13.jpg" alt="img" />
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Electronics</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Oct-23-2018 , 9:18</a><br/>
															<a href="/"><i className="fa fa-tag mr-1"></i>Offline</a>
														</div>
													</div>
												</div>
											</td>
											<td>Animations</td>
											<td className="font-weight-semibold fs-16">$156</td>
											<td>
												<a href="/" className="badge badge-warning">Published</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tab-pane  table-responsive border-top userprof-tab" id="tab2">
								<table className="table table-bordered table-hover mb-0 text-nowrap">
									<thead>
										<tr>
											<th></th>
											<th>Coursed</th>
											<th>Category</th>
											<th>Fees</th>
											<th>Course Status</th>
											<th >Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox" />
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/10.jpg" alt="img" />
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Scripting Classes</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Feb-21-2018 , 16:54</a><br/>
															<a href="/"><i className="fa fa-tag mr-1"></i>Online</a>
														</div>
													</div>
												</div>
											</td>
											<td>Languages</td>
											<td className="font-weight-semibold fs-16">$54</td>
											<td>
												<a href="/" className="badge badge-warning">Published</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox" />
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/18.jpg" alt="img"/>
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Marketing</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Oct-23-2018 , 9:18</a><br/>
															<a href="/"><i className="fa fa-tag mr-1"></i>Offline</a>
														</div>
													</div>
												</div>
											</td>
											<td>Marketing</td>
											<td className="font-weight-semibold fs-16">$156</td>
											<td>
												<a href="/" className="badge badge-warning">Published</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/2.jpg" alt="img" />
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Computer Networks</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Feb-21-2018 , 16:54</a><br/>
															<a href="/"><i className="fa fa-tag mr-1"></i>Online</a>
														</div>
													</div>
												</div>
											</td>
											<td>Networking</td>
											<td className="font-weight-semibold fs-16">$25</td>
											<td>
												<a href="/" className="badge badge-warning">Published</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tab-pane  table-responsive border-top userprof-tab" id="tab3">
								<table className="table table-bordered table-hover  text-nowrap mb-0">
									<thead>
										<tr>
											<th></th>
											<th>Coursed</th>
											<th>Category</th>
											<th>Fees</th>
											<th>Course Status</th>
											<th >Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/18.jpg" alt="img"/>
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Digital Marketing</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Nov-22-2018 , 9:18</a><br/>
															<a href="/"><i className="fa fa-tag mr-1"></i>Offline</a>
														</div>
													</div>
												</div>
											</td>
											<td>Marketing</td>
											<td className="font-weight-semibold fs-16">$14,000</td>
											<td>
												<a href="/" className="badge badge-primary">featured</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/2.jpg" alt="img"/>
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Networking</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Nov-15-2019 , 12:45</a><br/>
															<a href="/"><i className="fa fa-tag mr-1"></i>Online</a>
														</div>
													</div>
												</div>
											</td>
											<td>Networking</td>
											<td className="font-weight-semibold fs-16">$22,765</td>
											<td>
												<a href="/" className="badge badge-primary">featured</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tab-pane  table-responsive border-top userprof-tab" id="tab5">
								<table className="table table-bordered table-hover mb-0 text-nowrap">
									<thead>
										<tr>
											<th></th>
											<th>Coursed</th>
											<th>Category</th>
											<th>Fees</th>
											<th>Course Status</th>
											<th >Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/1.jpg" alt="img"/>
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Coding</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Nov-25-2018 , 16:54</a><br/>
															<a href="/"><i className="fa fa-tag mr-1"></i>Offline</a>
														</div>
													</div>
												</div>
											</td>
											<td>Languages</td>
											<td className="font-weight-semibold fs-16">$89</td>
											<td>
												<a href="/" className="badge badge-success">Active</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/18.jpg" alt="img"/>
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Marketing</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Nov-30-2018 , 11:54</a><br/>
															<a href="/"><i className="fa fa-tag mr-1"></i>Offline</a>
														</div>
													</div>
												</div>
											</td>
											<td>Marketing</td>
											<td className="font-weight-semibold fs-16">$89</td>
											<td>
												<a href="/" className="badge badge-success">Active</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tab-pane  table-responsive border-top userprof-tab" id="tab6">
								<table className="table table-bordered table-hover mb-0 text-nowrap">
									<thead>
										<tr>
											<th></th>
											<th>Coursed</th>
											<th>Category</th>
											<th>Fees</th>
											<th>Course Status</th>
											<th >Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<label className="custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox" />
													<span className="custom-control-label"></span>
												</label>
											</td>
											<td>
												<div className="media mt-0 mb-0">
													<div className="card-aside-img">
														<a href="/"> </a>
														<img src="../../assets/images/media/2.jpg" alt="img" />
													</div>
													<div className="media-body">
														<div className="card-item-desc ml-4 p-0 mt-2">
															<a href="/" className="text-dark"><h4 className="font-weight-semibold">Networking</h4></a>
															<a href="/"><i className="fa fa-clock-o mr-1"></i> Nov-15-2019 , 12:45</a><br />
															<a href="/"><i className="fa fa-tag mr-1"></i>Online</a>
														</div>
													</div>
												</div>
											</td>
											<td>Networking</td>
											<td className="font-weight-semibold fs-16">$22,765</td>
											<td>
												<a href="/" className="badge badge-danger">Expired</a>
											</td>
											<td>
												<a href="/" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></a>
												<a href="/" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
												<a href="/" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-heart-o"></i></a>
												<a href="/" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>


		);

	}

}

export default CoursesList;