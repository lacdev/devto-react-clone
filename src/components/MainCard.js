import { formatDate, formatCreationDate } from 'utils/dates'
import { generateRandomReactions } from 'utils/reactions'
import { NavLink, useLocation } from 'react-router-dom'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

const MainCard = () => {
  const classes = {
    tagLink:
      'text-xs mr-1 px-2 py-1 border rounded-lg border-white hover:border-gray-400 hover:bg-gray-100',
    commentsButtons:
      'px-2 py-1 mr-3 text-sm rounded-md hover:bg-gray-100 bg-white hover:font-base',
  }

  return (
    <div
      className="rounded-lg border w-full bg-white shadow-sm 
    mb-4"
    >
      <div className="rounded-lg">
        <img
          className="rounded-tl-lg rounded-tr-lg"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--luVS2b-f--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zrbpb5m59h0m2x9db883.jpg"
          alt="dev"
        ></img>
      </div>
      <div className="p-4 flex ">
        <div className="w-16 h-16 mx-4 rounded-full cursor-pointer">
          <img
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/1024025?v=4"
            alt="linus"
          ></img>
        </div>
        <div>
          <h2 className="font-semibold text-base">Linus Torvalds</h2>
          <h3 className="text-gray-600 text-sm">
            {`${formatCreationDate(new Date())} (${formatDate(
              new Date(2022, 0, 1, 0, 0, 15)
            )})`}
          </h3>
          <QueryNavLink to={`/post/123`}>
            <h1 className="font-bold text-3xl mt-2 cursor-pointer hover:text-indigo-700 mb-2">
              Maximize your Tailwind efficiency by using these resources
            </h1>
          </QueryNavLink>

          <div className="flex">
            <a href="/#" className={classes.tagLink}>
              #TailwindCSS
            </a>
            <a href="/#" className={classes.tagLink}>
              #CSS
            </a>
            <a href="/#" className={classes.tagLink}>
              #webdev
            </a>
            <a href="/#" className={classes.tagLink}>
              #beginners
            </a>
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
                  {`${generateRandomReactions()} Reactions`}
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

export { MainCard }
