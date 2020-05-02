import * as c from './ActionTypes';

export const toggleAddForm = () => ({
  type: c.TOGGLE_ADD_FORM
});

export const selectedTea = (id) => {
  //const tea = masterTeaList.find(item => item.id === id);
  return {
    type:c.SELECTED_TEA,
    payload: id 
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