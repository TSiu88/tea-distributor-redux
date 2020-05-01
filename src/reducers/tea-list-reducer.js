import initialState from '../initialState';

export default (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TEA':
      const { id, name, category, origin, flavor, price, amount, image } = action;
      return Object.assign({}, state, {
        [id] : {
          id: id,
          name: name,
          category: category,
          origin: origin,
          flavor: flavor,
          price: price,
          amount: amount,
          image: image
        }
      });
    default:
      return state;  
  }
  
};