import { connect } from 'react-redux'
import BuyCourseModal from '../../components/courses/BuyCourseModal'
import * as courseActions from '../../actions/courses'

declare var $:any;

const mapStateBuyCourseModalToProps = state => {
  return {
    user: state.user.userData,
    course: state.courses.course,
    isFetching: state.courses.isFetching
  }
}

const mapDispatchBuyCourseModalToProps = (dispatch, ownProps) => {
    return {
        onSendBuyRequest: (user, course) => {
          dispatch(courseActions.sendBuyRequest(user, course));
        },
        onHandleBuyRequestComment: (e) => {
          dispatch(courseActions.handleBuyRequestComment(e))
        },
        onCancelBuyRequest: () => {
          dispatch(courseActions.cancelBuyRequest())
        }
    } 
}


const BuyCourseModalContainer = connect(
  mapStateBuyCourseModalToProps,
  mapDispatchBuyCourseModalToProps
)(BuyCourseModal)

export default BuyCourseModalContainer