export const Title = ({ children }) => {
  const title = 'text-yellow-200 font-semibold text-4xl hover:underline'
  return <h1 className={title}>{children}</h1>
}
