import React from 'react'

const Footer = () => {
  return (
    <div className="bg-jet-black-footer h-10 w-full text-white">
      <ul className="flex items-center h-full px-2 text-center">
        <li className="flex-auto">&#169; Kurskollen</li>
        <li className="flex-auto">
          <a href="/credits" className="underline">Credits</a>
        </li>
        <li className="flex-auto">
          <a href="mailto:test@cringe.com" className="underline">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
