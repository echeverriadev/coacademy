import { connect } from 'react-redux'
import HomePage from '../layouts/HomePage'
import * as mainActions from '../actions/main'
import * as categoriesActions from '../actions/categories'
import * as coursesActions from '../actions/courses'

const mapStateHomePageToProps = state => {
  return {
  	kindOfMenu: state.user.kindOfMenu,
  	categories: state.categories.categories,
    filter_category: state.courses.filters.category_id,
    filter_modality: state.courses.filters.modality_id,
    filter_name: state.courses.filters.name
  }
}

const mapDispatchHomePageToProps = (dispatch) => {
  dispatch(mainActions.changeMenu('INDEX'))
	dispatch(categoriesActions.fetchActiveCategories());
  return {
  	changeMenu: (kindOfMenu) => {
  		dispatch(mainActions.changeMenu(kindOfMenu))
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


const HomePageContainer = connect(
  mapStateHomePageToProps,
  mapDispatchHomePageToProps
)(HomePage)

export default HomePageContainer