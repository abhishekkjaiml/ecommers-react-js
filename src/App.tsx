import { Routes, Route } from 'react-router-dom'
import { Home } from "./Page/Home"
import { ShopPage } from './Page/ShopPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/'  element={<Home />} />
      </Routes>
      <Routes>
        <Route  path='/shop'  element={<ShopPage />} />
      </Routes>
    </div>
  )
}

export default App