import teaListReducer from './tea-list-reducer';
import addFormVisibleReducer from './add-form-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTeaList: teaListReducer,
  addFormVisible: addFormVisibleReducer
});

export default rootReducer;