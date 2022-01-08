const MongoStories = () => {
  const classes = {
    container: 'flex-col w-80 h-auto rounded-lg flex-col  bg-gray-50 mt-3',
    submitButton:
      'px-8 mt-3 mx-2 mb-2 py-2 bg-indigo-600 font-semibold text-white text-center rounded-lg hover:bg-indigo-700',
    seePostsButton:
      'px-8 mt-3 mx-2 mb-2 py-2 bg-gray-200 font-semibold text-gray text-center rounded-lg hover:bg-gray-300',
    stories: 'font-bold text-xl',
    articleDiv:
      'px-3 py-4 border-b-2 border-slate-200 hover:bg-white hover:text-indigo-700 cursor-pointer',
    storiesContainer:
      'border-b-2 border-gray-200 px-3 py-3 cursor-pointer hover:text-indigo-600 ',
  }

  return (
    <div className={classes.container}>
      <img
        className="rounded-lg"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kkxvvytot7mztccmawdb.png"
        alt="mongodb banner"
      ></img>

      <div className="flex-col"></div>
      <div className="flex-col ">
        <div className={classes.storiesContainer}>
          <h2 className={classes.stories}>Stories (29)</h2>
        </div>
        <div className={classes.articleDiv}>
          The Wholesome App - Upload your Cute <br></br> and Wholesome Images
        </div>
        <div className={classes.articleDiv}>
          Workshift The all in one Application <br></br> for organizations
        </div>
        <div className={classes.articleDiv}>
          Formify Hassle Free HTML Form <br></br> Endpoints
        </div>
        <div className={classes.articleDiv}>
          The Wholesome App - Upload your Cute <br></br> and Wholesome Images
        </div>
        <div className={classes.articleDiv}>
          Forecasting sales for the next two years
        </div>
        <div className={classes.articleDiv}>
          Explore Seattle City Bike Trips
        </div>
        <div className="py-2 px-1">
          <a href="/#">
            <div className={classes.submitButton}>Submit Your Project!</div>
          </a>
          <a href="/#">
            <div className={classes.seePostsButton}>See All Posts</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export { MongoStories }
