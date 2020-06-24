import reducer, { initialState } from './../app';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = {name: 'mock'};
    const mockAction = { type: 'UNKNOWN_ACTION' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add the new country details on ADD_ROW', () => {
    const state = {
      countries: [
        { countryName: 'United States',  countryCode: 'US', gold: 46, silver: 37, bronze: 38, total: 121 },
        { countryName: 'Great Britain',  countryCode: 'GB', gold: 27, silver: 23, bronze: 17, total: 67 },
      ],
    };
    const mockAction = {
      type: 'ADD_ROW',
      data: {
        countryName: 'India',
        countryCode: 'IN',
        gold: 27,
        silver: 20,
        bronze: 20,
        total: 67
      }
    };
    const result = reducer(state, mockAction);
    expect(result.countries).toHaveLength(3);
    expect(result.countries[2].countryName).toEqual('India');
    expect(result.countries[2].gold).toEqual(27);
  });

  it('should remove the row on DELETE_ROW', () => {
    const state = {
      countries: [
        { countryName: 'United States',  countryCode: 'US', gold: 46, silver: 37, bronze: 38, total: 121 },
        { countryName: 'Great Britain',  countryCode: 'GB', gold: 27, silver: 23, bronze: 17, total: 67 },
      ],
    };
    const mockAction = { type: 'DELETE_ROW', data: 'Great Britain' };
    const result = reducer(state, mockAction);
    expect(result.countries).toHaveLength(1);
    expect(result.countries[0].countryName).toEqual('United States');
  });

  it('should sort the row descending on SORT_BY', () => {
    const state = {
      countries: [
        { countryName: 'United States',  countryCode: 'US', gold: 46, silver: 37, bronze: 38, total: 121 },
        { countryName: 'Great Britain',  countryCode: 'GB', gold: 27, silver: 23, bronze: 17, total: 67 },
        { countryName: 'Russia',  countryCode: 'RU', gold: 67, silver: 57, bronze: 77, total: 201 },
      ],
    };
    const mockAction = { type: 'SORT_BY', data: 'gold' };
    const result = reducer(state, mockAction);
    expect(result.countries).toHaveLength(3);
    expect(result.countries[0].countryName).toEqual('Russia');
    expect(result.countries[1].countryName).toEqual('United States');
  });
});
