import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Deals = () => {
  return (
    <div>
        <div>
          <Navbar />
          <section  className='absolute ml-50'>
            <h2 
              className='ml-100 mt-10 text-[20px] text'>
              This Page is under development
            </h2>
          </section>
        <main>
          <Sidebar />
        </main>
        
        </div>
    </div>
  )
}
