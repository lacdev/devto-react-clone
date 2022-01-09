import React from "react";
import { ResultsSideBar } from "components/ResultsSideBar";
import { Container } from "components/Container";
import { Columns } from "components/Columns";
function Search() {
   
    return (
        <div>
             <h1>Application</h1>
             <Link to={`/CreatePost/${userId}`}>CreatePost</Link>
            <Footer/>
        </div>
    )
}

export default Search;
