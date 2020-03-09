import React, {Component} from "react";
import Menu from '../landing/partials/_menu';
import Footer from '../landing/partials/_footer';
import {Link} from 'react-router-dom'
import './style.css'

class Login extends Component {
  
	UNSAFE_componentWillMount(){
		this.props.prepareMenu();
	}

    render(){

    const {
    	user,
			isFetching,
			onLoginInputChange,
			onLogin,
			onLoginKeyPress,
			onRegisterInputChange,
			onRegister,
			onRegisterKeyPress
	    } = this.props

        return(
        <div>
            <br/><br/><br/>
		    <div className="container customerpage">
				<div className="row">
					<div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
						<div className="row">
							<div className="col-xl-12 col-md-12 col-md-12 register-right">
								<ul className="nav nav-tabs nav-justified mb-5 p-2 border" id="myTab" role="tablist">
									<li className="nav-item">
										<a className="nav-link active m-1 border" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
									</li>
									<li className="nav-item">
										<a className="nav-link m-1 border" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Registro</a>
									</li>
								</ul>
								<div className="tab-content" id="myTabContent">
									<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
										<div className="single-page  w-100  p-0">
											<div className="wrapper wrapper2">
												<div id="login" className="card-body" tabIndex="500">
													<h3 className="pb-2">Login</h3>
													<div className="input-form mail">
														<input 
															defaultValue={user.email} 
															type="email" 
															name="email" 
															onChange={onLoginInputChange} 
														/>
														<label>Email</label>
													</div>
													<div className="passwd input-form">
														<input 
															onChange={onLoginInputChange}
															type="password" 
															name="password"
															defaultValue={user.password}
															onKeyPress={onLoginKeyPress}
														/>
														<label>Contraseña</label>
													</div>
													<div className="submit">
														<button id="btn-login" className="btn btn-primary btn-block" onClick={() => onLogin(user)}>Login</button>
													</div>
													<br/>
													<p className="mb-2"><Link to="/recoverPassword">¿Olivdaste tu contraseña?</Link></p>
												</div>
											</div>
										</div>
									</div>
									<div style={{marginLeft: "-45%", width: 750}} className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
										<div className="single-page w-100  p-0">
											<div className="wrapper wrapper2">
												<div id="Register" className="card-body" tabIndex="500">
													<h3 className="pb-1">Registro</h3>
													<div className="row">
														<div className="col-md-4 col-xl-4 col-xs-4 col-sm-4">
															<div className="input-form mail">
																<input 
																	defaultValue={user.email} 
																	type="email" 
																	name="email" 
																	onChange={onRegisterInputChange} 
																/>
																<label>Email (*)</label>
															</div>
														</div>
														<div className="col-md-4 col-xl-4 col-xs-4 col-sm-4">
															<div className="passwd input-form">
																<input 
																	onChange={onRegisterInputChange}
																	type="password" 
																	name="password"
																	defaultValue={user.password}
																	onKeyPress={onRegisterKeyPress}
																/>
																<label>Contraseña (*)</label>
															</div>
														</div>
														<div className="col-md-4 col-xl-4 col-xs-4 col-sm-4">
															<div className="passwd input-form">
																<input 
																	onChange={onRegisterInputChange}
																	type="password" 
																	name="confirm_password"
																	defaultValue={user.confirm_password}
																	onKeyPress={onRegisterKeyPress}
																/>
																<label>Confirmar contraseña (*)</label>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
															<div className="input-form">
																<input 
																	defaultValue={(user.user_profile && user.user_profile.name)? user.user_profile.name : ""} 
																	type="text" 
																	name="name" 
																	onChange={onRegisterInputChange} 
																/>
																<label>Nombre (*)</label>
															</div>
														</div>
														<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
															<div className="input-form">
																<input 
																	onChange={onRegisterInputChange}
																	type="text" 
																	name="lastname"
																	defaultValue={(user.user_profile && user.user_profile.lastname)? user.user_profile.lastname : ""}
																/>
																<label>Apellido</label>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
															<div className="input-form">
																<input 
																	onChange={onRegisterInputChange}
																	type="number" 
																	name="phone"
																	defaultValue={(user.user_profile && user.user_profile.phone)? user.user_profile.phone : ""}
																/>
																<label>Teléfono (*)</label>
															</div>
														</div>
														<div className="col-md-6 col-xl-6 col-xs-6 col-sm-6">
															<div className="input-form">
																<select 
																	className="form-control"
																	onChange={onRegisterInputChange}
																	name="sex"
																	value={(user.user_profile && user.user_profile.sex)? user.user_profile.sex : "-1"}
																>
																	<option value="-1">Seleccione una opción</option>
																	<option value={1}>Masculino</option>
																	<option value={2}>Femenino</option>
																</select>
																<label>Sexo (*)</label>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
															<div className="input-form">
																<input 
																	onChange={onRegisterInputChange}
																	type="text" 
																	name="adress"
																	defaultValue={(user.user_profile && user.user_profile.adress)? user.user_profile.adress : ""}
																/>
																<label>Dirección (*)</label>
															</div>
														</div>	
													</div>
													<div className="row">
														<div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
															<div className="input-form">
																<input 
																	onChange={onRegisterInputChange}
																	type="text" 
																	name="description"
																	defaultValue={(user.user_profile && user.user_profile.description)? user.user_profile.description : ""}
																/>
																<label>¿A qué te dedicas?</label>
															</div>
														</div>	
													</div>
													<div className="submit">
														<button id="btn-login" className="btn btn-primary btn-block" onClick={() => onRegister(user)}>Registrarse</button>
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
        </div>
        <br/><br/>
      </div>
    );


    }
};

export default Login;