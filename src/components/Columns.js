const Columns = ({ children }) => {
  const classes = {
    flexColumns: 'flex flex-col mt-6 ',
  }

  return <div className={classes.flexColumns}>{children}</div>
}

export { Columns }
