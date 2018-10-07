import {action} from "../reduxStore/action";

export const utils = {
  testUtil(dispatch) {
    return () => {
      dispatch(action("TEST", 1));
    }
  },
  getRanks(key, rules) {
      const splitedKey = key.replace("./", "").replace(".svg", "").split("_of_");

      return rules[splitedKey[0]] * rules[splitedKey[1]];
  },
  getAllRanks(cardPaths, cardSet, rules) {
    let totalRank = 0;

    cardSet.forEach(function (each) {
      totalRank = totalRank + utils.getRanks(cardPaths[each], rules);
    });
    return totalRank;
  },
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },

  insertionSort(list) {
    for(let j = 2; j < list.length; j++) {
      let key =  list[j];
      let i = j - 1;
      while(i > 0 && list[i] > key) {
        list[i + 1] = list[i];
        i -= 1;
      }
      list[i + 1] = key;
    }
    return list;
  }
}
