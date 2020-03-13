import React from 'react'
import './styles.css'

class UserProfile extends React.Component {

	UNSAFE_componentWillMount(){
		this.props.changeMenu('MY_PROFILE');
	}

	render(){

		const {
			user,
			onEditProfileInputChange,
			onCancelEditProfile,
			onUploadProfileImage,
			onUpdateProfile,
			onChangePasswordInputChange,
			onCancelChangePassword,
			onChangePassword
		} = this.props

		return(
			<section className="sptb">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body pattern-1">
									<div className="wideget-user">
										<div className="row">
											<div className="col-lg-12 col-md-12">
												<div className="wideget-user-desc text-center">
													<div className="wideget-user-img profile-img-custom-user">
														<img 
															className="brround" 
															src={process.env.REACT_APP_NODE_URL + '/uploads/users/images/' + user.user_profile.picture_url} 
															alt="img" style={{ height:155}}
														/>
													</div>
													<div className="user-wrap wideget-user-info" style={{marginTop: "0.5rem"}} >  
									        	<label style={{cursor: "pointer"}} className="m-t-10 text-white" htmlFor="image_uploads">
									        		Cambiar Foto
									        	</label>
									        	<input 
									        		id="image_uploads" 
									        		accept=".jpg, .jpeg, .png, .gif" 
									        		name="image" 
									        		type="file" 
									        		style={{display:"none"}} 
									        		onChange={(e) => onUploadProfileImage(user, e)}
									        	/>    
													</div>
												</div>
												<br/>
												<div align="center" className="user-wrap wideget-user-info">
													<a href="#" className="text-white"><h4 className="font-weight-semibold">{user.email}</h4></a>
												</div>
											</div>
											<div className="col-lg-12 col-md-12 text-center">
												<div className="wideget-user-info ">
													<div className="wideget-user-icons mt-2">
														{(user && user.user_profile && user.user_profile.facebook)&& <a href={`https://www.facebook.com/${user.user_profile.facebook}`} target="_blank" style={{marginRight: 5}} className="facebook-bg mt-0"><i className="fa fa-facebook"></i></a>}
														{(user && user.user_profile && user.user_profile.twitter)&& <a href={`https://www.twitter.com/${user.user_profile.twitter}`} target="_blank" style={{marginRight: 5}} className="twitter-bg"><i className="fa fa-twitter"></i></a>}
														{(user && user.user_profile && user.user_profile.instagram)&& <a href={`https://www.instagram.com/${user.user_profile.instagram}`} target="_blank" style={{marginRight: 5}} className="instagram"><i className="fa fa-instagram"></i></a>}
														{(user && user.user_profile && user.user_profile.linkedin)&& <a href={`https://www.linkedin.com/in/${user.user_profile.linkedin}`} target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a>}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="wideget-user-tab">
										<div className="tab-menu-heading">
											<div className="tabs-menu1">
												<ul className="nav">
													<li className=""><a href="#tab-5" className="active" data-toggle="tab">Perfil</a></li>
													<li><a href="#tab-7" data-toggle="tab" className="">Cambiar contraseña</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="border-0">
								<div className="tab-content">
									<div className="tab-pane active" id="tab-5">
										<div className="card mb-0">
											<div className="card-body">
												<div className="profile-log-switch">
													<div className="media-heading">
														<h3 className="card-title mb-3 font-weight-bold">Datos personales</h3>
													</div>
													<br/>
													<div className="row">
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Correo electŕonico</label>
																<input 
																	disabled={true}
																	type="email" 
																	className="form-control" 
																	placeholder="Correo"
																	value={user.email} 
																/>
															</div>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Nombre</label>
																<input 
																	type="text" 
																	name="name"
																	className="form-control" 
																	placeholder="Nombre" 
																	value={user.user_profile.name}
																	onChange={onEditProfileInputChange}
																/>
															</div>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Apellido</label>
																<input 
																	type="text" 
																	name='lastname'
																	className="form-control" 
																	placeholder="Apellido"
																	value={user.user_profile.lastname}
																	onChange={onEditProfileInputChange} 
																/>
															</div>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Número de teléfono</label>
																<input 
																	type="number" 
																	name="phone"
																	className="form-control" 
																	placeholder="Teléfono"
																	value={user.user_profile.phone}
																	onChange={onEditProfileInputChange}  
																/>
															</div>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Facebook</label>
																<input 
																	type="text" 
																	name="facebook"
																	className="form-control" 
																	placeholder="https://www.facebook.com/" 
																	value={user.user_profile.facebook}
																	onChange={onEditProfileInputChange} 
																/>
															</div>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Linkedin</label>
																<input 
																	type="text"
																	name="linkedin" 
																	className="form-control" 
																	placeholder="https://www.linkedin.com/"
																	value={user.user_profile.linkedin}
																	onChange={onEditProfileInputChange}  
																/>
															</div>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Twitter</label>
																<input 
																	type="text" 
																	name="twitter"
																	className="form-control" 
																	placeholder="https://twitter.com/" 
																	value={user.user_profile.twitter}
																	onChange={onEditProfileInputChange} 
																/>
															</div>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Instagram</label>
																<input 
																	type="text" 
																	name="instagram"
																	className="form-control" 
																	placeholder="https://instagram.com/"
																	value={user.user_profile.instagram}
																	onChange={onEditProfileInputChange}  
																/>
															</div>
															<br/>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Dirección</label>
																<input 
																	type="text" 
																	name="adress"
																	className="form-control" 
																	placeholder="Dirección"
																	value={user.user_profile.adress}
																	onChange={onEditProfileInputChange}  
																/>
															</div>
															<br/>
														</div>
														<div className="col-sm-6 col-md-6">
															<div className="form-group">
																<label className="form-label">Información laboral</label>
																<input 
																	type="text" 
																	name="instagram"
																	className="form-control" 
																	placeholder="Información laboral"
																	value={user.user_profile.description}
																	onChange={onEditProfileInputChange}  
																/>
															</div>
															<br/>
														</div>
														<div className="col-md-12">
															<button style={{float: 'right'}} className="btn btn-danger" onClick={() => onCancelEditProfile()}>Cancelar</button>
															<button style={{float: 'right', marginRight: 10}}  className="btn btn-success" onClick={() => onUpdateProfile(user)}>Guardar cambios</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="tab-7">
										<div className="card mb-0">
											<div className="card-body">
												<div className="row">
													<div className="col-sm-12 col-md-12">
														<div className="form-group">
															<label className="form-label">Contraseña actual</label>
															<input 
																type="password" 
																name="password"
																className="form-control" 
																placeholder="Contraseña actual"
																value={user.password}
																onChange={onChangePasswordInputChange} 
															/>
														</div>
													</div>
													<div className="col-sm-12 col-md-12">
														<div className="form-group">
															<label className="form-label">Nueva contraseña</label>
															<input 
																type="password" 
																name="new_password"
																className="form-control" 
																placeholder="Nueva contraseña" 
																value={user.new_password}
																onChange={onChangePasswordInputChange}
															/>
														</div>
													</div>
													<div className="col-sm-12 col-md-12">
														<div className="form-group">
															<label className="form-label">Confirmar nueva contraseña</label>
															<input 
																type="password" 
																name="new_confirm_password"
																className="form-control" 
																placeholder="Confirmar nueva contraseña"
																value={user.new_confirm_password}
																onChange={onChangePasswordInputChange} 
															/>
														</div>
													</div>
													<div className="col-md-12">
														<button style={{float: 'right'}} className="btn btn-danger" onClick={() => onCancelChangePassword()} >Cancelar</button>
														<button style={{float: 'right', marginRight: 10}} className="btn btn-success" onClick={() => onChangePassword(user)} >Guardar cambios</button>
													</div>
												</div>
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		);

	}

}

export default UserProfile;