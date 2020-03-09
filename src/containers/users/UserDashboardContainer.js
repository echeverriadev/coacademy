import { connect } from 'react-redux'
import UserDashboard from '../../components/landing/user-dashboard'
import * as mainActions from '../../actions/main'
import * as categoriesActions from '../../actions/categories'
import * as coursesActions from '../../actions/courses'
import * as modalitiesActions from '../../actions/modalities'

const mapStateUserDashboardToProps = state => {
  return {
  	user: state.user.userData,
    courses: state.courses.courses,
    modalities: state.modalities.modalities,
    categories: state.categories.categories,
    kindOfMenu: state.user.kindOfMenu,
    coursesByCategories: state.courses.coursesByCategories,
    filter_category: state.courses.filters.category_id,
    filter_modality: state.courses.filters.modality_id,
    filter_name: state.courses.filters.name
  }
}

const mapDispatchUserDashboardToProps = (dispatch, ownProps) => {
  dispatch(coursesActions.filterCourses())
  dispatch(coursesActions.getCoursesByCategories())
  dispatch(categoriesActions.fetchCategories())
  dispatch(modalitiesActions.fetchModalities())
  return {
  	onLogout: () => {
  		dispatch(mainActions.logout())
  	},
    changeMenu: (kindOfMenu) => {
      dispatch(mainActions.changeMenu(kindOfMenu))
    },
    onSeeCourseDetails: (course) => {
      dispatch(coursesActions.setCourse(course))
    },
    filterCourses: () => {
      dispatch(coursesActions.filterCourses());
    },
    changeCourseFilter: (e) => {
      dispatch(coursesActions.handleCourseFilterChange(e))
    },
    removeFilter: () => {
      dispatch(coursesActions.removeCourseFilters())
    }
  }
}


const UserDashboardContainer = connect(
  mapStateUserDashboardToProps,
  mapDispatchUserDashboardToProps
)(UserDashboard)

export default UserDashboardContainer