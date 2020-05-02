import addFormVisibleReducer from '../../reducers/add-form-visible-reducer';
import * as c from './../../actions/ActionTypes';

describe('addFormVisibleReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(addFormVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle addFormVisible to true', () => {
    expect(addFormVisibleReducer(false, { type: c.TOGGLE_ADD_FORM })).toEqual(true);
  });

  test('Should cancel addFormVisible to false', () => {
    expect(addFormVisibleReducer(true, { type: c.CANCEL_ADD_FORM })).toEqual(false);
  });
});