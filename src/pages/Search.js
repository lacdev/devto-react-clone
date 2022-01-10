import React from "react";
import { ResultsSideBar } from "components/ResultsSideBar";
import { Container } from "components/Container";
import { Columns } from "components/Columns";
import { SearchBar } from "components/SearchBar";
import { Users } from "components/SearchPageCard";

function Search() {
  return (
    <div>
      <Container>
        <Columns>
          <ResultsSideBar />
        </Columns>
        <Columns>
          <Users />
        </Columns>
      </Container>
    </div>
  );
}

export default Search;
