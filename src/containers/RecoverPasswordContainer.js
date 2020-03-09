import { connect } from 'react-redux'
import RecoverPassword from '../components/landing/pages/RecoverPassword'
import * as mainActions from '../actions/main'
import * as categoriesActions from '../actions/categories'

const mapStateRecoverPasswordToProps = state => {
  return {
  	user: state.user.userData
  }
}

const mapDispatchRecoverPasswordToProps = (dispatch) => {
  return {
    onHandleEmailInputChange: (e) => {
      dispatch(mainActions.handleRecoverPasswordEmailChange(e))
    },
  	changeMenu: (kindOfMenu) => {
  		dispatch(mainActions.changeMenu(kindOfMenu))
  	},
    onRecover: (email) => {
      dispatch(mainActions.recoverPassword(email))
    }
  }
}


const RecoverPasswordContainer = connect(
  mapStateRecoverPasswordToProps,
  mapDispatchRecoverPasswordToProps
)(RecoverPassword)

export default RecoverPasswordContainer