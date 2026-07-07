import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const ShopPage = ({product}) => {

    const actualPrice = (product.price * 95.23).toFixed(2);
  return (
    <div    className='w-58 h-100 border-2 border-zinc-300 rounded-md'>
        <div    className='p-4'>
            <img    src={product.images} alt='product' className='w-50 h-50 flex rounded '/>
            <h4 className='text-[15px] mt-2 font-semibold'>
                {
                    product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title
                }
            </h4>
            <h4 className='text-[15px]  mt-2 font-semibold'>Rs. {actualPrice}</h4>
            <div    className='flex flex-col gap-3 items-center mt-3'>
                <button className=' h-10 w-50 border text-[15px] justify-center rounded-md cursor-pointer bg-blue-600 text-indigo-50 border-indigo-50'>
                <FavoriteBorderOutlinedIcon/>
                Add To Wishlist
            </button>
            <button className=' h-10 w-50 border text-[15px] justify-center rounded-md cursor-pointer text-indigo-50    bg-zinc-800 border-indigo-50'>
                <ShoppingCartOutlinedIcon />
                Add To Cart
            </button>
            </div>
        </div>
    </div>
  )
}
