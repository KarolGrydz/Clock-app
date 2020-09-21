import { hour } from './initialState';
import { setTime, getSecondsToday, startClock } from './functions';
import './styles/_index.scss';

//  Clock //
const currentSec: number = getSecondsToday();

const seconds: number = (currentSec / 60) % 1;
const minutes: number = (currentSec / 3600) % 1;
const hours: number = (currentSec / 43200) % 1;

setTime(60 * seconds, 'second');
setTime(3600 * minutes, 'minute');
setTime(43200 * hours, 'hour');

//  Timer //
hour.map((elem) => {
  elem.btn.addEventListener('click', () => startClock(elem));
});
