import moment from "moment";

export function dayOfWeek(day, month, year) {
  // MONDAY - 1, а Sunday - 7.
  return moment(`${day}.${month}.${year}`, "DD.MM.YYYY").day() || 7;
}
export function getArrayOfDatesString(days, month) {
  return new Array(days).fill(null).map((_, day) => {
    return `${day + 1}-${month}`;
  });
}
