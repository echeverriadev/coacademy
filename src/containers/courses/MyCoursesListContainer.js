import { connect } from 'react-redux'
import MyCoursesList from '../../components/landing/pages/MyCoursesList'
import * as mainActions from '../../actions/main'
import * as coursesActions from '../../actions/courses'

const MyCoursesListStateToProps = state => {
  return {
    myCourses: state.user.userData.myCourses,
    isFetching: state.courses.isFetching
  }
}

const MyCoursesListDispatchToProps = (dispatch) => {
  dispatch(mainActions.changeMenu('MY_COURSES'))
  dispatch(mainActions.getCoursesByUser());
	return {
		onSeeCourseDetails: (course) => {
      dispatch(coursesActions.setCourse(course))
    }
	}
}


const MyCoursesListContainer = connect(
  MyCoursesListStateToProps,
  MyCoursesListDispatchToProps
)(MyCoursesList)

export default MyCoursesListContainer