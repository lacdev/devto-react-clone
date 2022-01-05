const Button = ({ children }) => {
  const blue =
    'bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-3 rounded-lg text-center'

  return <button className={blue}>{children}</button>
}

export { Button }
