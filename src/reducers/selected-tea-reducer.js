import * as c from './../actions/ActionTypes';
import initialState from './../initialState';

export default (state = null, action) => {
  const { id } = action;

  switch(action.type){
    case c.SELECTED_TEA:
      const selected = initialState.masterTeaList[id];
      return selected;
    case c.UNSELECT_TEA:
      state = null;
      return null;
    default:
      return null;
  }
}