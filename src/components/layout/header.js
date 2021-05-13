import React from 'react'
import Login from '../Login/Login'

const Header = () => {
  return (
    <div className="bg-jet-black text-white font-general font-medium border-yellow-400 border-b-4 p-4">
      <h1 className="font-bold font-title text-3xl">Kurskollen</h1>
      <p>Se vad studenter tycker om dina framtida kurser</p>
      <Login/>
    </div>
  )
}
export default Header
