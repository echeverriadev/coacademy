import React from 'react'
import CoursesList from './CoursesList'
import CoursesView from './CourseView'

const CourseListModule = ({
  isFetching,
  view,
  courses,
  course,
  categories,
  modalities,
  courseLogged,
  onSetCourse,
  onCancelDeleteCourse,
  onDeleteCourse,
  onViewDetails,
  onEditCourse,
  onCancelEditCourse,
  onGoBackToCoursesList,
  onUpdateCourse,
  onHandleEditInputChange,
  onHandleNewInputChange,
  onSaveCourse,
  onCancelSaveCourse,
  onNewCourse,
  onUploadImageChange,
  onReactivateCourse,
  markAsPopular,
  dismarkAsPopular,
  providers
}) => (
  <div>
    {view |
    (view === "newCourse") |
    (view === "courseDetails") |
    (view === "updateCourse") ? (
      <CoursesView
        course={course}
        categories={categories}
        modalities={modalities}
        view={view}
        isFetching={isFetching}
        onCancelEditCourse={onCancelEditCourse}
        onGoBackToCoursesList={onGoBackToCoursesList}
        onEditCourseClick={onEditCourse}
        onUpdateCourse={onUpdateCourse}
        onHandleEditInputChange={onHandleEditInputChange}
        onHandleNewInputChange={onHandleNewInputChange}
        onSaveCourseClick={onSaveCourse}
        onCancelSaveCourseClick={onCancelSaveCourse}
        onCancelDeleteCourse={onCancelDeleteCourse}
        onDeleteCourse={onDeleteCourse}
        onReactivateCourse={onReactivateCourse}
        onUploadImageChange={onUploadImageChange}
        providers={providers}
        markAsPopular={markAsPopular}
        dismarkAsPopular={dismarkAsPopular}
      />
    ) : (
      <CoursesList
        isFetching={isFetching}
        courses={courses}
        course={course}
        courseLogged={courseLogged}
        onSetCourse={onSetCourse}
        onCancelDeleteCourse={onCancelDeleteCourse}
        onDeleteCourse={onDeleteCourse}
        onViewDetails={onViewDetails}
        onEditCourseClick={onEditCourse}
        onNewCourse={onNewCourse}
        markAsPopular={markAsPopular}
        dismarkAsPopular={dismarkAsPopular}
      />
    )}
  </div>
);

export default CourseListModule;