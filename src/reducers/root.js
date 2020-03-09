import { combineReducers } from 'redux'
import mainReducer from './main'
import rolesReducer from './roles';
import categoriesReducer from "./categories";
import modalitiesReducer from "./modalities";
import usersReducer from './users'
import coursesReducer from './courses'

const rootReducer = combineReducers({
  user: mainReducer,
  roles: rolesReducer,
  categories: categoriesReducer,
  modalities: modalitiesReducer,
  users: usersReducer,
  courses: coursesReducer
});

export default rootReducer;