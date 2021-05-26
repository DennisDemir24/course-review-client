import React from 'react'

const Footer = () => {
  return (
    <div className="bg-jet-black-500 h-10 w-full text-white">
      <ul className="flex items-center h-full px-2 text-center">
        <li className="flex-auto">&#169; Kurskollen</li>
        <li className="flex-auto">
          <a href="/credits" className="underline">Ikoner av</a>
        </li>
        <li className="flex-auto">
          <a href="mailto:test@cringe.com" className="underline">Kontakt</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
