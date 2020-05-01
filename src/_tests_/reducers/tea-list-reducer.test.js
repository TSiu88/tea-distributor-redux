import teaListReducer from '../../reducers/tea-list-reducer';
import { v4 } from 'uuid';
import * as a from './../../actions/index';

describe('teaListReducer', () => {

  const firstId = v4();
  const secondId = v4();
  const currentState = {
    [firstId] : {
      id: firstId,
      name: "Dragonwell",
      category: "Green Tea",
      origin: "China",
      flavor: "Mellow, floral flavor with slightly sweet aftertaste",
      price: 10,
      amount: 42,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/7004-Dragonwell_House-1.jpg?v=1445269617",
    },
    [secondId] : {
      id: secondId,
      name: "Ti Kwan Yin",
      category: "Oolong Tea",
      origin: "China",
      flavor: "Delicate, green, floral, sweet with mineral note",
      price: 8,
      amount: 54,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635",
    }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(teaListReducer({}, {type:null})).toEqual({});
  });

  test('Should successfully add new tea card data to tea list', () => {
    const { id, name, category, origin, flavor, price, amount, image } = currentState[firstId];
    
    expect(teaListReducer({}, a.addOrUpdateTea(currentState[firstId]))).toEqual({
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
  });

  test('Should successfully decrease amount of tea for a specific tea', () => {
    const { id, name, category, origin, flavor, price, amount, image } = currentState[secondId];
    
    expect(teaListReducer({}, a.decreaseQuantity(currentState[secondId]))).toEqual({
      [id] : {
        id: id,
        name: name,
        category: category,
        origin: origin,
        flavor: flavor,
        price: price,
        amount: (amount - 1),
        image: image
      }
    });
  });

});