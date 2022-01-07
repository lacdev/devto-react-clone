export const Container = ({ children }) => {
    const container = 'container mx-auto text-center p-10'
    return <h1 className={container}>{children}</h1>
  }

