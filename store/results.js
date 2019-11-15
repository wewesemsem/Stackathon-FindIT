/**
 * ACTION TYPES
 */
const ADD_RESULTS = 'ADD_RESULTS';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = [];

/**
 * ACTION CREATORS
 */
const addResultsAction = bannedItemsFound => ({
  type: ADD_RESULTS,
  bannedItemsFound,
});

/**
 * THUNK CREATORS
 */

export const addResults = barCode => async dispatch => {
  try {
    let bannedItemsFound = [];
    const { data } = await axios(
      `https://world.openfoodfacts.org/api/v0/product/${barCode}.json`
    );
    //see if bannedItems exist in ingredients, if they do add to bannedItemsFound
    dispatch(addResultsAction(bannedItemsFound));
  } catch (error) {
    console.error(error);
  }
};

/**
 * REDUCER
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_RESULTS:
      return action.banned;
    default:
      return state;
  }
}
