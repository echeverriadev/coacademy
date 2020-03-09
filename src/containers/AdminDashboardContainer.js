import { connect } from 'react-redux'
import AdminDashboard from '../components/admin'
import * as mainActions from '../actions/main'
import * as coursesActions from '../actions/courses'
import * as usersActions from '../actions/users'

declare var $:any;

const mapStateAdminDashboardToProps = state => {
  return {
    user: state.user.userData,
    logged: state.user.logged
  }
}

const mapDispatchAdminDashboardToProps = (dispatch, ownProps) => {
  return {
  	onLogout: () => {
  		dispatch(mainActions.logout())
  	},
    onGoBackToCoursesList: () => {
      dispatch(coursesActions.goBackToCoursesList());
    },
    onGoBackToUsersList: () => {
      dispatch(usersActions.goBackToUsersList());
    }
  }
}


const AdminDashboardContainer = connect(
  mapStateAdminDashboardToProps,
  mapDispatchAdminDashboardToProps
)(AdminDashboard)

export default AdminDashboardContainer