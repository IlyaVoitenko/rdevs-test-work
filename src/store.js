import { createStore } from "redux";
let initialState = {
  countDaysCurrencyMonth: [],
  dateMonthYear: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getDaysMonth":
      return { ...state, countDaysCurrencyMonth: action.payload };
    case "updateMonthYear":
      return { ...state, dateMonthYear: action.payload };
    default:
      break;
  }
};
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
