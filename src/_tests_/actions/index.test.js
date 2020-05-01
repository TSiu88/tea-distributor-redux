import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';
import { v4 } from 'uuid';

const testId = v4();

describe('tea distributor actions', () => {

  it('toggleAddForm should create TOGGLE_ADD_FORM action', () => {
    expect(actions.toggleAddForm()).toEqual({
      type: c.TOGGLE_ADD_FORM
    });
  });

  it('addOrUpdateTea should create ADD_OR_UPDATE_TEA action', () => {
    expect(actions.addOrUpdateTea({
      id: testId,
      name: "Ti Kwan Yin",
      category: "Oolong Tea",
      origin: "China",
      flavor: "Delicate, green, floral, sweet with mineral note",
      price: 8,
      amount: 54,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635"
    })).toEqual({
      type: c.ADD_OR_UPDATE_TEA,
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

  it('decreaseQuantity should create ADD_OR_UPDATE_TEA action that decrease amount by 1', () => {
    expect(actions.decreaseQuantity({
      id: testId,
      name: "Ti Kwan Yin",
      category: "Oolong Tea",
      origin: "China",
      flavor: "Delicate, green, floral, sweet with mineral note",
      price: 8,
      amount: 54,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635"
    })).toEqual({
      type: c.ADD_OR_UPDATE_TEA,
      id: testId,
      name: "Ti Kwan Yin",
      category: "Oolong Tea",
      origin: "China",
      flavor: "Delicate, green, floral, sweet with mineral note",
      price: 8,
      amount: 53,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635"
    });
  });
});