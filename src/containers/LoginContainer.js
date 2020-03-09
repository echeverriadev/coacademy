import { connect } from 'react-redux'
import Login from '../components/login'
import * as mainActions from '../actions/main'

declare var $:any;

const mapStateLoginToProps = state => {
  return {
    user: state.user.userData,
    isFetching: state.user.isFetching
  }
}

const mapDispatchLoginToProps = (dispatch) => {
  return {
    onLoginInputChange: (e) => {
    	dispatch(mainActions.loginInputChange(e))
    },
    onLogin: (user) => {
    	dispatch(mainActions.fetchLogin(user));
    },
    onLoginKeyPress: (e) => {
      if(e.key === "Enter"){
        $("#btn-login").click()
      }
    },
    onRegisterInputChange: (e) => {
      dispatch(mainActions.registerInputChange(e));
    },
    onRegister: (user) => {
      dispatch(mainActions.fetchRegister(user));
    },
    prepareMenu: () => {
      dispatch(mainActions.changeMenu('LOGIN'))
    }
  }
}


const LoginContainer = connect(
  mapStateLoginToProps,
  mapDispatchLoginToProps
)(Login)

export default LoginContainer