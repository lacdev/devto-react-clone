import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const navparent='flex items-center justify-between p-8 flex-wrap min-w-full bg-teal-400'
    const ullist ='flex'
    const lilist ='mr-4 active:bg-indigo-600 hover:decoration-indigo-600'
    return (
        <nav className={navparent}>
         <ul className={ullist} >
            <li className={lilist} >
                    <Link to='/Post'>Post</Link>
                </li>
            <li className={lilist}>
                    <Link to='/Search'>Resultado</Link>
                </li>
            <li className={lilist}>
                    <Link to='/'>Home</Link>
                </li>
            
        </ul> 
                
        </nav>
    )
}

export  {Navbar}
