import initialState from "./initialState";
import { LOGIN } from "./action";

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, clickCount: state.clickCount + 1 };
    default:
      return state;
  }
}

export default reducer;
