import React from 'react'
import history from "../../history"
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import UserProfileEditableContainer from '../../containers/users/UserEditProfileContainer'
import CoursesListModuleContainer from '../../containers/courses/CourseListModuleContainer'

import RoleListContainer from "../../containers/roles/RoleListContainer";
import CategoriesListContainer from "../../containers/categories/CategoriesListContainer";
import ModalitiesListContainer from "../../containers/modalities/ModalitiesListContainer";
import UsersListContainer from "../../containers/users/UsersListModuleContainer";
import './style.css'

class AdminDashboard extends React.Component {

  
	render(){
		const { user, onLogout, onGoBackToCoursesList, onGoBackToUsersList} = this.props;
		
		return (
      <Router history={history}>
        <section className="sptb banner-1 cover-image  bg-background2 flipthis-highlight">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header justify-center">
                    <img
                      src={require("../../image/logo-black_beta.png")}
                      className="header-brand-img"
                      alt=" logo"
                    />
                  </div>
                  <div className="card-body text-center bg-admin-custom item-user border-bottom">
                    <div className="profile-pic">
                      <div className="profile-pic-img">
                        <img
                          src={process.env.REACT_APP_NODE_URL + '/uploads/users/images/' + user.user_profile.picture_url }
                          className="brround"
                          alt="user"
                          style={{height: 80}}
                        />
                      </div>
                      <Link to="/" className="text-dark">
                        <h4 className="mt-3 mb-0 font-weight-semibold">
                          {
                            (user && user.user_profile && user.user_profile.name)?
                               user.user_profile.name + user.user_profile.lastname
                            :
                              user.email
                          }
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div className="item1-links  mb-0">
                    <Link to="/" className="active d-flex border-bottom">
                      <span className="icon1 mr-3">
                        <i className="fa fa-user"></i>
                      </span>{" "}
                      Perfil de usuario
                    </Link>
                    <Link to="/courses" className=" d-flex  border-bottom" onClick={() => onGoBackToCoursesList()}>
                      <span className="icon1 mr-3">
                        <i className="fa fa-book"></i>
                      </span>{" "}
                      Cursos
                    </Link>
                    <Link to="/categories" className="d-flex border-bottom">
                      <span className="icon1 mr-3">
                        <i className="fa fa-flag"></i>
                      </span>{" "}
                      Categorias
                    </Link>
                    <Link to="/modalities" className="d-flex border-bottom">
                      <span className="icon1 mr-3">
                        <i className="fa fa-clock-o"></i>
                      </span>{" "}
                      Modalidades
                    </Link>
                    <Link to="/users" className="d-flex border-bottom" onClick={() => onGoBackToUsersList()}>
                      <span className="icon1 mr-3">
                        <i className="fa fa-address-book"></i>
                      </span>{" "}
                      Usuarios
                    </Link>
                    <Link to="/roles" className="d-flex border-bottom">
                      <span className="icon1 mr-3">
                        <i className="fa fa-key"></i>
                      </span>{" "}
                      Roles
                    </Link>
                    <Link to="/" onClick={() => onLogout()} className="d-flex">
                      <span className="icon1 mr-3">
                        <i className="icon icon-power"></i>
                      </span>{" "}
                      Cerrar sesión
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-12 col-md-12">
                <Switch>
                  <Redirect from="/login" to="/" />
                  <Route exact path="/" component={UserProfileEditableContainer}/>
                  <Route exact path="/courses" component={CoursesListModuleContainer}/>
                  <Route exact path="/roles" component={RoleListContainer}/>
                  <Route exact path="/categories" component={CategoriesListContainer}/>
                  <Route exact path="/modalities" component={ModalitiesListContainer}/>
                  <Route exact path="/users" component={UsersListContainer}/>
                </Switch>
              </div>
            </div>
          </div>
        </section>
        <Link to="#top" id="back-to-top">
          <i className="fa fa-long-arrow-up"></i>
        </Link>
      </Router>
    );
	}
}

export default AdminDashboard;