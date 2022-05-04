import dates from "./ru";

const timeAgo = (date: string | number) => {
  const now = new Date();
  const event = new Date(date);

  const ms = (Number(now) - Number(event)) + 2000;
  const seconds = ms / 1000;
  let result = '';

  if (seconds < 60) {
    result = Math.floor(seconds) + ' секунд назад'
  } else if (seconds < 60 * 60){
    result = Math.floor(seconds/60) + ' минут назад'
  } else if (seconds < 60 * 60 * 60){
    result = Math.floor(seconds / 60 / 60) + ' часов назад'
  } else {
    const time =
      event.getHours().toString().padStart(2, '0') +
      ':' +
      event.getMinutes().toString().padStart(2, '0');

    const day = event.getDate();
    const month = dates.caseMonths[event.getMonth()];

    result = `${day} ${month} в ${time}`;
  }

  return result
}

export default timeAgo