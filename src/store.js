import { createStore } from "redux";
import moment from "moment";
let initialState = {
  countDaysCurrencyMonth: [],
  //dateMonthYear: "",
  currentMonth: moment().month() + 1,
  currentYear: moment().year(),
  countDaysAtMonth: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCountDaysMonth":
      return { ...state, countDaysCurrencyMonth: action.payload };
    case "initialArrayDaysOfMonth":
      return { ...state, countDaysAtMonth: action.payload };
    // case "updateMonthYear":
    // return { ...state, dateMonthYear: action.payload };
    case "nextYear":
      return { ...state, currentMonth: 1, currentYear: state.currentYear + 1 };
    case "lastYear":
      return { ...state, currentMonth: 12, currentYear: state.currentYear - 1 };
    case "incrementMonth":
      return { ...state, currentMonth: state.currentMonth + 1 };
    case "decrementMonth":
      return { ...state, currentMonth: state.currentMonth - 1 };
    default:
      break;
  }
};
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
