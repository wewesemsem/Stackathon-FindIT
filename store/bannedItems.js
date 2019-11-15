/**
 * ACTION TYPES
 */
const ADD_BANNED_ITEMS = 'ADD_BANNED_ITEMS';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = [];

/**
 * ACTION CREATORS
 */
export const addBannedItems = bannedItems => ({
  type: ADD_BANNED_ITEMS,
  bannedItems,
});

/**
 * REDUCER
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BANNED_ITEMS:
      return action.bannedItems;
    default:
      return state;
  }
}
