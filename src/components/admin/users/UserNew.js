import React from 'react'
import {Link} from 'react-router-dom'

class UserNew extends React.Component {
	
	render(){

		const {
			user,
			roles,
			onHandleNewInputChange,
			onSaveUserClick,
			onUploadUserImageInputChange,
			onCancelSaveUserClick
		} = this.props

		return(
			<div className="card mb-0">
        <div className="card-header">
          <h3 className="card-title">Registrar usuario</h3>
        </div>
        <div className="border-0">
          <div className="tab-content">
            <div className="tab-pane active" id="tab-5">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="profile-log-switch">
                    <div className="media-heading">
                      <h3 className="card-title mb-3 font-weight-bold">Credenciales</h3>
                    </div>
                    <ul className="usertab-list mb-0">
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Correo (*):</span> 
                          <input 
                            name="email"
                            className="form-control" 
                            placeholder="mail@example.com"
                            defaultValue={user.email}
                            onChange={onHandleNewInputChange}
                          /> 
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Contraseña (*):</span> 
                          <input 
                            name="password"
                            type="password"
                            className="form-control" 
                            defaultValue={user.password} 
                            onChange={onHandleNewInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Confirmación de contraseña (*):</span> 
                          <input 
                            name="confirm_password"
                            type="password"
                            className="form-control" 
                            defaultValue={user.confirm_password} 
                            onChange={onHandleNewInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Nombre (*):</span> 
                          <input 
                            name="name"
                            type="text"
                            className="form-control" 
                            defaultValue={(user.user_profile && user.user_profile.name)? user.user_profile.name : ""} 
                            onChange={onHandleNewInputChange}
                          /> 
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Apellido:</span> 
                          <input 
                            name="lastname"
                            type="text"
                            className="form-control" 
                            defaultValue={(user.user_profile && user.user_profile.lastname)? user.user_profile.lastname : ""} 
                            onChange={onHandleNewInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Teléfono (*):</span> 
                          <input 
                            name="phone"
                            type="number"
                            className="form-control" 
                            defaultValue={(user.user_profile && user.user_profile.phone)? user.user_profile.phone : ""} 
                            onChange={onHandleNewInputChange}
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
                            onChange={onHandleNewInputChange}
                          />
                        </label>
                      </li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Sexo (*):</span> 
                          <select
                            name="sex" 
                            className="form-control" 
                            defaultValue={(user.user_profile && user.user_profile.sex)? user.user_profile.sex : "-1"} 
                            onChange={onHandleNewInputChange}
                          >
                          <option value="-1">Seleccione un género</option>
                          <option value="1">Masculino</option>
                          <option value="2">Femenino</option>
                          </select>
                        </label>
                      </li>
                      <li></li>
                      <li>
                        <label className="text-dark">
                          <span className="font-weight-semibold">Rol (*):</span> 
                          <select
                            name="role" 
                            className="form-control" 
                            defaultValue={user.user_profile.role} 
                            onChange={onHandleNewInputChange}
                          >
                          <option value="-1"> Seleccione un rol</option>
                          {
                            (roles && roles.length > 0) && 
                              roles.map(role => (
                                <option key={role.id} value={role.id}> {role.name} </option>
                              ))
                          }
                          </select>
                        </label>
                      </li>
                      {
                        (user && user.isTeacher)&&
                        <li style={{width: "100%"}}>  
                          <label className="text-dark">
                            <span className="font-weight-semibold">Biografía (*):</span> 
                          </label>
                          <textarea 
                            style={{height: "124px", resize: "none"}}
                            className="form-control" 
                            name="description"
                            defaultValue={(user && user.user_profile && user.user_profile.description)? user.user_profile.description : "" }
                            onChange={onHandleNewInputChange}
                          />
                        </li>
                      }
                    </ul>
                  </div>
                  <div className="row" style={{float: 'left'}}>
                    <button  className="btn btn-success" style={{marginLeft:10, marginRight: 10}} onClick={() => onSaveUserClick(user)}>Guardar</button>
                  </div>
                  <div style={{float: 'right'}}>
                    <button className="btn btn-info" onClick={() => onCancelSaveUserClick()}> Cancelar </button>
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

export default UserNew;