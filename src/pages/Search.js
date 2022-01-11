import React from "react";
import { ResultsSideBar } from "components/ResultsSideBar";
import { Container } from "components/Container";
import { Columns } from "components/Columns";
import { SearchBar } from "components/SearchBar";
import { SearchPageCard } from "components/SearchPageCard";

function Search() {
  return (
    <div>
      <Container>
        <Columns>
          <ResultsSideBar />
          <SearchPageCard />
        </Columns>
        <Columns>
        </Columns>
      </Container>
    </div>
  );
}

export default Search;