import React from 'react'

function Navbar({ children }) {
  const navparent =
    'flex items-center justify-between p-8 flex-wrap min-w-full bg-teal-400'
  return <nav className={navparent}>{children}</nav>
}

export { Navbar }
