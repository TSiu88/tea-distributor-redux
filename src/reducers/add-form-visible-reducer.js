import * as c from './../actions/ActionTypes';

export default (state=false, action) => {
  switch (action.type){
    case c.TOGGLE_ADD_FORM:
      return !state;
    case c.CANCEL_ADD_FORM:
      return false;
    default:
      return state;
  }
};