import * as c from './../actions/ActionTypes';
import initialState from './../initialState';

export default (state = initialState, action) => {
  const { id, name, category, origin, flavor, price, amount, image } = action;

  switch(action.type){
    case c.SELECTED_TEA:
      return {...initialState, id, name, category, origin, flavor, price, amount, image};
    case c.UNSELECT_TEA:
      action = null;
      state = null;
      return null;
    default:
      return state
  }
}