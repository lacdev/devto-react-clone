import React from "react";
import { useSearchParams } from "react-router-dom";
import { getPosts } from "services/posts";
import { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { MainCard } from "components/MainCard";

export const Users = () => {
  const [searchParams] = useSearchParams();
  let search = searchParams.get("query");

  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true);
        const response = await getPosts();
        const newPosts = response.data.posts.filter((post) =>
          post.title.includes(search)
        );
        console.log("newPosts", newPosts);
        setPosts(response.data.posts);
        setFilteredPosts(newPosts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    get();
  }, []);

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

  if (filteredPosts.length == 0)
    return (
      <div>
        <h3 className="text-5xl font-bold text-indigo-700">
          Oops. No post with that title related <br></br>
        </h3>
        <h3 className="text-5xl font-bold mt-6 text-indigo-500">
          Try again with another word
        </h3>
      </div>
    );

  return (
    <div>
      {isLoading
        ? demoArray.map((number) => <Loader key={number} />)
        : filteredPosts.map((post) => <div post={post}>{post.title}</div>)}
    </div>
  );
};
