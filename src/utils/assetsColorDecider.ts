import React from 'react'

const assetsColorDecider = (assets:number, payments:number) => {
  const diff = assets - payments
  console.log(diff);
  
  if (diff === 0) return "black"
  if (diff > 0) return "blue"
  else return "red"
}

export default assetsColorDecider