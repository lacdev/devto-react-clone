import React from "react";
import { ResultsSideBar } from "components/ResultsSideBar";
import { Container } from "components/Container";
import { Columns } from "components/Columns";
import { SearchBar } from "components/SearchBar";
import { Render } from "components/Render";

function Search() {
  return (
    <div>
      <Container>
        <Columns>
          <ResultsSideBar />
        </Columns>
        <Columns>
          <Render />
        </Columns>
      </Container>
    </div>
  );
}

export default Search;
