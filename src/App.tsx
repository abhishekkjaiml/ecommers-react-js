import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Wishlist } from './pages/wishlist'
import { Cart } from './pages/cart'
import { Auth } from './pages/auth'
import { Shop } from './pages/Shop'
import { Categries } from './pages/Categries'
import { Deals } from './pages/Deals'
import { Contact } from './pages/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/myCart' element={<Cart />} />
      <Route path='/auth' element={<Auth />} />

      <Route path='/shop' element={<Shop />} />
      <Route path='/catogary' element={<Categries />} />
      <Route path='/deals' element={<Deals />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App