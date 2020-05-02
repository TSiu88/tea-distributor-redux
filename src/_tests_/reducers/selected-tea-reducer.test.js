import selectedTeaReducer from './../../reducers/selected-tea-reducer';
import { v4 } from 'uuid';
import * as a from './../../actions/index';

const firstId = v4();
const testState = {
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
};

describe ('selectedTea', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedTeaReducer({}, {type:null})).toEqual({});
  });

  test('Should return specific tea with the specific id', () => {
    expect(selectedTeaReducer({}, a.selectedTea(firstId))).toEqual(testState[firstId]);
  });
});