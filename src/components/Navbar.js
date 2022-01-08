import React from 'react'
import { CreatePostButton } from 'components/CreatePostButton'

function Navbar() {
  const classes = {
    navparent:
      'container min-w-full h-auto p-7 bg-white fixed top-0 left-0 right-0 z-10',
    nav: 'container  mx-auto fixed top-0 left-0 right-0 z-10',
    flexItems: 'flex items-center justify-between bg-white',
    notifications: 'rounded-lg cursor-pointer hover:bg-gray-200 p-2 ml-4 ',
    avatar: 'w-10 h-10 mx-4 rounded-full cursor-pointer',
  }

  return (
    <div className={classes.navparent}>
      <nav className={classes.nav}>
        <div className={classes.flexItems}>
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
            <div className={classes.notifications}>
              <img
                className="w-7 h-7"
                src="https://www.svgrepo.com/show/31480/notification-bell.svg"
                alt="bell-icon"
              ></img>
            </div>
            <div>
              <img
                className={classes.avatar}
                src="https://avatars.githubusercontent.com/u/1024025?v=4"
                alt="linus-avatar"
              ></img>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export { Navbar }
