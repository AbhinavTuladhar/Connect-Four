import React from 'react'
import GameBoard from './components/GameBoard'

const App = () => {
  return (
    <div className='bg-gray-900 min-h-screen text-white pb-5'>
      <h1 className='text-center text-3xl font-bold text-white pt-4 mb-4'>
        Connect Four!
      </h1>
      <GameBoard />
    </div>
  )
}

export default App