import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { Categries } from './pages/Categries'
import { Deals } from './pages/Deals'
import { Contact } from './pages/Contact'
import { Wishlist } from './pages/Wishlist'
import { Cart } from './pages/Cart'
import { Auth } from './pages/Auth'
import { ProductsDetails } from './pages/ProductsDetails'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/myCart'   element={<Cart />}/>
      <Route path='/auth'     element={<Auth />}/>
      <Route path='/shop' element={<Shop />} />
      <Route path='/catogary' element={<Categries />} />
      <Route path='/deals' element={<Deals />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/shop/product-details' element={<ProductsDetails />}/>
    </Routes>
  )
}

export default App