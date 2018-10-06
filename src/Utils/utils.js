import {action} from "../reduxStore/action";

export const utils = {
  testUtil(dispatch) {
    return () => {
    console.log("mustafa")
      dispatch(action("TEST", 1));
    }
  }
}
