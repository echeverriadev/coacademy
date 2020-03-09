import { connect } from 'react-redux'
import Landing from '../components/landing'
import * as coursesActions from '../actions/courses'
import * as modalitiesActions from '../actions/modalities'
import * as categoriesActions from '../actions/categories'
import * as usersActions from '../actions/users'
import * as mainActions from '../actions/main'

const mapStateLandingToProps = state => {
  return {
    courses: state.courses.courses,
    categories: state.categories.categories,
    coursesByCategories: state.courses.coursesByCategories,
    providers: state.users.providers,
    students: state.users.students
  }
}

const mapDispatchLandingToProps = (dispatch) => {
  dispatch(coursesActions.getCoursesActives())
  dispatch(coursesActions.getCoursesByCategories())
  dispatch(categoriesActions.fetchCategoriesActives())
  dispatch(modalitiesActions.fetchModalitiesActives())	
  dispatch(usersActions.getProviders())
  dispatch(usersActions.getStudents())
  return {
    onSeeCourseDetails: (course) => {
      dispatch(coursesActions.setCourse(course))
    },
    changeMenu: (kindOfMenu) => {
      dispatch(mainActions.changeMenu(kindOfMenu))
    },
    thereAreCourseImportant: (courses) => {
      var result = [];

      if(courses && courses.length > 0){
        courses.map(course => {
          if(parseInt(course.is_important, 10) === 1){
            result.push(course)
          }
        })
      }
      console.log(result)
      return result;
    }
  }
}


const LandingContainer = connect(
  mapStateLandingToProps,
  mapDispatchLandingToProps
)(Landing)

export default LandingContainer;