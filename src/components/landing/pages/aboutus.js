import React from 'react';
import { Link } from 'react-router-dom';

declare var $: any;

class About extends React.Component {
  UNSAFE_componentWillMount() {
    var body = $('body');
    body.removeClass('sidebar-gone active');
    body.addClass('sidebar-gone');

    this.props.changeMenu('ABOUT');
  }

  registerClick() {
    window.setTimeout(function () {
      var register = $('#profile-tab');

      register.click();
    }, 0);
  }

  render() {
    const { changeMenu } = this.props;

    return (
      <div>
        <section className='sptb'>
          <div className='container'>
            <div
              className='row justify-content-around'
              style={{ marginTop: 25 }}
            >
              <div className='col-lg-5'>
                <h2>¿Quiénes somos?</h2>

                <p className='leading-normal text-muted'>
                  Somos un equipo multidisciplinario que entrega soluciones de
                  desarrollo profesional, nuestros valores diferenciadores están
                  enfocados en ser un socio estratégico de nuestros clientes
                  entregando un servicio integral y de alta calidad, por lo que
                  nuestra vocación nos ha llevado a desarrollar productos
                  innovativos, orientadas a las nuevas tecnologías y a la
                  Gestión de Talentos.
                </p>
              </div>
              <div className='col-lg-5'>
                <h2>¿Qué es Coacademy?</h2>
                <p className='leading-normal text-muted'>
                  Es la solución ideal para que los distintos proveedores de
                  formación conecten con profesionales del mercado a través de
                  campañas efectivas de comunicación y marketplace,
                  permitiéndoles prospectar clientes afines a sus ofertas de
                  formación y contar con ventas online que facilite el acceso de
                  pago a los alumnos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className='cover-image about-widget sptb bg-background-color'
            data-image-src='../assets/images/banners/banner4.jpg'
          >
            <div className='content-text mb-0'>
              <div className='container'>
                <div className='row text-white justify-content-center align-items-center '>
                  <Link
                    to='/login'
                    onClick={() => {
                      this.registerClick();
                      changeMenu('REGISTER');
                    }}
                    className='btn btn-lg btn-primary'
                  >
                    Registrate ahora!
                  </Link>
                  <h4
                    className='mb-2 font-weight-400'
                    style={{ marginLeft: 5 }}
                  >
                    Actualiza tus habilidades profesionales con nuestro
                    equipo...
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='sptb bg-white'>
          <div className='items-blog-tab text-center'>
            <div className='section-title d-flex flex-column align-items-center'>
              <h2>Nuestros servicios</h2>
              <span className='sectiontitle-design'>
                <span className='icons'></span>
              </span>
              <p style={{ width: '60%' }} text-center>
                Coacademy es la primera plataforma que conecta experiencias de
                aprendizaje con profesionales, a través de nuestra plataforma
                colaboral.com, que cuenta con más de 120 mil usuarios
              </p>
              <div
                className='items-blog-tab-heading row'
                style={{ marginTop: 35 }}
              >
                <div className='col-12'>
                  <ul className='nav items-blog-tab-menu'>
                    <li className=''>
                      <a
                        href='#tab-1'
                        className='active show'
                        data-toggle='tab'
                      >
                        Alumnos
                      </a>
                    </li>
                    <li>
                      <a href='#tab-2' data-toggle='tab' className=''>
                        Proveedores de formación
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />

            <div className='container tab-content'>
              <div className='tab-pane active' id='tab-1'>
                <div className='row'>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    <div class='card'>
                      <div class='card-body'>
                        <div class='item-box text-center'>
                          <div class=' text-center '>
                            <i class='fa fa-search'></i>
                          </div>
                          <div class='item-box-wrap'>
                            <h5 class='mb-2'>Busca</h5>
                            <p class='text-muted mb-0'>
                              Busca entre nuestros cursos la mejor formación
                              para tu perfil profesional.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    <div class='card'>
                      <div class='card-body'>
                        <div class='item-box text-center'>
                          <div class=' text-center  '>
                            <i class='fa fa-compress'></i>
                          </div>
                          <div class='item-box-wrap'>
                            <h5 class='mb-2'>Compara</h5>
                            <p class='text-muted mb-0'>
                              Tienes la oportunidad de poder ver y comparar con
                              nuestra variedad de cursos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    <div class='card'>
                      <div class='card-body'>
                        <div class='item-box text-center'>
                          <div class=' text-center'>
                            <i class='fa fa-shopping-cart'></i>
                          </div>
                          <div class='item-box-wrap'>
                            <h5 class='mb-2'>Accede a ofertas </h5>
                            <p class='text-muted mb-0'>
                              Continuamente estamos reinventando nuestros cursos
                              y agregando ofertas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    <div class='card'>
                      <div class='card-body'>
                        <div class='item-box text-center'>
                          <div class=' text-center  '>
                            <i class='fa fa-credit-card'></i>
                          </div>
                          <div class='item-box-wrap'>
                            <h5 class='mb-2'>Facilidad de pago</h5>
                            <p class='text-muted mb-0'>
                              Compra nuestros cursos a través de webpay,
                              contáctaos para mayor información.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='tab-pane' id='tab-2'>
                <div className='row'>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    <div class='card'>
                      <div class='card-body'>
                        <div class='item-box text-center'>
                          <div class=' text-center  '>
                            <i class='fa fa-users'></i>
                          </div>
                          <div class='item-box-wrap'>
                            <h5 class='mb-2'>Regístrate</h5>
                            <p class='text-muted mb-0'>
                              Sé parte de nuestro team de formadores.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    <div class='card'>
                      <div class='card-body'>
                        <div class='item-box text-center'>
                          <div class=' text-center  '>
                            <i class='fa fa-address-book'></i>
                          </div>
                          <div class='item-box-wrap'>
                            <h5 class='mb-2'>Contáctanos</h5>
                            <p class='text-muted mb-0'>
                              Contáctanos y te ofreceremos el plan mas adecuado
                              para tí.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    <div class='card'>
                      <div class='card-body'>
                        <div class='item-box text-center'>
                          <div class=' text-center  '>
                            <i class='fa fa-compress'></i>
                          </div>
                          <div class='item-box-wrap'>
                            <h5 class='mb-2'>Postea una oferta</h5>
                            <p class='text-muted mb-0'>
                              Crea un curso atractivo y postea con nosotros tu
                              oferta académica.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-12'>
                    <div class='card'>
                      <div class='card-body'>
                        <div class='item-box text-center'>
                          <div class=' text-center  '>
                            <i class='fa fa-compress'></i>
                          </div>
                          <div class='item-box-wrap'>
                            <h5 class='mb-2'>Rentabiliza</h5>
                            <p class='text-muted mb-0'>
                              Gana dinero a través de cocacademy
                            </p>
                          </div>
                        </div>
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

export default About;
