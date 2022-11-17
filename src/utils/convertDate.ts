export const convertDate = (originalDate: string): string => {
  let localeDate = new Date(originalDate).toLocaleString('ko-KR', {
    timeZone: 'UTC',
  });
  let [year, month, day, ampmTime] = localeDate?.split('. ');
  let [ampm, time] = ampmTime?.split(' ');
  let [hour, minute] = time?.split(':');
  let isAfternoon = ampm === '오전';

  if (isAfternoon) {
    time = `0${hour}:${minute}`;
  } else {
    time = `${+hour + 12}:${minute}`;
  }

  if (+month < 10) {
    month = `0${month}`;
  }

  if (+day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day} ${time}`;
};
