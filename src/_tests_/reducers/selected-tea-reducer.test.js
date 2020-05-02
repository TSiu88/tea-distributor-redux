import selectedTeaReducer from './../../reducers/selected-tea-reducer';
import * as a from './../../actions/index';
import initialState from './../../initialState';

const testId = Object.keys(initialState.masterTeaList)[0];

describe ('selectedTea', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedTeaReducer({}, {type:null})).toEqual({});
  });

  test('Should return specific tea with the specific id', () => {
    expect(testId).toEqual(initialState.masterTeaList[testId].id);
  });

  test('Should unselect tea after selection done', () => {
    //const selected = selectedTeaReducer({}, a.selectedTea(testId));
    const unselect = selectedTeaReducer(initialState.masterTeaList[testId], a.unselectTea());
    expect(unselect).toEqual(null);
  });
});