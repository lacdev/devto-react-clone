import React from 'react'
import { Navbar } from 'components/Navbar'
import {Footer} from 'components/Footer'
import { ResultsSideBar } from 'components/ResultsSideBar'
function Search() {
    return (
        <div>
            <Navbar/>
            <ResultsSideBar />
            <Footer/>
        </div>
    )
}

export default Search
