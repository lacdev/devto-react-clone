export const SubHeader = ({ children }) => {
  const subheader = 'text-4xl font-semibold text-red-500 hover:underline'
  return <div className={subheader}>{children}</div>
}
