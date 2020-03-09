import React from 'react';
import { Router, Switch, Route, Link } from"react-router-dom";
import history from "../history"
import LandingPageContainer from '../containers/LandingPageContainer'
import About from '../components/landing/pages/aboutus';
import Contact from "../components/landing/pages/contact";
import CoursesListContainer from "../containers/courses/CoursesListContainer";
import CourseDetailsContainer from '../containers/courses/CourseDetailsContainer'
import RecoverPasswordContainer from '../containers/RecoverPasswordContainer'
import '../components/landing/styles.css';

import Header from '../components/landing/partials/headerLanding' 
import Footer from '../components/landing/partials/_footer'

import LoginContainer from '../containers/LoginContainer';

import NotFound from '../components/utils/notfound'

class HomePage extends React.Component {

	render(){
    const {
      kindOfMenu, 
      categories, 
      changeMenu,
      filter_category,
      filter_modality,
      filter_name,
      filterCourses,
      changeCourseFilter,
      removeFilter
    } = this.props;

		return (
      <Router history={history}>
        
        <Header 
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
          <Route exact path="/" component={LandingPageContainer}></Route>
          <Route exact path="/about" component={() => <About changeMenu={changeMenu} />}></Route>
          <Route exact path="/contact" component={() => <Contact changeMenu={changeMenu} />}></Route>
          <Route exact path="/courseDetails" component={CourseDetailsContainer}></Route>
          <Route exact path="/courseDetails/:id" component={CourseDetailsContainer}></Route>
          <Route exact path="/courses" component={CoursesListContainer}></Route>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route exact path='/recoverPassword' component={RecoverPasswordContainer}/>

          <Route component={() => <NotFound changeMenu={changeMenu} />}></Route>
        </Switch>

        <Footer />

        <Link to="#top" id="back-to-top">
          <i className="fa fa-long-arrow-up"></i>
        </Link>
      </Router>
    );
	}
}

export default HomePage;