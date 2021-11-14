import moment from 'moment';

export function dayOfWeek(day, month, year) {
  // MONDAY - 1, а Sunday - 7.
  return moment(`${day}.${month}.${year}`, 'DD.MM.YYYY').day() || 7;
}
