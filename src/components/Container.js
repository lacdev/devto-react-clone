export const Container = ({ children }) => {
  const container = 'container mx-auto p-10'
  return <h1 className={container}>{children}</h1>
}
