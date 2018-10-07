import I from "immutable";

const svgs = require.context('../svg-cards', true, /\.svg$/)

const cardPathList = svgs.keys();

const rules = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  jack: 11,
  queen: 12,
  king: 13,
  ace: 20,
  hearts: 4,
  spades: 3,
  clubs: 2,
  diamonds: 1
}

const initialState = I.Map().set("rules", rules).set("cardPathList", cardPathList)

export function reducer(store = initialState, action) {
  switch(action.type) {
    case "TEST":
      return store.set("test", store.get("test", 0) + 1);
    case "ADD_GROUP":
      return store.set("groups", store.get("groups", I.Map()).set(action.payload.get("groupName", ""), action.payload.get("value", "")))
    default:
      return store;
  }
}
