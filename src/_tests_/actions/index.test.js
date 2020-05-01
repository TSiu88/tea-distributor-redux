import * as actions from './../../actions';
import { v4 } from 'uuid';

const testId = v4();

describe('tea distributor actions', () => {

  it('toggleAddForm should create TOGGLE_ADD_FORM action', () => {
    expect(actions.toggleAddForm()).toEqual({
      type: 'TOGGLE_ADD_FORM'
    });
  });

  it('addTea should create ADD_TEA action', () => {
    expect(actions.addTea({
      id: testId,
      name: "Ti Kwan Yin",
      category: "Oolong Tea",
      origin: "China",
      flavor: "Delicate, green, floral, sweet with mineral note",
      price: 8,
      amount: 54,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635"
    })).toEqual({
      type: 'ADD_TEA',
      id: testId,
      name: "Ti Kwan Yin",
      category: "Oolong Tea",
      origin: "China",
      flavor: "Delicate, green, floral, sweet with mineral note",
      price: 8,
      amount: 54,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635"
    })
  });
});