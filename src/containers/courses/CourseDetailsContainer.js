import { connect } from 'react-redux'
import CourseDetails from '../../components/courses/CourseDetails'
import * as coursesActions from '../../actions/courses'
import * as mainActions from '../../actions/main'
import message from '../../components/utils/message'

declare var $:any;

const mapStateCourseDetailsToProps = state => {
  return {
    user: state.user.userData,
    userLogged: state.user.userLogged,
    course: state.courses.course,
    courses: state.courses.courses,
    isFetching: state.courses.isFetching,
    userCourses: state.user.userData.myCourses
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
      onNotifyLogin: () => {
        message('Debe iniciar sesión para realizar esta acción', 'error')
      },
      onSendBuyRequest: (user, course) => {
        dispatch(coursesActions.sendBuyRequest(user, course));
      },
      userHasNoInscribe: (userCourses, course) => {
        var result = false;
        userCourses.map((userCourse) => {
          if(parseInt(userCourse.id, 10) === parseInt(course.id, 10))
            result = true
        })

        return result;
      }
	  }

  	default:
      return {
        onDownLoadFile: (file_name) => {
          dispatch(coursesActions.downloadPdf(file_name))
        },
        onSetMenu: () => {
          dispatch(mainActions.changeMenu('MY_COURSES'))
        },
        onNotifyLogin: () => {
          message('Debe iniciar sesión para realizar esta acción', 'error')
        },
        onSendBuyRequest: (user, course) => {
          dispatch(coursesActions.sendBuyRequest(user, course));
        },
        userHasNoInscribe: (userCourses, course) => {
          var result = false;
          userCourses.map((userCourse) => {
            if(parseInt(userCourse.id, 10) === parseInt(course.id, 10))
              result = true
          })
  
          return result;
        }
      }  	
  }

}


const CourseDetailsContainer = connect(
  mapStateCourseDetailsToProps,
  mapDispatchCourseDetailsToProps
)(CourseDetails)

export default CourseDetailsContainer