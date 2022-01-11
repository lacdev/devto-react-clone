import { FilterButton } from './FilterButton'

const FiltersContainer = ({ onFilterClick, selectedFilter }) => {
  //TODO
  //If Top is active, show right filters
  //If Latest or Relevant is active, hide right filters
  //If any button is active, increase font-weight
  //When Top gets active for the first time, week sets to active

  const setButtonActive = (buttonName, selectedFilter) => {
    return selectedFilter === buttonName
  }

  return (
    <div className="mb-4 flex justify-between mt-4">
      <div>
        <FilterButton
          onFilterClick={onFilterClick}
          isActive={setButtonActive('day', selectedFilter)}
          id={'day'}
        >
          Relevant
        </FilterButton>
        <FilterButton
          onFilterClick={onFilterClick}
          id={null}
          isActive={setButtonActive('latest', selectedFilter)}
        >
          Latest
        </FilterButton>
        <FilterButton isActive={setButtonActive('top', selectedFilter)}>
          Top
        </FilterButton>
      </div>
      <div>
        <FilterButton
          onFilterClick={onFilterClick}
          id={'week'}
          isActive={setButtonActive('week', selectedFilter)}
        >
          Week
        </FilterButton>
        <FilterButton
          onFilterClick={onFilterClick}
          id={'month'}
          isActive={setButtonActive('month', selectedFilter)}
        >
          Month
        </FilterButton>
        <FilterButton
          onFilterClick={onFilterClick}
          id={'year'}
          isActive={setButtonActive('year', selectedFilter)}
        >
          Year
        </FilterButton>
        <FilterButton
          onFilterClick={onFilterClick}
          id={'infinity'}
          isActive={setButtonActive('infinity', selectedFilter)}
        >
          Infinity
        </FilterButton>
      </div>
    </div>
  )
}

export { FiltersContainer }
