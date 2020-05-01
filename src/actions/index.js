export const toggleAddForm = () => ({
  type: 'TOGGLE_ADD_FORM'
});

export const addTea = (tea) => {
  const { id, name, category, origin, flavor, price, amount, image } = tea;
  return {
    type: 'ADD_TEA',
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