import types from './types';

/**
 * Add a new row to the olympic medal table.
 *
 * @param {Object} data - Olympic medal details
 */
export const addRow = (data) => {
  return {
    type: types.ADD_ROW,
    data,
  };
};
/**
 * Deleting the existing row in the olympic medal table.
 *
 * @param {string} data - country name
 */
export const deleteRow = (data) => {
  return {
    type: types.DELETE_ROW,
    data,
  };
};
/**
 * Sorting the row descending by the passed category.
 *
 * @param {string} data - Sort by category e.g. gold
 */
export const sortBy = (data) => {
  return {
    type: types.SORT_BY,
    data,
  };
};
