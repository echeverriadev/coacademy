import React from 'react';
import {Link} from 'react-router-dom'
import Loader from "react-loader-spinner";
import './styles.css'

declare var $:any;

class NotFoundSignIn extends React.Component {
    
    UNSAFE_componentWillMount(){
        var body = $('body');
        body.removeClass('sidebar-gone active');
        body.addClass('sidebar-gone')
    }


    render(){
        return (
            <div className="construction-image-custom page page-h" style={{padding: 110}}>
                <Link id="goBack" style={{display: "none"}} to="/"></Link> 
                {
                    (this.props.isFetching)?
                        <div>
                            <label className="text-loader2">Procesando solicitud</label>
                            <Loader
                                className="img-loader"
                                type="CradleLoader"
                                color="#6c8e52"
                                height={100}
                                width={100}
                                timeout={0} //3 secs
                            />
                        </div>
                    :
                    <div className="page-content z-index-10">
                        <div className="container text-center">
                            <h1 className="h2 text-white  mb-3">El curso ya está disponible para ti. Muchas gracias por tu compra.</h1>
                            <p className="h4 font-weight-normal mb-7 leading-normal text-white">Ve a la sección de mis cursos y sigue aprendiendo.</p>
                            <Link className="btn btn-primary" to="/myCourseList" onClick={() => this.props.changeMenu('LOGIN')}>
                                Mis cursos
                            </Link>
                        </div>
                    </div>
                }
            </div>
        );
    }
};

export default NotFoundSignIn;