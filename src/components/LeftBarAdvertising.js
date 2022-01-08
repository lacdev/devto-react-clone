const LeftBarAdvertising = () => {
  const classes = {
    container: 'flex-col w-64 h-auto rounded-lg flex-col  bg-gray-50 p-4 mt-4',
    list: 'list-disc list-inside px-6 text-left mt-3 mb-3 marker:text-black text-indigo-500 cursor-pointer',
    link: 'text-indigo-500 cursor-pointer',
    check: 'font-bold mt-2',
  }

  return (
    <div className={classes.container}>
      <h2>
        DEV runs on 100% open <br></br>
        source code known as
        <span className={classes.link}>Forem.</span> <br></br>
        Contribute to the codebase or <br></br>
        host your own!
      </h2>
      <h3 className={classes.check}>Check these out! 👇</h3>
      <ul className={classes.list}>
        <li>Main Forem Repo</li>
        <li>Self-Host Instructions</li>
      </ul>
    </div>
  )
}

export { LeftBarAdvertising }
