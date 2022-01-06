import React from 'react'

function Footer() {

    const parent = 'container w-full h-auto bg-gray-400'
    const confoot = 'flex flex-col justify-content'
    const textdecoration = 'font-medium decoration-indigo-600 '
    const foottext = 'text-sm'
    return (
        <footer className={parent}>
            <div className={confoot}>
             <p className={textdecoration}> DEV Community </p><p className={foottext}> A constructive and inclusive social network for software developers. With you every step of your journey.</p>
             <div>

             </div>

            </div>
            
        </footer>
    )
}

export {Footer}

