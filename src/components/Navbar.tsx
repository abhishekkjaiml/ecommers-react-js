import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Navbar = () => {
  return (
    <div>
        <header className='flex flex-wrap h-17 bg-neutral-50'>
            <div    className='text-3xl font-bold   ml-5 mt-3'>
                <h2>
                    SH<span>Bazaar</span>
                </h2>
            </div>
            <nav    className='ml-auto  gap-8 flex  mr-5'>
                <div className='mr-40 mt-3'>
                    <input  className='w-120 p-2 border rounded-tl-md rounded-bl-md' placeholder='search product'/>
                    <span   className='w-5 bg-blue-600 p-2.5 rounded-br rounded-tr text-white'>
                        <SearchOutlinedIcon />
                    </span>
                </div>
                <span   className='text-5xl'>
                    <FavoriteBorderOutlinedIcon />
                </span>
                <span   className='text-5xl'>
                    <ShoppingCartOutlinedIcon />
                </span>
                <span   className='text-5xl'>
                    <PermIdentityOutlinedIcon />
                </span>
            </nav>
        </header>
        <header className='flex flex-wrap h-12 bg-neutral-50 justify-center gap-5 font-bold'>
            <h2 className='mt-3'>HOME</h2>
            <h2  className='mt-3'>SHOP</h2>
            <h2  className='mt-3'>CATEGORIES</h2>
            <h2  className='mt-3'>DEALS</h2>
            <h2  className='mt-3'>CONTACT </h2>
        </header>
    </div>
  )
}
