import React from 'react'
import {Link} from 'react-router-dom'
import '../../login/style.css'

class RecoverPassword extends React.Component {

	UNSAFE_componentWillMount(){
		this.props.changeMenu('FORGOT_PASSWORD')
	}

	render(){

		const {user, onHandleEmailInputChange, onRecover} = this.props;

		return(

			<div>
				
				<section className="sptb">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
								<div className="single-page w-100 p-0" >
									<div className="wrapper wrapper2">
										<div className="card-body">
											<h3 className="pb-2">Recupera tu contraseña</h3>
											<div className="input-form mail">
												<input 
													type="email" 
													name="email"
													onChange={onHandleEmailInputChange}
													defaultValue={user.email} 
												/>
												<label>Ingrese el email</label>
											</div>
											<div className="submit">
												<button className="btn btn-primary btn-block" onClick={() => onRecover(user.email)}>Recuperar</button>
											</div>
											<br/>
											<div className="text-center text-dark mb-0">
												Olvidalo, <strong><Link to="/login">ir de vuelta</Link></strong> para iniciar sesión.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>


		);

	}

}

export default RecoverPassword;