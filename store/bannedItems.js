import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import { createToDo, createTodo } from '../src/graphql/mutations';
/**
 * ACTION TYPES
 */
const GET_BANNED_ITEMS = 'GET_BANNED_ITEMS';
const ADD_BANNED_ITEM = 'ADD_BANNED_ITEM';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = [];

/**
 * ACTION CREATORS
 */
const addBannedItemAction = bannedItem => {
  return {
    type: ADD_BANNED_ITEM,
    bannedItem,
  };
};

/**
 * THUNK CREATORS
 */
export const addBannedItem = bannedItem => async dispatch => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const username = user.username;
    const input = { name: bannedItem, description: username };
    console.log('new item', input);
    const res = await API.graphql(
      graphqlOperation(createTodo, { input })
    );
    console.log("res", res.data.createTodo)
    dispatch(addBannedItemAction(res.data.createTodo));
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
    default:
      return state;
  }
}
