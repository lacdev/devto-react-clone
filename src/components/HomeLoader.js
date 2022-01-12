const HomeLoader = () => {
  const classes = {
    container: 'flex flex-col max-w-full pt-5 mt-4',
    containerAnimate: 'flex flex-col w-full px-3 animate-pulse',
    backgroundContainer: 'flex flex-col rounded-lg w-full p-2 shadow bg-white',
    imageContainer: 'flex flex-col w-full h-full justify-center',
    imageBackground:
      'w-full h-48 bg-gradient-to-r from-violet-100 to-fuchsia-200 rounded-lg',
    infoContainer: 'flex flex-col',
    avatarParentContainer: 'flex items-center gap-2 mt-3',
    avatarContainer: 'w-1/6 ml-3',
    backgroundGradient: 'bg-gradient-to-r from-violet-100 to-fuchsia-200',
    tags: 'w-12 h-4 rounded mb-2',
    comments: 'w-24 h-6 rounded mb-2',
    image: '',
  }
  return (
    <div className={classes.container}>
      <div className={classes.containerAnimate}>
        <div className={classes.backgroundContainer}>
          {/* //Starts image  */}
          <div className={classes.imageContainer}>
            <div className={classes.imageBackground}></div>
          </div>
          {/* //Ends image  */}
          {/* //Starts avatar info container */}
          <div className={classes.infoContainer}>
            <div className={classes.avatarParentContainer}>
              <div className={classes.avatarContainer}>
                {/* //Avatar image */}
                <div
                  className={`${classes.backgroundGradient} rounded-full w-16 h-16`}
                ></div>
              </div>
              {/* //Starts date */}
              <div className="w-full pl-1">
                <div
                  className={`${classes.backgroundGradient} w-1/3 h-3 rounded mb-2`}
                ></div>
                <div
                  className={`${classes.backgroundGradient} w-1/4 h-3 rounded mb-2"`}
                ></div>
              </div>
              {/* //Date Ends */}
            </div>
            {/* //title container starts */}
            <div className="flex flex-col mt-2 ml-20">
              <div
                className={`${classes.backgroundGradient} w-3/4 h-6  rounded mb-2`}
              ></div>
              <div
                className={`${classes.backgroundGradient} w-2/4 h-6 rounded mb-2`}
              ></div>
            </div>
            {/* //Tags container starts  */}
            <div className="flex gap-2 mt-2 ml-20">
              <div
                className={`${classes.backgroundGradient} ${classes.tags}`}
              ></div>
              <div
                className={`${classes.backgroundGradient} ${classes.tags}`}
              ></div>
              <div
                className={`${classes.backgroundGradient} ${classes.tags}`}
              ></div>
              <div
                className={`${classes.backgroundGradient} ${classes.tags}`}
              ></div>
            </div>
            {/* //Comments container starts */}
            <div className="flex gap-2 mt-3 ml-20">
              <div
                className={`${classes.backgroundGradient} ${classes.comments}`}
              ></div>
              <div
                className={`${classes.backgroundGradient} ${classes.comments}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HomeLoader }
