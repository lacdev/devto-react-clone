import React from "react";
import { ResultsSideBar } from "components/ResultsSideBar";
import { Container } from "components/Container";
import { Columns } from "components/Columns";
import { SearchBar } from "components/SearchBar";
import { SearchPageCard } from "components/SearchPageCard";
import { Columns2 } from "components/ColumnsSearchPage";


function Search() {
  return (
    <div className=" bg-[#efefef]">
      <Container>
        <Columns>
          <ResultsSideBar />
        </Columns>
        <Columns2>
          <SearchPageCard />
        </Columns2>
      </Container>
    </div>
  );
}

export default Search;
