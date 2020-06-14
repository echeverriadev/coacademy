import React from 'react';
import history from '../history';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import UserProfileEditable from './users/UserProfileEditable';
import CoursesList from './courses/CoursesList';

import './adminDashboard.css';

class AdminDashboard extends React.Component {
  render() {
    const { onLogout } = this.props;
    return (
      <Router history={history}>
        <section className='sptb banner-1 cover-image  bg-background2 flipthis-highlight'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-3 col-lg-12 col-md-12'>
                <div className='card'>
                  <div className='card-header justify-center'>
                    <img
                      src={require('../image/logo-black_beta.png')}
                      className='header-brand-img'
                      alt=' logo'
                    />
                  </div>
                  <div className='card-body text-center bg-admin-custom item-user border-bottom'>
                    <div className='profile-pic'>
                      <div className='profile-pic-img'>
                        <img
                          src={require('../image/25.jpg')}
                          className='brround'
                          alt='user'
                        />
                      </div>
                      <a href='userprofile.html' className='text-dark'>
                        <h4 className='mt-3 mb-0 font-weight-semibold'>
                          Jacob Smith
                        </h4>
                      </a>
                    </div>
                  </div>
                  <div className='item1-links  mb-0'>
                    <Link
                      to='/userProfile'
                      className='active d-flex border-bottom'
                    >
                      <span className='icon1 mr-3'>
                        <i className='icon icon-user'></i>
                      </span>{' '}
                      Perfil de usuario
                    </Link>
                    <Link to='/courses' className=' d-flex  border-bottom'>
                      <span className='icon1 mr-3'>
                        <i className='icon icon-list'></i>
                      </span>{' '}
                      Lista de cursos
                    </Link>
                    <a href='myfavorite.html' className=' d-flex border-bottom'>
                      <span className='icon1 mr-3'>
                        <i className='icon icon-heart'></i>
                      </span>{' '}
                      Cursos mas destacados
                    </a>
                    <a href='manged.html' className='d-flex  border-bottom'>
                      <span className='icon1 mr-3'>
                        <i className='icon icon-folder-alt'></i>
                      </span>{' '}
                      Managed Courses
                    </a>
                    <a href='payments.html' className=' d-flex  border-bottom'>
                      <span className='icon1 mr-3'>
                        <i className='icon icon-credit-card'></i>
                      </span>{' '}
                      Pagos
                    </a>
                    <a href='orders.html' className='d-flex  border-bottom'>
                      <span className='icon1 mr-3'>
                        <i className='icon icon-basket'></i>
                      </span>{' '}
                      Ordenes de cursos
                    </a>
                    <a href='tips.html' className='d-flex border-bottom'>
                      <span className='icon1 mr-3'>
                        <i className='icon icon-game-controller'></i>
                      </span>{' '}
                      Safety Tips
                    </a>
                    <a href='/' className='d-flex' onClick={() => onLogout()}>
                      <span className='icon1 mr-3'>
                        <i className='icon icon-power'></i>
                      </span>{' '}
                      Cerrar sesión
                    </a>
                  </div>
                </div>
                <div className='card my-select'>
                  <div className='card-header'>
                    <h3 className='card-title'>Search classes</h3>
                  </div>
                  <div className='card-body'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='text'
                        placeholder='What are you looking for?'
                      />
                    </div>
                    <div className='form-group'>
                      <select
                        name='country'
                        id='select-countries'
                        className='form-control custom-select select2-show-search'
                      >
                        <option value='1'>All Categories</option>
                        <option value='2'>Web Security</option>
                        <option value='3'>Offline</option>
                        <option value='4'>Business</option>
                        <option value='5'>Online</option>
                        <option value='6'>Data Science</option>
                        <option value='7'>Driving</option>
                        <option value='8'>Education</option>
                        <option value='9'>Electronics</option>
                        <option value='10'>Pets &amp; Offline</option>
                        <option value='11'>Computer</option>
                        <option value='12'>Mobile</option>
                        <option value='13'>Events</option>
                        <option value='14'>Python</option>
                        <option value='15'>Security Hacking</option>
                      </select>
                    </div>
                    <div className=''>
                      <a href='/' className='btn  btn-primary'>
                        Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-9 col-lg-12 col-md-12'>
                <Redirect from='/login' to='/' />
                <Switch>
                  <Route
                    exact
                    path='/userProfile'
                    component={UserProfileEditable}
                  ></Route>
                  <Route exact path='/courses' component={CoursesList}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default AdminDashboard;
