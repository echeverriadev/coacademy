import { connect } from 'react-redux'
import UnblockCourse from '../../components/landing/user-dashboard/UnblockCourse'
import * as mainActions from '../../actions/main'
import * as coursesActions from '../../actions/courses'

const UnblockCourseStateToProps = state => {
  return {
    isFetching: state.courses.isFetchingRequest
  }
}

const UnblockCourseDispatchToProps = (dispatch, ownProps) => {
    dispatch(mainActions.changeMenu('NOT_FOUND'))
    const token = ownProps.location.search.split('?unblock_course=')[1]
    dispatch(coursesActions.unBlockCourse(token))
	return {
		changeMenu: (menu) => {
            mainActions.changeMenu(menu)
        }
	}
}


const UnblockCourseContainer = connect(
  UnblockCourseStateToProps,
  UnblockCourseDispatchToProps
)(UnblockCourse)

export default UnblockCourseContainer