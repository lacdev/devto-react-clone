import { useState } from "react";
import Data from "../mock-data.json";

//css styles
const user = "border rounded-md items-center";
const input = "border rounded-md p-2";

export const Render = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className={input}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {Data.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className={user} key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </>
  );
};
