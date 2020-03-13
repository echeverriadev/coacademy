import { connect } from 'react-redux'
import Login from '../components/login'
import * as mainActions from '../actions/main'

declare var $:any;

const mapStateLoginToProps = state => {
  return {
    user: state.user.userData,
    isFetching: state.user.isFetching,
    countries: state.user.countries,
    regions: state.user.regions,
    cities: state.user.cities
  }
}

const mapDispatchLoginToProps = (dispatch) => {
  dispatch(mainActions._getCountriesApi())
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
    },
    onChangeCountryRegion: () => {
      const country_id = $( "#countryselect option:checked" ).val();
      dispatch(mainActions._eraseCities());
      dispatch(mainActions._getRegionCountryApi(country_id))
    },
    onChangeCitiesRegion: () => {
      const region_id = $( "#regionselect option:checked" ).val();
      dispatch(mainActions._getCitiesRegionApi(region_id))
    }
  }
}


const LoginContainer = connect(
  mapStateLoginToProps,
  mapDispatchLoginToProps
)(Login)

export default LoginContainer