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
  if (bannedItems.includes('Dairy')) {
    bannedItems = bannedItems.concat(dairyList);
  }
  if (bannedItems.includes('Meat')) {
    bannedItems = bannedItems.concat(meatList);
  }
  if (bannedItems.includes('Shellfish')) {
    bannedItems = bannedItems.concat(shellFishList);
  }
  if (bannedItems.includes('Tree Nuts')) {
    bannedItems = bannedItems.concat(treeNutsList);
  }
  if (bannedItems.includes('Known Carcinogens')) {
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
