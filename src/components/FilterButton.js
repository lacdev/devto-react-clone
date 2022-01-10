const FilterButton = ({ children }) => {
  const classes = {
    filterButton:
      'p-3 text-base font-slate-200 hover:bg-white rounded-lg hover:text-indigo-500',
  }
  return (
    <>
      <button className={classes.filterButton}>{children}</button>
    </>
  )
}

export { FilterButton }
