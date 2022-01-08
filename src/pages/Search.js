import React from 'react'

import {Footer} from 'components/Footer'
import { Link } from 'react-router-dom'
const userId=10
function Search() {
   
    return (
        <div>
             <h1>Application</h1>
             <Link to={`/CreatePost/${userId}`}>CreatePost</Link>
            <Footer/>
        </div>
    )
}

export default Search
