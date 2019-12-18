import {
  dairyList,
  meatList,
  shellFishList,
  treeNutsList,
  carcinogensList,
} from './bannedItemsArrays';
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
export const addBannedItems = bannedItems => {
  if (bannedItems.includes('dairy')) {
    bannedItems = bannedItems.concat(dairyList);
  }
  if (bannedItems.includes('meat (excluding seafood)')) {
    bannedItems = bannedItems.concat(meatList);
  }
  if (bannedItems.includes('shellfish')) {
    bannedItems = bannedItems.concat(shellFishList);
  }
  if (bannedItems.includes('tree nuts')) {
    bannedItems = bannedItems.concat(treeNutsList);
  }
  if (bannedItems.includes('known carcinogens')) {
    bannedItems = bannedItems.concat(carcinogensList);
  }

  return {
    type: ADD_BANNED_ITEMS,
    bannedItems,
  };
};

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
