import React from 'react'
import CourseDetails from './CourseDetails'
import CourseEditable from './CourseEditable'
import CourseNew from './CourseNew'

class CoursesView extends React.Component {
	
	render(){

		const{
			course,
			roles,
			providers,
			categories,
			modalities,
			isFetching,
			onCancelEditCourse,
			onGoBackToCoursesList,
			onEditCourseClick,
			view,
			onUpdateCourse,
			onHandleEditInputChange,
			onHandleNewInputChange,
			onSaveCourseClick,
			onCancelSaveCourseClick,
			onReactivateCourse,
			onCancelDeleteCourse,
			onUploadImageChange,
			onDeleteCourse,
      markAsPopular,
      dismarkAsPopular
		} = this.props

		return (
      <div>
        {view && view === "courseDetails" ? (
          <CourseDetails
            course={course}
            onGoBackToListClick={onGoBackToCoursesList}
            onEditCourseClick={onEditCourseClick}
            onReactivateCourseClick={onReactivateCourse}
            onCancelDeleteCourseClick={onCancelDeleteCourse}
            onDeleteCourseClick={onDeleteCourse}
            markAsPopular={markAsPopular}
            dismarkAsPopular={dismarkAsPopular}
          />
        ) : view && view === "updateCourse" ? (
          <CourseEditable
            course={course}
            isFetching={isFetching}
            onCancelEditCourse={onCancelEditCourse}
            onUpdateCourseClick={onUpdateCourse}
            onHandleEditInputChange={onHandleEditInputChange}
            onUploadImageChange={onUploadImageChange}
            providers={providers}
            categories={categories}
            modalities={modalities}
          />
        ) : (
          <CourseNew
            course={course}
            roles={roles}
            isFetching={isFetching}
            categories={categories}
            modalities={modalities}
            onHandleNewInputChange={onHandleNewInputChange}
            onSaveCourseClick={onSaveCourseClick}
            onCancelSaveCourseClick={onCancelSaveCourseClick}
            providers={providers}
          />
        )}
      </div>
    );

	}

}

export default CoursesView;