import { connect } from 'react-redux'
import CourseDetails from '../../components/courses/CourseDetails'
import * as coursesActions from '../../actions/courses'
import * as mainActions from '../../actions/main'

declare var $:any;

const mapStateCourseDetailsToProps = state => {
  return {
    user: state.user.userData,
    course: state.courses.course,
    courses: state.courses.courses,
    isFetching: state.courses.isFetching
  }
}

const mapDispatchCourseDetailsToProps = (dispatch, ownProps) => {
	console.log(ownProps.match.url)
  
  switch(ownProps.match.url){

  	case '/courseDetails/'+ownProps.match.params.id:
  	dispatch(coursesActions.getCourse(ownProps.match.params.id));
	  return {
      onDownLoadFile: (file_name) => {
        dispatch(coursesActions.downloadPdf(file_name))
      },
      onSetMenu: (menu) => {
        dispatch(mainActions.changeMenu(menu))
      },
	  }

  	default:
		return {
      onDownLoadFile: (file_name) => {
        dispatch(coursesActions.downloadPdf(file_name))
      },
      onSetMenu: () => {
        dispatch(mainActions.changeMenu('MY_COURSES'))
      },
	  }  	
  }

}


const CourseDetailsContainer = connect(
  mapStateCourseDetailsToProps,
  mapDispatchCourseDetailsToProps
)(CourseDetails)

export default CourseDetailsContainer