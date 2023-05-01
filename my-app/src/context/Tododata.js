import { createContext } from 'react'
const Tododata = createContext({})
export default Tododata
export const TododataProvider = ({ children }) => {
  return (
    <>
      <Tododata.Provider>{children}</Tododata.Provider>
    </>
  )
}
