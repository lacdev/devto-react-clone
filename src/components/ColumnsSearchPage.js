const Columns2 = ({ children }) => {
  const classes = {
    flexColumns: ' flex-row mt-6  ',
  }

  return <div className={classes.flexColumns}>{children}</div>
}

export { Columns2 }
