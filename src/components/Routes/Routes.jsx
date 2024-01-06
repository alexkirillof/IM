import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />}></Route>
  </Routes>
)

export default AppRoutes
