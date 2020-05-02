import teaListReducer from './tea-list-reducer';
import addFormVisibleReducer from './add-form-visible-reducer';
import selectedTeaReducer from './selected-tea-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTeaList: teaListReducer,
  addFormVisible: addFormVisibleReducer,
  selectedTea: selectedTeaReducer
});

export default rootReducer;