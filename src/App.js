import { ResultsSideBar } from "./components/ResultsSideBar";
import { ReadNext } from "./components/ReadNext";
import { SearchBar } from "./components/SearchBar";
import { RightbarHelp } from "./components/RightBarHelp";
import { CodeNewbie } from "./components/CodeNewbie";

const App = () => {
  return (
    <>
      <CodeNewbie />
      <ResultsSideBar />
      <ReadNext />
      <SearchBar />
      <RightbarHelp />
    </>
  );
};

export default App;
