const Columns = ({ children, minWidth }) => {
  const classes = {
    flexColumns: 'flex flex-col mt-6 ',
    width: minWidth,
  }

  return (
    <div className={`${classes.flexColumns} ${classes.width}`}>{children}</div>
  )
}

export { Columns }
