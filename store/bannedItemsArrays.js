export const dairyList = [
  'milk',
  'lactose',
  'whey',
  'yogurt',
  'cheese',
  'cream',
  'custard',
  'butter',
];

export const meatList = [
  'beef',
  'calf',
  'goat',
  'chicken',
  'pork',
  'veal',
  'turkey',
  'steak',
  'duck',
  'bacon',
  'bison',
];

export const shellFishList = [
  'crab',
  'crayfish',
  'langostino',
  'lobster',
  'shrimp',
  'cockle',
  'cuttlefish',
  'oyster',
  'clam',
  'loco',
  'mussel',
  'octopus',
  'scallop',
  'squid',
  'snail',
  'conch',
];

export const treeNutsList = [
  'almonds',
  'brazil nuts',
  'cashews',
  'chesnuts',
  'hazelnuts',
  'filberts',
  'macadamia nuts',
  'pecans',
  'pistachios',
  'shea nuts',
  'walnuts',
];

export const carcinogensList = ['acetaldehyde', 'benzene', 'betel quid'];

export function addCategories(bannedItems){
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
  return bannedItems;
}
