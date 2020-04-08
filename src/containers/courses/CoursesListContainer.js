import { connect } from "react-redux";
import CoursesList from "../../components/landing/pages/coursesList";
import * as mainActions from "../../actions/main";
import * as coursesActions from "../../actions/courses";
import * as modalitiesActions from "../../actions/modalities";

declare var $: any;

const CoursesListStateToProps = (state) => {
  return {
    courses: state.courses.courses,
    isFetching: state.courses.isFetching,
    categories: state.categories.categories,
    coursesByCategories: state.courses.coursesByCategories,
    modalities: state.modalities.modalities,
    filter_category: state.courses.filters.category_id,
    filter_modality: state.courses.filters.modality_id,
    filter_name: state.courses.filters.name,
  };
};

const CoursesListDispatchToProps = (dispatch) => {
  dispatch(mainActions.changeMenu("COURSE_LIST"));
  dispatch(coursesActions.filterCourses());
  dispatch(coursesActions.getCoursesByCategories());
  dispatch(modalitiesActions.fetchModalitiesActives());
  return {
    onSeeCourseDetails: (course) => {
      dispatch(coursesActions.setCourse(course));
    },
    filterCourses: () => {
      dispatch(coursesActions.filterCourses());
    },
    changeCourseFilter: (e) => {
      dispatch(coursesActions.handleCourseFilterChange(e));
    },
    removeFilter: () => {
      dispatch(coursesActions.removeCourseFilters());
    },
  };
};

const CoursesListContainer = connect(
  CoursesListStateToProps,
  CoursesListDispatchToProps
)(CoursesList);

export default CoursesListContainer;
