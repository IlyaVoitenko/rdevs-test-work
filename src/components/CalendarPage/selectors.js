import moment from "moment";

export function getCurrentYear(state) {
  return state.currentYear;
}
export function getCurrentMonth(state) {
  return state.currentMonth;
}
export function getStateModalWindowDates(state) {
  return state.isOpen;
}

export function getPrevMonthDaysAmount(state) {
  const { currentMonth, currentYear } = state;
  if (currentMonth === 1) {
    return 31;
  }
  return moment(`${currentYear}-${currentMonth - 1}`).daysInMonth();
}
export function getNextMonthDaysAmount(state) {
  const { currentMonth, currentYear } = state;
  if (currentMonth === 12) {
    return 31;
  }
  const nextDaysOfMonth = moment(
    `${currentYear}-${currentMonth + 1}`
  ).daysInMonth();
  return nextDaysOfMonth;
}
export function getDaysInMonth(state) {
  const { currentMonth, currentYear } = state;
  const daysInMonth = moment(`${currentYear}-${currentMonth}`).daysInMonth();
  return daysInMonth;
}
