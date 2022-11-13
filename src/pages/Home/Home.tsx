import useAuth from '@src/hooks/useAuth'
import React from 'react'

const Home = () => {
  useAuth()
  return (
    <div>Home</div>
  ) 
}

export default Home