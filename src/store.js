import { createStore } from "redux";
let initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      break;
    default:
      break;
  }
};
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
