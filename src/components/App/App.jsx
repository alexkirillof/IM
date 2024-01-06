import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../SideBar/SideBar'
import AppRoutes from '../Routes/Routes.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategories } from '../../features/categories/categoriesSlice.js'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}
export default App
