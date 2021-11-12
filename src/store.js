import { createStore } from "redux";
import moment from "moment";
let initialState = {
  countDaysCurrencyMonth: [],
  dateMonthYear: "",
  currentMonth: moment().month() + 1,
  currentYear: moment().year(),
  isOpen: false,
  data: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getDaysMonth":
      return { ...state, countDaysCurrencyMonth: action.payload };
    case "updateMonthYear":
      return { ...state, dateMonthYear: action.payload };
    case "incrementYear":
      return { ...state, currentMonth: 1, currentYear: state.currentYear + 1 };
    case "decrementYear":
      return { ...state, currentMonth: 12, currentYear: state.currentYear - 1 };
    case "incrementMonth":
      return { ...state, currentMonth: state.currentMonth + 1 };
    case "decrementMonth":
      return { ...state, currentMonth: state.currentMonth - 1 };
    case "openForm":
      return {
        ...state,
        isOpen: (state.isOpen = true),
        data: { day: action.payload.day, month: action.payload.month },
      };
    case "closeForm":
      return { ...state, isOpen: (state.isOpen = false), data: null };
    default:
      return state;
  }
};
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
