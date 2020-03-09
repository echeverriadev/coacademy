import React from 'react'
import {Link} from 'react-router-dom'
import ModalDelete from '../utils/DeleteModal'

class UserDetails extends React.Component {

	render(){
		
		const {
			user,
			onDeleteUserClick,
			onEditUserClick,
			onReactivateUserClick,
			onGoBackToListClick,
			onCancelDeleteUserClick
		} = this.props

		return(
			<div className="card mb-0">
				<div className="card-header">
          <h3 className="card-title">Detalles del usuario: {(user && user.user_profile && user.user_profile.name)? user.user_profile.name : user.email }</h3>
        </div>
				<div className="card-body pattern-1">
					<div className="wideget-user">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="wideget-user-desc text-center">
									<div className="wideget-user-img profile-img-custom">
										<img className="brround" src={process.env.REACT_APP_NODE_URL + '/uploads/users/images/' + user.user_profile.picture_url } alt="img"/>
									</div>
									<div className="user-wrap wideget-user-info" style={{marginTop: "0.5rem"}}>
										<span className="text-white"><h4 className="font-weight-semibold">{(user && user.user_profile && user.user_profile.name)? user.user_profile.name : user.email }</h4></span>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12 text-center">
								<div className="wideget-user-info ">
									<div className="wideget-user-icons mt-2">
										{
											(user && user.user_profile && user.user_profile.facebook)?
												<a href="/" className="facebook-bg mt-0"><i className="fa fa-facebook"></i></a>
											:
											"" 
										}
										{
											(user && user.user_profile && user.user_profile.twitter)? 
												<a href="/" className="twitter-bg"><i className="fa fa-twitter"></i></a>
											:
											""
										}
										{	
											(user && user.user_profile && user.user_profile.facebook)?
												<a href="/" style={{background: 'white'}}><i className="fa fa-linkedin"></i></a>
											:
											""
										}
									</div>
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
										<ul className="usertab-list mb-0">
											<li>
												<label className="text-dark"><span className="font-weight-semibold">Correo:</span> <span className="text-muted"> {user.email}</span></label></li>
											<li>
												<label className="text-dark"><span className="font-weight-semibold">Nombre:</span> <span className="text-muted">{(user && user.user_profile && user.user_profile.name)? user.user_profile.name : "No posee"}</span></label>
											</li>
											<li>
												<label className="text-dark"><span className="font-weight-semibold">Apellido:</span> <span className="text-muted">{(user && user.user_profile && user.user_profile.lastname)? user.user_profile.lastname : "No posee"}</span></label>
											</li>
											<li>
												<label className="text-dark"><span className="font-weight-semibold">Telefono:</span> <span className="text-muted">{(user && user.user_profile && user.user_profile.phone)? user.user_profile.phone : "No posee"}</span></label>
											</li>
											<li>
												<label className="text-dark"><span className="font-weight-semibold">Sexo:</span> <span className="text-muted">{(user && user.user_profile && user.user_profile.sex)? user.user_profile.sexAsString : "No posee"}</span></label>
											</li>
											<li>
												<label className="text-dark"><span className="font-weight-semibold">Rol:</span> <span className="text-muted">{(user && user.user_profile && user.user_profile.role)? user.user_profile.role.name : "No posee"}</span></label>
											</li>
											{
                        (user && user.user_profile && user.user_profile.description && user.user_profile.role.name === 'Profesor ')&&
                        <li style={{width: "100%"}}>  
                          <label className="text-dark">
                            <span className="font-weight-semibold">Biografía:</span> 
                          </label>
                          <textarea 
                            style={{height: "124px", resize: "none"}}
                            className="form-control" 
                            disabled={true}
                            value={user.user_profile.description}
                          />
                        </li>
                      }
										</ul>
									</div>
									<div className="row" style={{float: 'left'}}>
										<button  className="btn btn-warning" style={{marginRight: 10}} onClick={() => onEditUserClick(user)}>Modificar</button>
										{
											(user.status == 1)?
												<button data-toggle='modal' data-target="#exampleModal" className="btn btn-danger">Eliminar</button>
											:
												<button onClick={() => onReactivateUserClick(user.id)} className="btn btn-success">Reactivar</button>
										}
									</div>
									<div style={{float: 'right'}}>
										<button className="btn btn-info" onClick={() => onGoBackToListClick()}> {"<<"} Volver </button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ModalDelete
          entity={user}
          onCancelDeleteEntity={onCancelDeleteUserClick}
          onDeleteEntity={onDeleteUserClick}
        />
			</div>
		);

	}

}

export default UserDetails;