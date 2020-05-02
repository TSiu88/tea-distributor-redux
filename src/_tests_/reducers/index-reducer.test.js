import rootReducer from '../../reducers/index';
import initialState from '../../initialState';
import { createStore } from 'redux';
import teaListReducer from '../../reducers/tea-list-reducer';
import addFormVisibleReducer from '../../reducers/add-form-visible-reducer';
import selectedTeaReducer from '../../reducers/selected-tea-reducer';
import { v4 } from 'uuid';
import * as a from './../../actions/index';

let store = createStore(rootReducer);
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

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTeaList: initialState,
      addFormVisible: false,
      selectedTea: null
    });
  });

  test('Check that initial state of teaListReducer matches root reducer', () => {
    expect(store.getState().masterTeaList).toEqual(teaListReducer(undefined, {type: null}));
  });

  test('Check that initial state of addFormVisibleReducer matches root reducer', () => {
    expect(store.getState().addFormVisible).toEqual(addFormVisibleReducer(undefined, {type: null}));
  });

  test('Check that initial state of selectedTeaReducer matches root reducer', () => {
    expect(store.getState().selectedTea).toEqual(selectedTeaReducer(undefined, {type: null}));
  });

  test('Check that teaListReducer matches root reducer when adding tea', () => {
    store.dispatch(a.addOrUpdateTea(currentState[firstId]));
    expect(store.getState().masterTeaList).toEqual(teaListReducer(undefined, a.addOrUpdateTea(currentState[firstId])));
  });

  test('Check that teaListReducer matches root reducer when decreasing quantity of tea', () => {
    store.dispatch(a.decreaseQuantity(currentState[firstId]));
    expect(store.getState().masterTeaList).toEqual(teaListReducer(undefined, a.decreaseQuantity(currentState[firstId])));
  });

  test('Check that addFormVisibleReducer matches root reducer when toggle', () => {
    store.dispatch(a.toggleAddForm());
    expect(store.getState().addFormVisible).toEqual(addFormVisibleReducer(undefined, a.toggleAddForm()));
  });
});