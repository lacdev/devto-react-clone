import React from 'react'

function Navbar({ children }) {
  const navparent =
    'flex items-center justify-between p-8 flex-wrap min-w-full bg-white'
  return <nav className={navparent}>{children}</nav>
}

export { Navbar }
