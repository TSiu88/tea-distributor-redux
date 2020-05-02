import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  switch(action.type){
    case c.SELECTED_TEA:
      return action.payload;
    default:
      return state;
  }
}