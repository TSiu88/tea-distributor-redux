import * as c from './ActionTypes';

export const toggleAddForm = () => ({
  type: c.TOGGLE_ADD_FORM
});

export const cancelAddForm = () => ({
  type: c.CANCEL_ADD_FORM
});

// export const selectedTea = (id) => {
//   return { 
//     type:c.SELECTED_TEA,
//     id: id,
//   };
// }

export const selectedTea = (id, selectTea) => {
  const { name, category, origin, flavor, price, amount, image } = selectTea;
  return {
    type: c.SELECTED_TEA,
    id: id,
    name: name,
    category: category,
    origin: origin,
    flavor: flavor,
    price: price,
    amount: amount,
    image: image
  }
}

export const unselectTea = () => {
  return {
    type:c.UNSELECT_TEA,
  };
}

export const addOrUpdateTea = (tea) => {
  const { id, name, category, origin, flavor, price, amount, image } = tea;
  return {
    type: c.ADD_OR_UPDATE_TEA,
    id: id,
    name: name,
    category: category,
    origin: origin,
    flavor: flavor,
    price: price,
    amount: amount,
    image: image
  }
}

export const decreaseQuantity = (tea) => {
  const { id, name, category, origin, flavor, price, amount, image } = tea;
  return {
    type: c.ADD_OR_UPDATE_TEA,
    id: id,
    name: name,
    category: category,
    origin: origin,
    flavor: flavor,
    price: price,
    amount: ((amount - 1) < 0 ? 0 : (amount -1)),
    image: image
  }
}