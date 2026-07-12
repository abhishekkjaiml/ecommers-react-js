import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { useWishlist } from "../context/wishlist-context";
import { useCart } from '../context/cart-context';
import { useNavigate } from 'react-router-dom';
import { findProductInCart } from '../utils/findProductsInShop';

export const WishlistPage = ({ product }) => {

  const navigate = useNavigate()
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch, cart } = useCart();
  const isProductInCart = findProductInCart(cart, product.id)

  const actualPrice = (product.price * 95.23).toFixed(2);

  const onRemoveToWishlistBtnClick = (product) => {
    wishlistDispatch({
        type: 'REMOVE_FROM_WISHLIST',
        payload: {
            id: product.id
        }
    })
  }

  const onAddToCartBtnClick = (product) => {
    !isProductInCart ? cartDispatch({
        type: 'ADD_TO_CART',
        payload: {product}
    }) : navigate('/myCart')
  }

  return (
    <div className="flex justify-center m-5">
      <div className="border flex   w-160 p-2 rounded-md">
        <img 
            src={product.images} 
            alt="product" 
            className="w-40 h-40 rounded " />
        <div    className="ml-5">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">{product.title}</h4>
            <h4 className="font-bold">Rs. {actualPrice}</h4>
            <h4 className="font-bold">Category - {product.category.name}</h4>
          </div>
          <div  className="mt-8 flex gap-4">
            <button onClick={() => onRemoveToWishlistBtnClick(product)} className=" h-10 w-50 border text-[15px] justify-center rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 text-indigo-50 border-indigo-50">
              <FavoriteOutlinedIcon />
              Remove From Wishlist
            </button>
            <button onClick={() => onAddToCartBtnClick(product)} className=" h-10 w-50 border text-[15px] justify-center rounded-md cursor-pointer text-indigo-50    bg-zinc-800  hover:bg-zinc-700 border-indigo-50">
                {
                    !isProductInCart ? <ShoppingCartOutlinedIcon /> : <ShoppingCartCheckoutOutlinedIcon />
                }
                {
                    !isProductInCart ? 'Add To Cart' : 'Go To Cart'
                }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
