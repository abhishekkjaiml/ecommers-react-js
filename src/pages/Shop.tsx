import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { getAllProducts } from '../api/getAllProducts'
import { useEffect, useState } from 'react'
import { ShopPage } from '../components/ShopPage'

export const Shop = () => {

  const [products, setProducts] = useState();

  useEffect(() => {
    (async() => {
      const data = await getAllProducts();
      setProducts(data)
    })()
  },[])
  return (
    <div>
        <div>
          <Navbar />
          <section  className='absolute '>
            <div 
              className='ml-58 mt-10 text-[20px] text'>
              <div  className='flex flex-wrap gap-6'>
                {
                  products?.length > 0 && products.map((product) => <ShopPage key={product.id}  product={product}/>)
                }
              </div>
            </div>
          </section>
        <main>
          <Sidebar />
        </main>
        
        </div>
    </div>
  )
}
