import { FilterButton } from './FilterButton'
import classnames from 'classnames'

const FiltersContainer = () => {
  //TODO
  //If Top is active, show right filters
  //If Latest or Relevant is active, hide right filters
  //If any button is active, increase font-weight
  //When Top gets active for the first time, week sets to active
  return (
    <div className="mb-4 flex justify-between">
      <div>
        <FilterButton>Relevant</FilterButton>
        <FilterButton>Latest</FilterButton>
        <FilterButton>Top</FilterButton>
      </div>
      <div>
        <FilterButton>Week</FilterButton>
        <FilterButton>Month</FilterButton>
        <FilterButton>Year</FilterButton>
        <FilterButton>Infinity</FilterButton>
      </div>
    </div>
  )
}

export { FiltersContainer }
