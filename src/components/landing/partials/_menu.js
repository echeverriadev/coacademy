import React from 'react';
import { Link } from 'react-router-dom';
declare var $: any;

class _menu extends React.Component {
  registerClick() {
    window.setTimeout(function () {
      var register = $('#profile-tab');

      register.click();
    }, 0);
  }

  showMenu() {
    $('body').addClass('sidebar-gone active');
  }

  render() {
    const { user, onLogout, changeMenu } = this.props;

    return (
      <div>
        <div className='header-main'>
          <div className='top-bar'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-8 col-lg-8 col-sm-4 col-7'>
                  <div className='top-bar-left d-flex'>
                    <div className='clearfix'>
                      <ul className='socials'>
                        <li>
                          <a
                            href='https://www.instagram.com/colaboral.cl/'
                            className='social-icon text-dark'
                          >
                            <i className='fa fa-instagram'></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href='https://www.linkedin.com/company/colaboral.com/'
                            className='social-icon text-dark'
                          >
                            <i className='fa fa-linkedin'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='clearfix'>
                      <ul className='contact'>
                        <li className='mr-5 d-lg-none'>
                          <Link to='/' className='callnumber text-dark'>
                            <span>
                              <i className='fa fa-phone mr-1'></i>: + 56 22 951
                              2001
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-sm-8 col-5'>
                  <div className='top-bar-right'>
                    <ul className='custom'>
                      <li>
                        {!user ? (
                          <Link
                            to='/login'
                            className='text-dark'
                            onClick={() => changeMenu('LOGIN')}
                          >
                            <i className='fa fa-sign-in mr-1'></i>{' '}
                            <span>Acceder</span>
                          </Link>
                        ) : (
                          ''
                        )}
                      </li>
                      {user ? (
                        <li className='dropdown'>
                          <Link
                            to='/'
                            className='text-dark'
                            data-toggle='dropdown'
                          >
                            <i className='dropdown-icon  icon icon-settings'></i>
                            <span>
                              {' '}
                              Configuración
                              <i className='fa fa-caret-down text-white ml-1'></i>
                            </span>
                          </Link>
                          <div className='dropdown-menu dropdown-menu-right dropdown-menu-arrow'>
                            <Link to='/myProfile' className='dropdown-item'>
                              <i className='dropdown-icon icon icon-user'></i>
                              Mi Perfil
                            </Link>
                            <Link
                              className='dropdown-item'
                              to='/'
                              onClick={() => onLogout()}
                            >
                              <i className='dropdown-icon icon icon-power'></i>{' '}
                              Cerrar sesión
                            </Link>
                          </div>
                        </li>
                      ) : (
                        ''
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <header className='header-search header-logosec p-2'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8 col-md-12'>
                  <div className='header-search-logo d-none d-lg-block'>
                    <Link className='header-logo' to='/'>
                      <img
                        src={require('./colaboral-color.png')}
                        className='header-brand-img'
                        alt=' logo'
                        onClick={() => changeMenu('INDEX')}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className='horizontal-header clearfix '>
            <div className='container'>
              <span
                id='horizontal-navtoggle'
                className='animated-arrow'
                onClick={() => this.showMenu()}
              >
                <span></span>
              </span>
              <span className='smllogo'>
                <img
                  src={require('./colaboral-color.png')}
                  width='120'
                  alt='img'
                />
              </span>
              <span className='smllogo-white'>
                <img
                  src='../assets/images/colaboral-courses/colaboral-color.png'
                  width='120'
                  alt='img'
                />
              </span>
            </div>
          </div>

          <div className='header-style horizontal-main bg-dark-transparent clearfix'>
            <div className='horizontal-mainwrapper container clearfix'>
              <nav className='horizontalMenu clearfix d-md-flex'>
                <ul className='horizontalMenu-list'>
                  <li aria-haspopup='true'>
                    <Link to='/' onClick={() => changeMenu('INDEX')}>
                      Inicio
                    </Link>
                  </li>
                  <li aria-haspopup='true'>
                    <Link to='/about' onClick={() => changeMenu('ABOUT')}>
                      Sobre nosotros{' '}
                    </Link>
                  </li>
                  <li aria-haspopup='true'>
                    <Link
                      to='/courses'
                      onClick={() => changeMenu('COURSE_LIST')}
                    >
                      Cursos
                    </Link>
                  </li>
                  {user ? (
                    <li aria-haspopup='true'>
                      <Link
                        to='/myCourseList'
                        onClick={() => changeMenu('MY_COURSES')}
                      >
                        Mis cursos
                      </Link>
                    </li>
                  ) : (
                    ''
                  )}
                  <li aria-haspopup='true'>
                    <Link to='/contact' onClick={() => changeMenu('CONTACT')}>
                      Contáctanos
                    </Link>
                  </li>
                </ul>
                {!user ? (
                  <ul className='mb-0'>
                    <li aria-haspopup='true' className='d-none d-lg-block '>
                      <span>
                        <Link
                          className='btn btn-primary  ad-post'
                          to='/login'
                          onClick={() => {
                            this.registerClick();
                            changeMenu('REGISTER');
                          }}
                        >
                          Inscríbete
                        </Link>
                      </span>
                    </li>
                  </ul>
                ) : (
                  ''
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default _menu;
