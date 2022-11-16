import { BROKER_FORMAT } from "@src/constants/tableData";

export const changeDotToComma = (price: string) => {
  return price.split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const maskingAccountNumber = (number: string) => {
  let originNumber = number.split('');
  originNumber.forEach((number, i) => {
    if (i === 0 || i === originNumber.length - 1) return;
    originNumber[i] = '*';
  });
  return originNumber.join('');
};

export const handleTableDataToSelectData = query => {
  const result = [];
  for (const [key, value] of Object.entries(query)) {
    result.push({
      label: value,
      value: key,
    });
  }
  return result;
};

export const formattingAccountNumber = (number: string, broker_id: string) =>{
  const format = BROKER_FORMAT[broker_id].split('-')
  let originNumber = maskingAccountNumber(number)
  let formattedNumber = ''
  for (let i of format) {
    formattedNumber += originNumber.slice(0,i.length)+"-"
    originNumber = originNumber.slice(i.length)
  }
  return formattedNumber.slice(0,-1)
}