import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

declare var $: any;

class notfound extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.changeMenu('NOT_FOUND');
    var body = $('body');
    body.removeClass('sidebar-gone active');
    body.addClass('sidebar-gone');
  }

  render() {
    return (
      <div className='construction-image-custom page page-h'>
        <div className='page-content z-index-10'>
          <div className='container text-center'>
            <div className='display-1 text-white mb-5'>404</div>
            <h1 className='h2 text-white  mb-3'>Página no encontrada </h1>
            <p className='h4 font-weight-normal mb-7 leading-normal text-white'>
              Ups! Intentaste acceder a una página que no está disponible.
            </p>
            <Link
              className='btn btn-primary'
              to='/'
              onClick={() => this.props.changeMenu('INDEX')}
            >
              Regresar al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default notfound;
