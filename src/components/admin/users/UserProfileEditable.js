import React from 'react'
import './styles.css'

class UserProfileEditable extends React.Component {

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

				<div className="card mb-0">
					<div className="card-header">
						<div className="wideget-user-tab">
							<div className="tab-menu-heading">
								<div className="tabs-menu1">
									<ul className="nav">
										<li className=""><a href="#tab-profile" className="active" data-toggle="tab">Editar Perfil</a></li>
										<li><a href="#tab-pass" data-toggle="tab" className="">Cambiar Contraseña</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-content">
						<div id="tab-profile" className=" tab-pane active card-body">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<div className="wideget-user-desc text-center">
										<div className="wideget-user-img profile-img-custom">
											<img 
												className="brround" 
												src={process.env.REACT_APP_NODE_URL + '/uploads/users/images/' + user.user_profile.picture_url} 
												alt="img" style={{ height:'inherit'}}
											/>
										</div>
										<div className="user-wrap wideget-user-info">  
											<div>
							        	<label style={{cursor: "pointer"}} className="m-t-10 text-primary" htmlFor="image_uploads">
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
									</div>
								<br/>
								</div>
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
								<div className="col-sm-12 col-md-12">
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
								<div className="col-md-12">
									<button style={{float: 'right'}} className="btn btn-danger" onClick={() => onCancelEditProfile()}>Cancelar</button>
									<button style={{float: 'right', marginRight: 10}}  className="btn btn-success" onClick={() => onUpdateProfile(user)}>Guardar cambios</button>
								</div>
							</div>
						</div>
						<div className="tab-pane card-body" id="tab-pass">
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


			);
	}
}

export default UserProfileEditable;