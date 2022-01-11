import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "axios";
import { getPosts } from "services/posts";
import { Loader } from "./Loader";

//CSS properties
const cssInput =
  " ml-6 my-2 border px-2 relative w-72 h-10 rounded-md   bg-white active:border-indigo-600";
const cssIcon =
  " absolute -translate-x-[30px]  translate-y-[15px] cursor-pointer ";
const form = "relative display-inline";

//Onclick
// const HandleClick = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const get = async () => {
//       try {
//         setIsLoading(true);
//         const response = await getPosts();
//         setPosts(response.data.posts);
//         setIsLoading(false);
//       } catch (error) {
//         console.log(error);
//         setIsError(true);
//       }
//     };
//     get();
//   }, []);

// const [data, setData] = useState(null);
// const [error, setError] = useState(null);
// const [loading, setLoading] = useState(true);
// useEffect(() => {
//   axios(getPosts)
//     .then((response) => {
//       setData(response.data);
//     })
//     .catch((error) => {
//       console.error("error fetching data", error);
//       setError(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, []);
//};

//Onkeydown
export const SearchBar = () => {
  const navigate = useNavigate("");
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmitForm = (event) => {
    //Prevenimos la recarga del navegador
    event.preventDefault();
    if (searchTerm === "") return;
    //Navegamos a la pagina de resultados
    navigate({
      pathname: "/search",
      search: `?query=${searchTerm}`,
    });
  };

  return (
    <form className={form} onSubmit={onSubmitForm}>
      <input
        className={cssInput}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <span className={cssIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          aria-hidden="true"
          class="crayons-icon c-btn__icon"
          focusable="false"
          onClick={onSubmitForm}
        >
          <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
        </svg>
      </span>
    </form>
  );
};
