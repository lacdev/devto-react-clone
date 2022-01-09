import React from "react";
import { ResultsSideBar } from "components/ResultsSideBar";
import { Container } from "components/Container";
import { Columns } from "components/Columns";
import { Render } from "components/Render";

function Search() {
  return (
    <div>
      <Container>
        <Columns>
          <ResultsSideBar />
        </Columns>
        <Columns>
          <Input />
          <Render />
        </Columns>
      </Container>
    </div>
  );
}

export default Search;
