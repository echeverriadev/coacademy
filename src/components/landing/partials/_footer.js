import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => (
  <div className='footer-cont'>
    <div className='bg-dark text-white'>
      <div className='footer-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-12'>
              <h6>¿Quienes Somos</h6>
              <hr className='deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto' />
              <p className='mb-0'>
                Somos expertos en potenciar el desarrollo de carrera de los
                profesionales, a través de nuestros servicios de outplacement,
                plataforma on line y selección de personas
              </p>
            </div>
            <div className='col-lg-2 col-md-12'>
              <h6>Nuestros servicios</h6>
              <hr className='deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto' />
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/about'>Sobre nosotros</Link>
                </li>
                <li>
                  <Link to='/courses'>Cursos</Link>
                </li>
                <li>
                  <Link to='/contact'>Contáctanos</Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-12'>
              <h6>Contacto</h6>
              <hr className='deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto' />
              <p className='mb-0'>
                <i className='fa fa-home mr-3'></i>
                Los Leones 220 oficina 501 Providencia
              </p>
              <p className='mb-0'>
                <i className='fa fa-envelope mr-3'></i>
                coacademy@colaboral.com
              </p>
              <p className='mb-0'>
                <i className='fa fa-phone mr-3'></i>+ 56 22 951 2001
              </p>

              <ul className='list-unstyled list-inline mt-3'>
                <li className='list-inline-item'>
                  <a
                    href='/'
                    className='btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light'
                  >
                    <i className='fa fa-facebook'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='/'
                    className='btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light'
                  >
                    <i className='fa fa-twitter'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='/'
                    className='btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light'
                  >
                    <i className='fa fa-google-plus'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='/'
                    className='btn-floating btn-sm rgba-white-slight mx-1 waves-effect waves-light'
                  >
                    <i className='fa fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-4 col-md-12'>
              <h6 className='mb-0'>Formas de pago</h6>
              <hr className='deep-purple  text-primary accent-2 mb-2 mt-3 d-inline-block mx-auto' />
              <div className='clearfix'></div>
              <ul className='footer-payments'>
                <li className='pl-0'>
                  <a href='/'>
                    {' '}
                    <i className='fa fa-cc-amex' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    {' '}
                    <i className='fa fa-cc-visa' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    {' '}
                    <i className='fa fa-credit-card-alt' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    {' '}
                    <i className='fa fa-cc-mastercard' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    {' '}
                    <i className='fa fa-cc-paypal' aria-hidden='true'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-dark  text-white p-0'>
        <div className='container'>
          <div className='row d-flex'>
            <div className='col-lg-12 col-sm-12 mt-3 mb-3 text-center '>
              Sitio web creado por
              <a
                href='https://colaboral.com/'
                className='fs-14 color-text-footer'
              >
                colaboral.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default footer;
