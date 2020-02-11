import axios from 'axios';
import { addCategories } from './bannedItemsArrays';
/**
 * ACTION TYPES
 */
const GET_RESULTS = 'GET_RESULTS';
const CLEAR_RESULTS = 'CLEAR_RESULTS';

/**
 * INITIAL STATE
 */
const INITIAL_STATE = [];

/**
 * ACTION CREATORS
 */
const getResultsAction = bannedItemsFound => ({
  type: GET_RESULTS,
  bannedItemsFound,
});

export const clearResultsAction = () => ({ type: CLEAR_RESULTS });

/**
 * THUNK CREATORS
 */

export const getResults = (barCode, selectedItems) => async dispatch => {
  selectedItems = addCategories(selectedItems);
  try {
    let bannedItemsFound = [];
    const { data } = await axios(
      `https://world.openfoodfacts.org/api/v0/product/${barCode}.json`
    );
    if (
      !data.product ||
      !data.product.ingredients ||
      !data.product.ingredients.length
    ) {
      bannedItemsFound.push('Sorry, product was not found.');
    } else {
      const ingredients = data.product.ingredients;
      //check if item ingredients includes banned items
      for (let i = 0; i < ingredients.length; i++) {
        for (let j = 0; j < selectedItems.length; j++) {
          const currentIngredient = ingredients[i].text.toLowerCase();
          const bannedItem = selectedItems[j].toLowerCase();
          if (currentIngredient.includes(bannedItem)) {
            if (!bannedItemsFound.includes(bannedItem))
              bannedItemsFound.push(bannedItem);
          }
        }
      }
      //check for gluten
      if (selectedItems.includes('gluten') && data.product.allergens_tags) {
        data.product.allergens_tags.forEach(allergen => {
          if (allergen.includes('gluten')) {
            bannedItemsFound.push('gluten');
          }
        });
      }
    }
    if (!bannedItemsFound.length) bannedItemsFound.push('No banned items!');
    dispatch(getResultsAction(bannedItemsFound));
  } catch (error) {
    console.log('Results not found');
    console.error(error);
  }
};

/**
 * REDUCER
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_RESULTS:
      return action.bannedItemsFound;
    case CLEAR_RESULTS:
      return [];
    default:
      return state;
  }
}
