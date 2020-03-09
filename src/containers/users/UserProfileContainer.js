import { connect } from 'react-redux'
import UserProfile from '../../components/landing/user-dashboard/UserProfile'
import * as mainActions from '../../actions/main'

const mapStateUserProfileToProps = state => {
  return {
  	user: state.user.userData
  }
}

const mapDispatchUserProfileToProps = (dispatch, ownProps) => {
  return {
  	onEditProfileInputChange: (e) => {
      dispatch(mainActions.editProfileInputChange(e))
    },
    onUpdateProfile: (user) => {
      dispatch(mainActions.updateProfile(user))
    },
    onCancelEditProfile: () => {
      dispatch(mainActions.cancelEditProfile())
    },
    onUploadProfileImage: (user, e) => {
      dispatch(mainActions.uploadProfileImage(user, e))
    },
    onChangePasswordInputChange: (e) => {
      dispatch(mainActions.changePasswordInputChange(e))
    },
    onCancelChangePassword: () => {
      dispatch(mainActions.cancelChangePassword())
    },
    onChangePassword: (user) => {
      dispatch(mainActions.changePassword(user))
    },
    changeMenu: (kindOfMenu) => {
      dispatch(mainActions.changeMenu(kindOfMenu))
    }
  }
}


const UserProfileContainer = connect(
  mapStateUserProfileToProps,
  mapDispatchUserProfileToProps
)(UserProfile)

export default UserProfileContainer