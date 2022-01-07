const CreatePostButton = ({ children }) => {
  const blue =
    'bg-gray-100 hover:bg-indigo-600 hover:text-white hover:underline text-indigo-600 font-semibold py-2 px-3 rounded text-center border-indigo-500'

  return <button className={blue}>{children}</button>
}

export { CreatePostButton }
