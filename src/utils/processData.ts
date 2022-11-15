export const changeDotToComma = (price: string) => {
  return price.split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const maskingAccountNumber = (number: string) => {
  let originNumber = number.split('');
  originNumber.forEach((number, i) => {
    if (i === 0 || i === originNumber.length - 1) return;
    originNumber[i] = '*';
  });
  return originNumber;
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
