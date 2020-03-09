import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import * as coursesActions from '../actions/courses'
import * as modalitiesActions from '../actions/modalities'
import * as categoriesActions from '../actions/categories'
import * as usersActions from '../actions/users'


const mapStateMainLayoutToProps = state => {
  return {
  	logged: state.user.userLogged,
  	user: state.user.userData
  }
}

const mapDispatchMainLayoutToProps = (dispatch, ownProps) => {
  dispatch(coursesActions.getCoursesActives())
  dispatch(coursesActions.getCoursesByCategories())
  dispatch(categoriesActions.fetchCategoriesActives())
  dispatch(modalitiesActions.fetchModalitiesActives())	
  dispatch(usersActions.getProviders())
  dispatch(usersActions.getStudents())
  return {
  }
}


const MainLayoutContainer = connect(
  mapStateMainLayoutToProps,
  mapDispatchMainLayoutToProps
)(MainLayout)

export default MainLayoutContainer