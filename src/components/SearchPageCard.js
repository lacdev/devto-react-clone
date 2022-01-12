import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { getPosts } from 'services/posts'
import { useState, useEffect } from 'react'
import { Loader } from './Loader'
import { NavLink, useLocation } from 'react-router-dom'
import { formatDate, formatCreationDate } from 'utils/dates'
import { Card } from 'components/Card'
import { HomeLoader } from 'components/HomeLoader'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

export const SearchPageCard = () => {
  const [searchParams] = useSearchParams()
  let search = searchParams.get('query').toLowerCase()
  console.log(search)

  const [filteredPosts, setFilteredPosts] = useState([])
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true)
        const response = await getPosts()
        console.log(response.data.posts)
        const newPosts = response.data.posts.filter((post) =>
          post.title.includes(search.toLowerCase())
        )
        console.log('newPosts', newPosts)
        setPosts(response.data.posts)
        setFilteredPosts(newPosts)
        setIsLoading(false)
        setIsLoading(true);
        const response = await getPosts();

        //Filtro de busqueda
        const newPosts = response.data.posts.filter((post) => {
          if (search == "") {
            return post;
          } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
            return post;
          }
        });

        setPosts(response.data.posts);
        setFilteredPosts(newPosts);
        setIsLoading(false);
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
    }
    get()
  }, [search])

  // Error message
  const containerResults =
    'm-3 w-[70%] rounded-lg border bg-[#ffffffec] translate-x-[300px]  -translate-y-[270px]'

  if (!isLoading && isError)
    return (
      <div className={containerResults}>
        <h3 className="text-5xl font-bold text-indigo-700 ">
          Oops. There was an error <br></br>
        </h3>
        <h3 className="text-5xl font-bold mt-6 text-indigo-500">
          Try again later
        </h3>
      </div>
    )
  ;<div>
    {isLoading
      ? demoArray.map((number) => <Loader key={number} />)
      : posts.map((post) => <Card key={post._id} post={post} />)}
  </div>

  const oops = 'text-5xl font-bold mt-6 mb-6 text-center text-indigo-700'
  const anotherWord = 'text-5xl font-bold mt-6 mb-6 text-center text-indigo-500'

  if (filteredPosts.length === 0)
    return (
      <div className={containerResults}>
        <h3 className={oops}>
          Oops. No post with that title related <br></br>
        </h3>
        <h3 className={anotherWord}>Try again with another word</h3>
      </div>
    )
  ;<div>
    {isLoading
      ? demoArray.map((number) => <Loader key={number} />)
      : posts.map((post) => <Card key={post._id} post={post} />)}
  </div>

  return (
    <div>
      {isLoading
        ? demoArray.map((number) => <Loader key={number} />)
        : filteredPosts.map((post) => {
            return (
              <div className={containerResults} post={post}>
                <div className="flex">
                  <img
                    className="rounded-full w-[60px] h-[60px] m-4"
                    src={post?.avatar}
                    alt="linus"
                  ></img>

                  <div>
                    <h1 className="text-3xl font-bold mx-3 mt-3">
                      {' '}
                      {post.name}
                    </h1>

                    <h2 className="text-xl text mx-3 mt-3 ">
                      {' '}
                      {`${formatCreationDate(post?.date)} (${formatDate(
                        post?.date
                      )})`}
                    </h2>

                    <QueryNavLink to={`/post/${post?._id}`}>
                      <h1 className="font-bold text-3xl mt-3 mb-3 mx-3 cursor-pointer hover:text-indigo-700">
                        {post?.title}
                      </h1>
                    </QueryNavLink>

                    <div className="flex">
                      {post?.tags?.map((tag) => {
                        return (
                          <a href="#/" className="m-2 ">
                            {`#${tag}`}
                          </a>
                        )
                      })}
                    </div>
                    <button className="px-2 py-1 mr-3 text-sm rounded-md hover:bg-gray-100 bg-white hover:font-base">
                      <span className="flex items-center">
                        <svg
                          class="crayons-icon"
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                        </svg>

                        {`${post?.reactions} Reactions`}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
    </div>
  )
}
