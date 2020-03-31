import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

declare var $:any;

class NotFoundSignIn extends React.Component {
    
    UNSAFE_componentWillMount(){
        this.props.changeMenu('NOT_FOUND');
        var body = $('body');
        body.removeClass('sidebar-gone active');
        body.addClass('sidebar-gone')
    }


    render(){
        return (
            <div className="construction-image-custom page page-h">
                <div className="page-content z-index-10">
                    <div className="container text-center">
                        <div className="display-1 text-white mb-5">404</div>
                        <h1 className="h2 text-white  mb-3">Debes iniciar sesión para realizar esta acción</h1>
                        <p className="h4 font-weight-normal mb-7 leading-normal text-white">Inicia sesión y vuelve a intentarlo.</p>
                        <Link className="btn btn-primary" to="/login" onClick={() => this.props.changeMenu('LOGIN')}>
                            Iniciar sesión
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default NotFoundSignIn;