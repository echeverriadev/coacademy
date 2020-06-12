import React, { Component } from "react";
import { Switch, Redirect, Router, Route, Link } from "react-router-dom";
import "../styles.css";
import history from "../../../history";

import UserDashboardPage from "./UserDashboardPage";
import About from "../pages/aboutus";
import Contact from "../pages/contact";
import PageNotFound from "../../utils/notfound";

import Header from "../../../components/landing/partials/headerLanding";
import Footer from "../../../components/landing/partials/_footer";

import CoursesListContainer from "../../../containers/courses/CoursesListContainer";
import CourseDetailsContainer from "../../../containers/courses/CourseDetailsContainer";
import MyCoursesListContainer from "../../../containers/courses/MyCoursesListContainer";
import UserProfileContainer from "../../../containers/users/UserProfileContainer";
import UnblockCourseContainer from "../../../containers/courses/UnblockCoursesContainer";

import WebPayRedirect from '../../../webPayRedirect';

class UserDashboard extends Component {
  UNSAFE_componentWillMount() {
    this.props.changeMenu("INDEX");
  }

  render() {
    const {
      user,
      onLogout,
      courses,
      modalities,
      changeMenu,
      kindOfMenu,
      categories,
      userCourses,
      coursesByCategories,
      onSeeCourseDetails,
      filter_category,
      filter_modality,
      filter_name,
      filterCourses,
      changeCourseFilter,
      removeFilter,
      userLogged,
      userHasNoInscribe,
      onSendBuyRequest,
      onNotifyLogin,
      webPayParams
    } = this.props;

    return (
      <Router history={history}>
        <Header
          user={user}
          onLogout={onLogout}
          changeMenu={changeMenu}
          kindOfMenu={kindOfMenu}
          categories={categories}
          filter_category={filter_category}
          filter_modality={filter_modality}
          filter_name={filter_name}
          filterCoursesHeader={filterCourses}
          changeCourseFilterHeader={changeCourseFilter}
          removeFilterHeader={removeFilter}
        />

        <Switch>
          <Redirect from="/login" to="/" />
          <Route
            exact
            path="/"
            component={() => (
              <UserDashboardPage
                onNotifyLogin={onNotifyLogin}
                onSendBuyRequest={onSendBuyRequest}
                user={user}
                userHasNoInscribe={userHasNoInscribe}
                userCourses={userCourses}
                userLogged={userLogged}
                onLogout={onLogout}
                courses={courses}
                modalities={modalities}
                coursesByCategories={coursesByCategories}
                onSeeCourseDetails={onSeeCourseDetails}
                changeMenu={changeMenu}
              />
            )}
          />
          <Route
            exact
            path="/about"
            component={() => (
              <About user={user} changeMenu={changeMenu} onLogout={onLogout} />
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => (
              <Contact
                user={user}
                changeMenu={changeMenu}
                onLogout={onLogout}
              />
            )}
          />
          <Route
            exact
            path="/courseDetails"
            component={CourseDetailsContainer}
          ></Route>
          <Route
            exact
            path="/courseDetails/:id"
            component={CourseDetailsContainer}
          ></Route>
          <Route exact path="/courses" component={CoursesListContainer}></Route>
          <Route
            exact
            path="/myCourseList"
            component={MyCoursesListContainer}
          ></Route>
          <Route
            exact
            path="/myProfile"
            component={UserProfileContainer}
          ></Route>
          <Route
            exact
            path="/courses/unblock"
            component={UnblockCourseContainer}
          />

          <Route path='/web-pay-redirect' component={() => <WebPayRedirect webPayParams={webPayParams} />}/>

          <Route component={() => <PageNotFound changeMenu={changeMenu} />} />
        </Switch>

        <Footer />

        <Link to="#top" id="back-to-top">
          <i className="fa fa-long-arrow-up"></i>
        </Link>
      </Router>
    );
  }
}

export default UserDashboard;
