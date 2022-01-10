import { formatDate, formatCreationDate } from 'utils/dates'
import { NavLink, useLocation } from 'react-router-dom'
import { getPosts } from 'services/posts'
import { useState, useEffect } from 'react'
import { Loader } from './Loader'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

const CardsContainer = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true)
        const response = await getPosts()
        setPosts(response.data.posts)
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
      }
    }
    get()
  }, [])

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
    )

  return (
    <div>
      {isLoading
        ? demoArray.map((number) => <Loader key={number} />)
        : posts.map((post) => <MainCard key={post._id} post={post} />)}
    </div>
  )
}

const MainCard = ({ post }) => {
  console.log(`Main Card:`, post)
  const classes = {
    tagLink:
      'text-xs mr-1 px-2 py-1 border rounded-lg border-white hover:border-gray-400 hover:bg-gray-100',
    commentsButtons:
      'px-2 py-1 mr-3 text-sm rounded-md hover:bg-gray-100 bg-white hover:font-base',
    container: 'rounded-lg border w-full bg-white shadow-sm mb-4',
    postImage: 'rounded-tl-lg rounded-tr-lg',
    avatarImage: 'w-16 h-16 mx-4 rounded-full cursor-pointer',

    userName: 'font-semibold text-base',
  }

  const creationDate = formatCreationDate(post?.date)
  const currentDate = formatDate(post?.date)

  return (
    <div className={classes.container}>
      <div className="rounded-lg">
        <img
          className={classes.postImage}
          src={post?.imageURL}
          alt="postimage"
        ></img>
      </div>
      <div className="p-4 flex">
        <div className={classes.avatarImage}>
          <img className="rounded-full" src={post?.avatar} alt="linus"></img>
        </div>
        <div>
          <h2 className={classes.userName}>{post?.name}</h2>
          <h3 className="text-gray-600 text-sm">
            {`${creationDate} (${currentDate})`}
          </h3>
          <QueryNavLink to={`/post/${post?._id}`}>
            <h1 className="font-bold text-3xl mt-2 cursor-pointer hover:text-indigo-700 mb-2">
              {post?.title}
            </h1>
          </QueryNavLink>

          <div className="flex">
            {post?.tags?.map((tag) => {
              return (
                <a href="#/" className={classes.tagLink}>
                  {`#${tag}`}
                </a>
              )
            })}
          </div>
          <div className="flex mt-3">
            <div>
              <button className={classes.commentsButtons}>
                <span className="flex items-center">
                  <svg
                    class="crayons-icon"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                  </svg>
                  {`${post.reactions} Reactions`}
                </span>
              </button>
            </div>
            <div>
              <button className={classes.commentsButtons}>
                <span className="flex items-center">
                  <svg
                    class="crayons-icon"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                  </svg>
                  Add Comment
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MainCard, CardsContainer }
