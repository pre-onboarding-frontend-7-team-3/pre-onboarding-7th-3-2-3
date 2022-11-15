export const convertDate = (originalDate: string): string => {
  let localeDate = new Date(originalDate).toLocaleString();

  let [year, month, day, ampmTime] = localeDate.split(". ");
  let [ampm, time] = ampmTime.split(" ");
  let [hour, minute] = time.split(":");

  if (ampm === "오전") {
    time = `${hour}:${minute}`;
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
