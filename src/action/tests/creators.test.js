import { addRow, deleteRow, sortBy } from './../creators';
import types from './../types';
import { expect } from 'chai';

describe('addRow', () => {
  // Arrange
  const type = types.ADD_ROW;
  const data = { countryName: 'India',  countryCode: 'IN', gold: 67, silver: 57, bronze: 77, total: 201 };
  const expected = {
    type: 'ADD_ROW',
    data:
    { countryName: 'India',
      countryCode: 'IN',
      gold: 67,
      silver: 57,
      bronze: 77,
      total: 201 }
  };

  // Act
  const action = addRow(data);
  // Assert
  it(`Should return a ${type} action`, () => {
    expect(action).to.deep.equal(expected);
  });
});

describe('deleteRow', () => {
  // Arrange
  const type = types.DELETE_ROW;
  const data = { countryName: 'India' };
  const expected = {
    type: 'DELETE_ROW',
    data:
      { countryName: 'India' }
  };

  // Act
  const action = deleteRow(data);
  // Assert
  it(`Should return a ${type} action`, () => {
    expect(action).to.deep.equal(expected);
  });
});

describe('sortBy', () => {
  // Arrange
  const type = types.SORT_BY;
  const data = { data: 'gold' };
  const expected = {
    type: 'SORT_BY',
    data: {
      data: 'gold',
    },
  };

  // Act
  const action = sortBy(data);
  // Assert
  it(`Should return a ${type} action`, () => {
    expect(action).to.deep.equal(expected);
  });
});
