const Columns = ({ children }) => {
  const classes = {
    flexColumns: 'flex flex-col',
  }

  return <div className={classes.flexColumns}>{children}</div>
}

export { Columns }
