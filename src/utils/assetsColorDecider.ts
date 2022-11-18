import React from 'react'

const assetsColorDecider = (assets:string, payments:string) => {
  const diff =  parseInt(payments) - parseInt(assets)   
  if (diff === 0) return "black"
  if (diff > 0) return "blue"
  else return "red"
}

export default assetsColorDecider