import React from 'react'
import { CreatePostButton } from 'components/CreatePostButton'

function Navbar() {
  const navparent = 'flex items-center justify-between min-w-full bg-white'
  return (
    <nav className={navparent}>
      <div>
        <a href="/" class="site-logo" aria-label="DEV Community Home">
          <img
            className="w-14 h-14 ml-4"
            src="https://www.vectorlogo.zone/logos/devto/devto-icon.svg"
            alt="dev-logo"
          ></img>
        </a>
      </div>
      <div className="flex items-center">
        <CreatePostButton />
        <div className="rounded-lg cursor-pointer hover:bg-gray-200 p-2">
          <img
            className="w-7 h-7"
            src="https://www.svgrepo.com/show/31480/notification-bell.svg"
            alt="bell-icon"
          ></img>
        </div>
        <div>
          <img
            className="w-10 h-10 mr-4 rounded-full cursor-pointer"
            src="https://avatars.githubusercontent.com/u/1024025?v=4"
            alt="linus-avatar"
          ></img>
        </div>
      </div>
    </nav>
  )
}

export { Navbar }
