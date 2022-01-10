import React from "react";
import { useSearchParams } from "react-router-dom";
import { getPosts } from "services/posts";
import { useState, useEffect } from "react";
import { Loader } from "./Loader";

export const Users = () => {
  const [searchParams] = useSearchParams();
  let search = searchParams.get("query");

  const [filteredPost, setFilteredPost] = [];
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleFilteredPost = (posts) => {
    console.log("hola");
    console.log(posts);
    const lastPost = posts.filter((post) => post.title.includes(search));
    setFilteredPost(lastPost);
    console.log(lastPost);
  };

  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true);
        const response = await getPosts();
        setPosts(response.data.posts);
        //console.log(search);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    get();
  }, []);
  handleFilteredPost(posts);

  if (!isLoading && isError)
    return (
      <div>
        <h3 className="text-5xl font-bold text-indigo-700">
          Oops. There was an error <br></br>
        </h3>
        <h3 className="text-5xl font-bold mt-6 text-indigo-500">
          Try again later
        </h3>
      </div>
    );

  return (
    <div>
      {isLoading
        ? demoArray.map((number) => <Loader key={number} />)
        : filteredPost.map((post) => <div>{post.title}</div>)}
    </div>
  );
};
