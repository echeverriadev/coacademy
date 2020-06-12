import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './_menu';
import '../styles.css';

class header extends React.Component {
  render() {
    const {
      changeMenu,
      kindOfMenu,
      user,
      onLogout,
      categories,
      filter_category,
      filter_name,
      filterCoursesHeader,
      changeCourseFilterHeader,
    } = this.props;
    return (
      <div>
        <div
          className={
            kindOfMenu && kindOfMenu === 'INDEX'
              ? 'banner-1 cover-image  bg-background2 background-photo'
              : 'cover-image bg-background3 background-photo'
          }
          data-image-src={
            kindOfMenu && kindOfMenu === 'INDEX'
              ? '../assets/images/banners/elearning.jpg'
              : '../assets/images/banners/banner2.jpg'
          }
        >
          <Menu
            changeMenu={changeMenu}
            kindOfMenu={kindOfMenu}
            user={user}
            onLogout={onLogout}
          />

          {kindOfMenu && kindOfMenu === 'ABOUT' ? (
            <div>
              <section>
                <div className='sptb-2 bannerimg'>
                  <div className='header-text mb-0'>
                    <div className='container'>
                      <div className='text-center text-white '>
                        <h1 className=''>Coacademy</h1>
                        <ol className='breadcrumb text-center'>
                          <li className='breadcrumb-item'>
                            <a href='/'>Inicio</a>
                          </li>
                          <li
                            className='breadcrumb-item active text-white'
                            aria-current='page'
                          >
                            Sobre nosotros
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : kindOfMenu && kindOfMenu === 'CONTACT' ? (
            <section>
              <div className='sptb-2 bannerimg'>
                <div className='header-text mb-0'>
                  <div className='container'>
                    <div className='text-center text-white '>
                      <h1 className=''>Contáctanos</h1>
                      <ol className='breadcrumb text-center'>
                        <li className='breadcrumb-item'>
                          <a href='/'>Inicio</a>
                        </li>
                        <li
                          className='breadcrumb-item active text-white'
                          aria-current='page'
                        >
                          Contacto
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : kindOfMenu && kindOfMenu === 'COURSE_LIST' ? (
            <div>
              <div className='sptb-1'>
                <div className='header-text1 mb-0'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-xl-9 col-lg-12 col-md-12 d-block mx-auto'>
                        <div className='text-center text-white text-property'>
                          <h1 className=''>
                            <span className='font-weight-bold'>2000+</span>{' '}
                            cursos disponibles aquí!
                          </h1>
                        </div>
                        <div className='search-background bg-transparent'>
                          <div className='form row no-gutters '>
                            <div className='form-group col-xl-7 col-lg-7 col-md-12 mb-0 bg-white'>
                              <input
                                className='form-control input-lg br-tr-md-0 br-br-md-0'
                                id='text4'
                                type='text'
                                name='name'
                                value={filter_name}
                                onChange={changeCourseFilterHeader}
                                placeholder='Buscar curso.....'
                              />
                            </div>
                            <div className='form-group col-xl-3 col-lg-3 col-md-12  mb-0 bg-white'>
                              <select
                                name='category_id'
                                onChange={changeCourseFilterHeader}
                                value={filter_category}
                                className='form-control  border-bottom-0'
                                data-placeholder='Select Category'
                              >
                                <option key={null} value={'-1'}>
                                  Todas las categorías
                                </option>
                                {categories &&
                                  categories.length > 0 &&
                                  categories.map((category) => (
                                    <option
                                      key={category.id}
                                      value={category.id}
                                    >
                                      {category.name}
                                    </option>
                                  ))}
                              </select>
                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-12 mb-0'>
                              <button
                                className='btn btn-lg btn-block btn-primary br-tl-md-0 br-bl-md-0'
                                onClick={() => filterCoursesHeader()}
                              >
                                Buscar curso
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : kindOfMenu && kindOfMenu === 'INDEX' ? (
            <section>
              <div className='sptb-2 sptb-tab'>
                <div className='header-text mb-0'>
                  <div className='container'>
                    <div className='text-center text-white mb-7'>
                      <h1 className='mb-1'>
                        Encuentra los Mejores Programas de Formación y
                      </h1>
                      <h1>Construye Tu Futuro</h1>
                      <p>¿Qué quieres aprender? ... Potencia tu carrera</p>
                    </div>
                    <div className='row'>
                      <div className='col-xl-10 col-lg-12 col-md-12 d-block mx-auto'>
                        <div className='search-background bg-transparent'>
                          <div className='form row no-gutters '>
                            <div className='form-group  col-xl-7 col-lg-7 col-md-12 mb-0 bg-white'>
                              <input
                                className='form-control input-lg br-tr-md-0 br-br-md-0'
                                id='text4'
                                type='text'
                                name='name'
                                value={filter_name || ''}
                                onChange={changeCourseFilterHeader}
                                placeholder='Buscar curso.....'
                              />
                            </div>
                            <div className='form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 bg-white'>
                              <select
                                name='category_id'
                                onChange={changeCourseFilterHeader}
                                value={filter_category || ''}
                                className='form-control select2-show-search  border-bottom-0'
                                data-placeholder='Select Category'
                              >
                                <optgroup label='Categorías'>
                                  <option key={-1} value={'-1'}>
                                    Todas las categorías
                                  </option>
                                  {categories &&
                                    categories.length > 0 &&
                                    categories.map((category) => (
                                      <option
                                        key={category.id}
                                        value={category.id}
                                      >
                                        {category.name}
                                      </option>
                                    ))}
                                </optgroup>
                              </select>
                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-12 mb-0'>
                              <Link
                                to='/courses'
                                className='btn btn-lg btn-block btn-primary br-tl-md-0 br-bl-md-0'
                                onClick={() => filterCoursesHeader()}
                              >
                                Buscar curso
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : kindOfMenu && kindOfMenu === 'MY_COURSES' ? (
            <div>
              <section>
                <div className='sptb-2 bannerimg'>
                  <div className='header-text mb-0'>
                    <div className='container'>
                      <div className='text-center text-white '>
                        <h1 className=''>Mis cursos</h1>
                        <ol className='breadcrumb text-center'>
                          <li className='breadcrumb-item'>
                            <a href='/'>Inicio</a>
                          </li>
                          <li
                            className='breadcrumb-item active text-white'
                            aria-current='page'
                          >
                            Mis cursos
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : kindOfMenu && kindOfMenu === 'FORGOT_PASSWORD' ? (
            <div>
              <section>
                <div className='bannerimg'>
                  <div className='header-text mb-0'>
                    <div className='container'>
                      <div className='text-center text-white '>
                        <h1 className=''>
                          Ingresa tu email y te enviaremos una nueva contraseña.
                        </h1>
                        <ol className='breadcrumb text-center'>
                          <li className='breadcrumb-item'>
                            <Link to='/'>Inicio</Link>
                          </li>
                          <li
                            className='breadcrumb-item active text-white'
                            aria-current='page'
                          >
                            Recupera tu contraseña
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            kindOfMenu &&
            kindOfMenu === 'MY_PROFILE' && (
              <div>
                <section>
                  <div className='bannerimg'>
                    <div className='header-text mb-0'>
                      <div className='container'>
                        <div className='text-center text-white '>
                          <h1 className=''>Perfil del Usuario</h1>
                          <ol className='breadcrumb text-center'>
                            <li className='breadcrumb-item'>
                              <Link to='/'>Inicio</Link>
                            </li>
                            <li
                              className='breadcrumb-item active text-white'
                              aria-current='page'
                            >
                              Perfil del Usuario
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default header;
