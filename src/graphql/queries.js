/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBannedItem = `query GetBannedItem($id: ID!) {
  getBannedItem(id: $id) {
    id
    name
    userName
  }
}
`;
export const listBannedItemsByUser = `query ListBannedItems(
  $limit: Int
  $nextToken: String
  $userName: String!
) {
  listBannedItems(filter: {userName: {eq: $userName}}, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      userName
    }
    nextToken
  }
}
`;
