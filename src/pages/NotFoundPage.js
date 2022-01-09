import React from 'react'

function NotFoundPage() {
  const classes = {
    container:
      'mx-auto mt-16 text-center p-4 bg-gray-100 min-h-screen flex flex-col justify-center items-center',
    title: 'text-9xl font-bold mt-4',
    subtitle: 'text-4xl font-semibold mt-4 ',
    paragraph: 'text-2xl mt-4',
  }
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>404</h1>
      <h3 className={classes.subtitle}>Not Found</h3>
      <h5 className={classes.paragraph}>
        The resource requested could <br></br>
        not be found on this server.
      </h5>
    </div>
  )
}

export default NotFoundPage
