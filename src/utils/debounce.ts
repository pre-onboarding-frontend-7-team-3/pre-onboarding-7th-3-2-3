import React from 'react'

const debounce = (callback : Function, delay:number) => {
  let timer : NodeJS.Timeout;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(()=> callback(), delay)
  }
}

export default debounce