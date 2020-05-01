import * as c from './ActionTypes';

export const toggleAddForm = () => ({
  type: c.TOGGLE_ADD_FORM
});

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