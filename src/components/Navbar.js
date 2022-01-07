import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    const navparent='flex items-center justify-between p-8 flex-wrap min-w-full bg-teal-400'
    return (
        <nav className={navparent}>
            <ul>
            <li>
                    <NavLink to='/Post'>Post</NavLink>
                </li>
                <li>
                    <NavLink to='/Search'>Resultado</NavLink>
                </li>
                <li>
                    <NavLink to='/Home'>Home</NavLink>
                </li>
            
                </ul> 
                
        </nav>
    )
}

export  {Navbar}
