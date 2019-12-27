import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createBannedItem } from '../src/graphql/mutations';
import { listBannedItemsByUser } from '../src/graphql/queries';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = [];

/**
 * ACTION TYPES
 */
const GET_BANNED_ITEMS = 'GET_BANNED_ITEMS';
const ADD_BANNED_ITEM = 'ADD_BANNED_ITEM';

/**
 * ACTION CREATORS
 */
const getBannedItemsAction = bannedItems => {
  return {
    type: GET_BANNED_ITEMS,
    bannedItems,
  };
};

const addBannedItemAction = bannedItem => {
  return {
    type: ADD_BANNED_ITEM,
    bannedItem,
  };
};

/**
 * THUNK CREATORS
 */
export const getBannedItems = () => async dispatch => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const res = await API.graphql(
      graphqlOperation(listBannedItemsByUser, {
        userName: user.username,
        limit: 50,
      })
    );
    const bannedList = res.data.listBannedItems.items.map(item => {
      return item.name;
    });
    dispatch(getBannedItemsAction(bannedList));
  } catch (err) {
    console.error(err);
    console.log('could not get banned items');
  }
};

export const addBannedItem = bannedItem => async dispatch => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const input = { name: bannedItem, userName: user.username };
    const res = await API.graphql(
      graphqlOperation(createBannedItem, { input })
    );
    dispatch(addBannedItemAction(res.data.createBannedItem.name));
  } catch (err) {
    console.error(err);
    console.log('could not add banned item');
  }
};

/**
 * REDUCER
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BANNED_ITEM:
      return [...state, action.bannedItem];
    case GET_BANNED_ITEMS:
      return action.bannedItems;
    default:
      return state;
  }
}
