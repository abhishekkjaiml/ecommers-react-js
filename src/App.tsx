import { Routes, Route } from 'react-router-dom'
import { Home } from "./Page/Home"
import { ShopPage } from './Page/ShopPage'
import { Catogaries } from './Page/Catogaries'
import { Deals } from './Page/Deals'
import { Contact } from './Page/Contact'
import { Auth } from './Page/Auth'
import { Cart } from './Page/Cart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/'  element={<Home />} />
      </Routes>
      <Routes>
        <Route  path='/shop'  element={<ShopPage />} />
      </Routes>
      <Routes>
        <Route  path='/catogaries'  element={<Catogaries />} />
      </Routes>
      <Routes>
        <Route  path='/deals'  element={<Deals />} />
      </Routes>
      <Routes>
        <Route  path='/contact'  element={<Contact />} />
      </Routes>
      <Routes>
        <Route  path='/auth'  element={<Auth />} />
      </Routes>
      <Routes>
        <Route  path='/cart'  element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App