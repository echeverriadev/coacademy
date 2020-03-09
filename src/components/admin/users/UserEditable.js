import React from 'react'
import {Link} from 'react-router-dom'

class UserEditable extends React.Component {

	render(){
		
		const {
			user,
			onCancelEditUser,
			onUpdateUserClick,
      onUploadImageChange,
			onHandleEditInputChange,
      reloadTable
		} = this.props

		return(
			<div className="card mb-0">
        <div className="card-header">
          <h3 className="card-title">Modificar detalles del usuario: {(user && user.user_profile && user.user_profile.name)? user.user_profile.name : user.email }</h3>
        </div>
		    <div className="card-body pattern-1">
          <div className="wideget-user">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="wideget-user-desc text-center">
                  <div className="wideget-user-img">
                    <img className="brround" src="../assets/images/users/female/25.jpg" alt="img"/>
                  </div>
                  <div className="user-wrap wideget-user-info">
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
                        <label className="text-dark">
                          <span className="font-weight-semibold">Correo:</span> 
                          <input 
                            readOnly={true} 
                            className="form-control" 
                            value={user.email}
                          /> 
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Nombre:</span> 
                          <input 
                            name="name"
                            className="form-control" 
                            defaultValue={user.user_profile.name} 
                            onChange={onHandleEditInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Apellido:</span> 
                          <input 
                            name="lastname"
                            className="form-control" 
                            defaultValue={user.user_profile.lastname} 
                            onChange={onHandleEditInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Telefono:</span> 
                          <input
                            name="phone" 
                            className="form-control" 
                            defaultValue={user.user_profile.phone} 
                            onChange={onHandleEditInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Dirección (*):</span> 
                          <input 
                            name="adress"
                            type="text"
                            className="form-control" 
                            defaultValue={(user.user_profile && user.user_profile.adress)? user.user_profile.adress : ""} 
                            onChange={onHandleEditInputChange}
                          />
                        </label>
                      </li>
                      
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Facebook:</span> 
                          <input 
                            name="facebook"
                            className="form-control" 
                            defaultValue={user.user_profile.facebook} 
                            onChange={onHandleEditInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Twitter:</span> 
                          <input 
                            name="twitter"
                            className="form-control" 
                            defaultValue={user.user_profile.twitter} 
                            onChange={onHandleEditInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Linkedin:</span> 
                          <input 
                            name="linkedin"
                            className="form-control" 
                            defaultValue={user.user_profile.linkedin}
                            onChange={onHandleEditInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark"><span className="font-weight-semibold">Sexo:</span> 
                          <select name="sex" className="form-control" onChange={onHandleEditInputChange} defaultValue={user.user_profile.sex}>
                            <option value="-1"> Selecciona un sexo </option>
                            <option value="1"> Masculino </option>
                            <option value="2"> Femenino </option>
                          </select>
                        </label>
                      </li>
                      {
                        (user && user.user_profile && String(user.user_profile.role.name) === "Profesor ")&&
                        <li style={{width: "100%"}}>  
                          <label className="text-dark">
                            <span className="font-weight-semibold">Biografía:</span> 
                          </label>
                          <textarea 
                            style={{height: "124px", resize: "none"}}
                            className="form-control"
                            name="description"
                            onChange={onHandleEditInputChange} 
                            value={user.user_profile.description}
                          />
                        </li>
                      }
                    </ul>
                  </div>
                  <div className="row" style={{float: 'left'}}>
                    <button  className="btn btn-success" style={{marginLeft:10, marginRight: 10}} onClick={() => onUpdateUserClick(user)}>Guardar</button>
                  </div>
                  <div style={{float: 'right'}}>
                    <button className="btn btn-info" onClick={() => onCancelEditUser()}> Cancelar </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>
		);

	}

}

export default UserEditable;