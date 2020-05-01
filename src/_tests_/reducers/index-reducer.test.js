import rootReducer from '../../reducers/index';
import initialState from '../../initialState';
import { createStore } from 'redux';
import teaListReducer from '../../reducers/tea-list-reducer';
import addFormVisibleReducer from '../../reducers/add-form-visible-reducer';
import { v4 } from 'uuid';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTeaList: initialState,
      addFormVisible: false
    });
  });

  test('Check that initial state of teaListReducer matches root reducer', () => {
    expect(store.getState().masterTeaList).toEqual(teaListReducer(undefined, {type: null}));
  });

  test('Check that initial state of addFormVisibleReducer matches root reducer', () => {
    expect(store.getState().addFormVisible).toEqual(addFormVisibleReducer(undefined, {type: null}));
  });

  test('Check that teaListReducer matches root reducer when adding tea', () => {
    const action = {
      type: 'ADD_TEA',
      id: v4(),
      name: "Ti Kwan Yin",
      category: "Oolong Tea",
      origin: "China",
      flavor: "Delicate, green, floral, sweet with mineral note",
      price: 8,
      amount: 54,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635"
    }
    store.dispatch(action);
    expect(store.getState().masterTeaList).toEqual(teaListReducer(undefined, action));
  });

  test('Check that addFormVisibleReducer matches root reducer when toggle', () => {
    const action = {
      type: 'TOGGLE_ADD_FORM'
    }
    store.dispatch(action);
    expect(store.getState().addFormVisible).toEqual(addFormVisibleReducer(undefined, action));
  });
});