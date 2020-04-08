import { connect } from "react-redux";
import * as categoriesActions from "../../actions/categories";
import * as modalitiesActions from "../../actions/modalities";
import * as coursesActions from "../../actions/courses";
import * as usersActions from "../../actions/users";
import * as rolesActions from "../../actions/roles";
import CoursesListModule from "../../components/admin/courses/CourseListModule";

const mapStateCoursesListModuleToProps = (state, ownProps) => {
  return {
    isFetching: state.courses.isFetching,
    courses: state.courses.courses,
    course: state.courses.course,
    categories: state.categories.categories,
    modalities: state.modalities.modalities,
    providers: state.users.providers,
    view: state.courses.view,
  };
};

const mapDispatchCoursesListModuleToProps = (dispatch) => {
  dispatch(modalitiesActions.fetchModalities());
  dispatch(categoriesActions.fetchCategories());
  dispatch(usersActions.getProviders());
  dispatch(rolesActions.fetchRoles());
  dispatch(coursesActions.getCourses());

  return {
    onSetCourse: (course) => {
      dispatch(coursesActions.setCourse(course));
    },
    onCancelDeleteCourse: (course) => {
      // dispatch(coursesActions.cancelDeleteCourse(course))
    },
    onDeleteCourse: (course) => {
      dispatch(coursesActions.deleteCourse(course));
    },
    onViewDetails: (course) => {
      dispatch(coursesActions.viewCourseDetails(course));
    },
    onEditCourse: (course) => {
      dispatch(coursesActions.editCourseDetails(course));
    },
    onCancelEditCourse: () => {
      dispatch(coursesActions.cancelEditCourse());
    },
    onGoBackToCoursesList: () => {
      dispatch(coursesActions.goBackToCoursesList());
    },
    onUpdateCourse: (course) => {
      dispatch(coursesActions.updateCourse(course));
    },
    onHandleEditInputChange: (event) => {
      dispatch(coursesActions.handleEditInputChange(event));
    },
    onHandleNewInputChange: (event) => {
      dispatch(coursesActions.handleNewInputChange(event));
    },
    onSaveCourse: (course) => {
      dispatch(coursesActions.saveCourse(course));
    },
    onCancelSaveCourse: () => {
      dispatch(coursesActions.cancelSaveCourse());
    },
    onNewCourse: () => {
      dispatch(coursesActions.newCourse());
    },
    onReactivateCourse: (id) => {
      dispatch(coursesActions.reactivateCourse(id));
    },
    onUploadImageChange: (course, event) => {
      dispatch(coursesActions.uploadCourseImage(course, event));
    },
    markAsPopular: (course) => {
      dispatch(coursesActions.markAsPopular(course));
    },
    dismarkAsPopular: (course) => {
      dispatch(coursesActions.dismarkAsPopular(course));
    },
  };
};

const CoursesListModuleContainer = connect(
  mapStateCoursesListModuleToProps,
  mapDispatchCoursesListModuleToProps
)(CoursesListModule);

export default CoursesListModuleContainer;
