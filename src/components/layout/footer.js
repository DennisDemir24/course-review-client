import React from 'react'

const Footer = () => {
  return (
    <div className="bg-jet-black h-10 w-full text-white">
      <ul className="flex items-center h-full px-2">
        <li className="flex-auto text-left">&#169; Kurskollen</li>
        <li className="flex-auto text-center">
          <a href="/credits" className="underline">Credits</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
