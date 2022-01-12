import { NavLink, useLocation } from 'react-router-dom'
import { getPosts } from 'services/posts'
import { useState, useEffect } from 'react'
import { FiltersContainer } from 'components/FiltersContainer'
import { HomeLoader } from './HomeLoader'
import { Card } from 'components/Card'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

const CardsContainer = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('')
  const demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true)
        const response = await getPosts(selectedFilter)
        setPosts(response.data.posts)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
    }
    get()
  }, [selectedFilter])

  const handleFilterClick = (event) => {
    const { id } = event.target
    setSelectedFilter(id)
  }

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
      <FiltersContainer
        onFilterClick={handleFilterClick}
        selectedFilter={selectedFilter}
      />
      {isLoading
        ? demoArray.map((number) => <HomeLoader key={number} />)
        : posts.map((post) => <Card key={post._id} post={post} />)}
    </div>
  )
}

export { CardsContainer, QueryNavLink }
