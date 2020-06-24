/**
 * Reducer for olympic medal table
 *
 */
import types from './../action/types';

export const initialState = {
  countries: [
    { countryName: 'United States',  countryCode: 'US', gold: 46, silver: 37, bronze: 38, total: 121 },
    { countryName: 'Great Britain',  countryCode: 'GB', gold: 27, silver: 23, bronze: 17, total: 67 },
    { countryName: 'China',  countryCode: 'CN', gold: 23, silver: 18, bronze: 26, total: 67 },
    { countryName: 'Russia',  countryCode: 'RU', gold: 19, silver: 17, bronze: 19, total: 55 },
    { countryName: 'Germany',  countryCode: 'DE', gold: 17, silver: 10, bronze: 15, total: 42 },
    { countryName: 'Japan',  countryCode: 'JP', gold: 12, silver: 8, bronze: 21, total: 41 },
    { countryName: 'France',  countryCode: 'FR', gold: 10, silver: 18, bronze: 14, total: 42 },
  ],
};

const compareBy = (key) => (a, b) => {
  if (a[key] < b[key]) return 1;
  if (a[key] > b[key]) return -1;
  return 0;
};
/**
 * Olympic medal table reducer
 *
 * @param {Object} state - Part of the state: state.countries
 * @param {Action} action - Dispatched action
 * @returns {Object} Updated state tree
 */
const app = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ROW:
      const newItem = action.data;
      return {
        countries: [...state.countries, newItem]
      }
    case types.SORT_BY:
      let arrayCopy = [...state.countries];
      arrayCopy.sort(compareBy(action.data));
      return {countries: arrayCopy};
    case types.DELETE_ROW:
      const countries = state.countries.filter(item => item.countryName !== action.data)
      return {
        countries
      }
    default:
      return state;
  }
};

export default app;
