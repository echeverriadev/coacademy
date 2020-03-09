import { connect } from 'react-redux'
import UserProfileEditable from '../../components/admin/users/UserProfileEditable'
import * as mainActions from '../../actions/main'

const mapStateUserProfileEditableToProps = state => {
  return {
  	user: state.user.userData
  }
}

const mapDispatchUserProfileEditableToProps = (dispatch, ownProps) => {
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
    }
  }
}


const UserProfileEditableContainer = connect(
  mapStateUserProfileEditableToProps,
  mapDispatchUserProfileEditableToProps
)(UserProfileEditable)

export default UserProfileEditableContainer